const ENDPT_URL = process.env.RG_ENDPT_URL;
const API_KEY = process.env.RG_API_KEY;

export default async function handler(_, resp) {
  const response = await fetch(ENDPT_URL, {
    headers: { Authorization: API_KEY },
  });

  const data = await response.json();

  resp.status(200).json(data);
}
