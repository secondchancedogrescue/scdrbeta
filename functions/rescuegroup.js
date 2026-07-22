export async function onRequest(context) {
  const { env, request } = context;
//  const cache = caches.default;

/*  const cacheKey = new Request(
    new URL("/rescuegroup", request.url),
    { method: "GET" }
  );

  const cachedResponse = await cache.match(cacheKey);

  if (cachedResponse) return cachedResponse; */

  const response = await fetch(env.RG_ENDPT_URL, {
    headers: {
      Authorization: env.RG_API_KEY,
    },
  });

  if (!response.ok) {
    console.log(response.statusText);
    return response;
  }

  const newResponse = new Response(response.body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60",
    },
  });

 /*  context.waitUntil(
    cache.put(cacheKey, newResponse.clone())
  ); */

  return newResponse;
}
