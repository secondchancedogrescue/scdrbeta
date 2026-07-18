export async function onRequest(context) {
  const { env, request } = context;
  const cache = caches.default;

  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(env.RG_ENDPT_URL, {
    headers: {
      Authorization: env.RG_API_KEY,
    },
  });

  const data = await response.json();

  const newResponse = new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=14400, max-age=60"
    }
  });

  context.waitUntil(cache.put(request, newResponse.clone()));

  return newResponse;
}
