import axios from "axios";

// Cache
let cachedDogs = null;
let lastFetchTime = null;
const CACHE_DURATION = 5 * 60 * 1000;
let fetchPromise = null;

export const getAllDogs = async () => {
  const now = Date.now();
  if (cachedDogs && lastFetchTime && now - lastFetchTime < CACHE_DURATION) {
    return cachedDogs;
  }

  if (fetchPromise) {
    return fetchPromise;
  }

  fetchPromise = (async () => {
    try {
      let response;
      const Max_tries = 3;

      for (let attempt = 0; attempt <= Max_tries; attempt++) {
        try {
          console.log(`Attempt ${attempt + 1}`);
          response = await axios.get("/api/rescuegroup");
          break;
        } catch (err) {
          console.log("Failed", attempt + 1, err.response?.status, err.code);

          // If it's NOT a 520, or we've already reached our max retries, stop.
          if (err.response?.status !== 520 || attempt === Max_tries) {
            console.log("Not retrying");
            throw err;
          }

          // Only reaches here for 520s before the last attempt.
          console.log("Retrying rescuegroup after 520");
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }

      const dogs = response.data.data;

      // Process all dogs in parallel
      const processedDogs = await Promise.all(
        dogs.map(async (dog) => {
          const picIds = (dog.relationships.pictures.data || []).slice(0, 4);

          // Fetch all picture URLs for this specific dog concurrently
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
      lastFetchTime = Date.now();
      return processedDogs;
    } finally {
      fetchPromise = null;
    }
  })();

  return fetchPromise;
};

// Helper function using Image objects to reliably bypass CORS issues when checking extensions
const generatePictureUrl = (templateUrl, newPicId) => {
  if (!templateUrl || !newPicId) return Promise.resolve(templateUrl);

  // Strip query parameters and replace the filename with the new picture ID (.jpg base)
  const baseUrl = templateUrl.replace(
    /\/[^/]+(\.jpg|\.png)?(\?.*)?$/,
    `/${newPicId}`,
  );

  const jpgUrl = `${baseUrl}.jpg`;
  const pngUrl = `${baseUrl}.png`;

  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => resolve(jpgUrl);
    img.onerror = () => {
      const pngImg = new Image();
      pngImg.onload = () => resolve(pngUrl);
      pngImg.onerror = () => resolve(jpgUrl); // Fallback to jpg if both fail
      pngImg.src = pngUrl;
    };
    img.src = jpgUrl;
  });
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
