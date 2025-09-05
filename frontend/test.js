export async function getCategories() {
  const response = await fetch(`http://localhost:8000/category`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch categories.");
  }
  return await response.json();
}

await getCategories().then((response) => console.log(response.categories))
