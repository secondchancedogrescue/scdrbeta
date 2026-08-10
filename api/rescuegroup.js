const ENDPT_URL = process.env.RG_ENDPT_URL;
const API_KEY = process.env.RG_API_KEY;

export default async function handler(_, resp) {
  // const response = await fetch(ENDPT_URL, {
  //   headers: { Authorization: API_KEY },
  // });

  // const data = await response.json();

  // resp.status(200).json(data);

  const MAX_RETRIES = 4;
  let response;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log(`Vercel API: Attempt ${attempt}`);
      response = await fetch(ENDPT_URL, {
        headers: { Authorization: API_KEY },
      });

      if (response.ok) {
        break; // Success! Exit retry loop
      }

      console.log(
        `Upstream failed with status: ${response.status} - ${response.statusText}`,
      );

      if (attempt === MAX_RETRIES) {
        return resp
          .status(response.status)
          .json({
            error: "Upstream API failed after retries",
            details: err.message,
          });
      }
    } catch (err) {
      console.log(`Attempt ${attempt} error:`, err.message);
      if (attempt === MAX_RETRIES) {
        return resp
          .status(520)
          .json({
            error: "Upstream API connection failed",
            details: err.message,
          });
      }
    }

    // Exponential backoff delay (1s, then 2s)
    const delay = Math.pow(2, attempt - 1) * 1000;
    console.log(`Waiting ${delay / 1000} seconds before next attempt...`);

    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  const data = await response.json();
  return resp
    .status(response.status)
    .setHeader("Content-Type", "application/json")
    .setHeader("Cache-Control", "public, max-age=60")
    .json(data);
}
