import axios from "axios";

// Cache
let cachedDogs = null;
let lastFetchTime = null;
const CACHE_DURATION = 5 * 60 * 1000;

export const getAllDogs = async () => {
  const now = Date.now();
  if (cachedDogs && lastFetchTime && now - lastFetchTime < CACHE_DURATION) {
    return cachedDogs;
  }

  let response;
  
  try {
    response = await axios.get("/rescuegroup");
  } catch (err) {
    if (err.response?.status === 520 ) {
      console.log("Retrying rescuegroup after 520");
      await new Promise((resolve) => setTimeout(resolve, 300));

      try {
        response = await axios.get("/rescuegroup");
      } catch (retryErr) {
        console.error("Retry Failed:", retryErr.resoponse?.status);
        throw retryErr;
      }
    } else { throw err; }
  }
  
  const dogs = response.data.data;

  const processedDogs = dogs.map((dog) => {
    const picIds = dog.relationships.pictures.data || [];

    const allPics = picIds.map((pic) =>
      generatePictureUrl(dog.attributes.pictureThumbnailUrl, pic.id),
    );

    return {
      ...dog,
      attributes: {
        ...dog.attributes,
        pictureThumbnailUrl: allPics[0] || null,
        allPics,
      },
    };
  });

  cachedDogs = processedDogs;
  lastFetchTime = now;
  return processedDogs;
};

// Helper function to replace picture id with one of the high res
const generatePictureUrl = (templateUrl, newPicId) => {
  if (!templateUrl || !newPicId) return templateUrl;

  const newPicUrl = templateUrl.replace(
    /\/[^/]+\.jpg(\?.*)?$/,
    `/${newPicId}.jpg`,
  );

  return newPicUrl.split("?")[0];
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
