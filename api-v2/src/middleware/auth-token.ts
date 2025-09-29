import type { MiddlewareHandler } from "hono";

let tokenData: { access_token: string; expiration: number } | null = null;

async function getAuthToken(): Promise<string> {
  const response = await fetch(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "7QG7qM0gZxsPDxlpJT7etOBLsplhmEQU",
        client_secret: "H1LrripFmjaUQLWr",
      }),
    },
  );

  const data = await response.json();

  if (!data.access_token) {
    throw new Error("No access_token in response");
  }

  tokenData = {
    access_token: data.access_token,
    expiration: Date.now() + data.expires_in * 1000,
  };

  return tokenData.access_token;
}

export const amadeusMiddleware: MiddlewareHandler = async (c, next) => {
  let token: string;

  if (!tokenData || tokenData.expiration <= Date.now()) {
    token = await getAuthToken();
  } else {
    token = tokenData.access_token;
  }

  c.set("amadeusToken", token);
  await next();
};
