import axios from "axios";

// Cache
let cachedDogs = null;
let lastFetchTime = null;
const CACHE_DURATION = 5 * 60 * 1000;
let fetchPromise = null;

// CHANGE: Cache the original RescueGroups records separately from processed dogs.
// This allows the homepage to select 3 dogs before resolving any photo URLs.
let cachedRawDogs = null;
let lastRawFetchTime = null;
let rawFetchPromise = null;

// CHANGE: Retrieve and cache all raw dog records without resolving their photos.
const getRawDogs = async () => {
  const now = Date.now();

  if (
    cachedRawDogs &&
    lastRawFetchTime &&
    now - lastRawFetchTime < CACHE_DURATION
  ) {
    return cachedRawDogs;
  }

  if (rawFetchPromise) {
    return rawFetchPromise;
  }

  rawFetchPromise = (async () => {
    try {
      console.log("Calling rescuegroup");
      const response = await axios.get("/functions/rescuegroup");

      cachedRawDogs = response.data.data;
      lastRawFetchTime = Date.now();

      return cachedRawDogs;
    } finally {
      rawFetchPromise = null;
    }
  })();

  return rawFetchPromise;
};

// CHANGE: Resolve only the profile photo for a dog.
const getDogWithProfilePicture = async (dog) => {
  const picIds = (dog.relationships.pictures.data || []).slice(0, 4);

  const pictureThumbnailUrl = picIds.length
    ? await generatePictureUrl(dog.attributes.pictureThumbnailUrl, picIds[0].id)
    : null;

  return {
    ...dog,
    attributes: {
      ...dog.attributes,
      pictureThumbnailUrl,
      allPics: picIds.length ? [pictureThumbnailUrl] : [],
    },
  };
};

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
      // CHANGE: Resolve only one photo per dog for the Available Dogs page.
      const dogs = await getRawDogs();

      const processedDogs = await Promise.all(
        dogs.map((dog) => getDogWithProfilePicture(dog)),
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
  // CHANGE: Resolve all available gallery photos only for the selected dog.
  const dogs = await getRawDogs();
  const dog = dogs.find((dog) => dog.id === id);

  if (!dog) return undefined;

  const picIds = (dog.relationships?.pictures?.data || []).slice(0, 4);

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
};

export const getRandomDogs = async (count = 3) => {
  // CHANGE: Select random non-courtesy dogs BEFORE resolving their photos.
  const dogs = await getRawDogs();

  const featuredDogs = dogs.filter(
    (dog) => dog.attributes.isCourtesyListing !== true,
  );

  const shuffled = [...featuredDogs].sort(() => 0.5 - Math.random());

  // CHANGE: Resolve only the profile photos of the selected dogs.
  const selectedDogs = shuffled.slice(0, count);

  return Promise.all(selectedDogs.map((dog) => getDogWithProfilePicture(dog)));
};
