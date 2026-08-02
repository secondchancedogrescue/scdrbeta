import axios from "axios";

// Cache
let cachedDogs = null;
let lastFetchTime = null;
const CACHE_DURATION = 5 * 60 * 1000;

// Helper function: checks if .jpg exists via HEAD request, falls back to .png
const generatePictureUrl = async (templateUrl, newPicId) => {
  if (!templateUrl || !newPicId) return templateUrl;

  // Strip query parameters and replace the filename with the new picture ID
  const baseUrl = templateUrl.replace(
    /\/[^/]+(\.jpg|\.png)?(\?.*)?$/,
    `/${newPicId}`,
  );

  const jpgUrl = `${baseUrl}.jpg`;
  const pngUrl = `${baseUrl}.png`;

  try {
    const jpgResponse = await fetch(jpgUrl, { method: "HEAD" });
    if (jpgResponse.ok) return jpgUrl;
  } catch {
    // Continue to PNG check
  }

  try {
    const pngResponse = await fetch(pngUrl, { method: "HEAD" });
    if (pngResponse.ok) return pngUrl;
  } catch {
    // Continue to default fallback
  }

  // Default fallback to the jpg candidate if both checks fail
  return jpgUrl;
};

export const getAllDogs = async () => {
  const now = Date.now();
  if (cachedDogs && lastFetchTime && now - lastFetchTime < CACHE_DURATION) {
    return cachedDogs;
  }

  let response;

  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      console.log(`Attempt ${attempt + 1}`);
      response = await axios.get("/api/rescuegroup");
      break;
    } catch (err) {
      console.log("Failed", attempt + 1, err.response?.status, err.code);

      if (err.response?.status !== 520 || attempt === 1) {
        console.log("Not retrying");
        throw err;
      }

      console.log("Retrying rescuegroup after 520");
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  const dogs = response.data.data;

  // Process all dogs and their picture lists concurrently using Promise.all
  const processedDogs = await Promise.all(
    dogs.map(async (dog) => {
      const picIds = dog.relationships.pictures.data || [];

      const allPics = await Promise.all(
        picIds.map((pic) =>
          generatePictureUrl(dog.attributes.pictureThumbnailUrl, pic.id),
        ),
      );

      return {
        ...dog,
        attributes: {
          ...dog.attributes,
          pictureThumbnailUrl: allPics[0] || null,
          allPics,
        },
      };
    }),
  );

  cachedDogs = processedDogs;
  lastFetchTime = now;
  return processedDogs;
};

export const getDogById = async (id) => {
  const dogs = await getAllDogs();
  return dogs.find((dog) => dog.id === id);
};

export const getRandomDogs = async (count = 3) => {
  const dogs = await getAllDogs();
  const shuffled = [...dogs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
