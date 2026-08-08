export async function onRequest(context) {
  const { env, request } = context;
//  const cache = caches.default;

/*  const cacheKey = new Request(
    new URL("/rescuegroup", request.url),
    { method: "GET" }
  );

  const cachedResponse = await cache.match(cacheKey);

  if (cachedResponse) return cachedResponse; */

  const MAX_RETRIES = 4;
  let response;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log(`Cloudflare Function: Attempt ${attempt}`);
      response = await fetch(env.RG_ENDPT_URL, {
        headers: {
          Authorization: env.RG_API_KEY,
        },
      });

      if (response.ok) {
        break; // Success! Exit retry loop
      }

      console.log(`Upstream failed with status: ${response.status} - ${response.statusText}`);

      if (attempt === MAX_RETRIES) {
        // Return the final failed response natively
        return response;
      }
    } catch (err) {
      console.log(`Attempt ${attempt} error:`, err.message);

      if (attempt === MAX_RETRIES) {
        return new Response(
          JSON.stringify({ error: "Upstream API connection failed", details: err.message }),
          { 
            status: 520, 
            headers: { "Content-Type": "application/json" } 
          }
        );
      }
    }

    // Exponential backoff delay (1s, 2s, 4s...)
    const delay = Math.pow(2, attempt - 1) * 1000;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  // Create your custom response with caching headers, matching your original code
  const newResponse = new Response(response.body, {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60",
    },
  });

  return newResponse;
}
