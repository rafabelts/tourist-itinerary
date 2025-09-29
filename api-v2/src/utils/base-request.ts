export async function baseRequest<T>(authToken: string, url: string) {
  const response = await fetch(url, {
    headers: {
      accept: "application/vnd.amadeus+json",
      Authorization: `Bearer ${authToken}`,
    },
    method: "GET",
  });

  const responseData = await response.json();

  if (!responseData.data) throw new Error("Data not found");

  return responseData.data.slice(0, 3) as Array<T>;
}
