const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() {
  const response = await fetch(`${API_URL}/product`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch products.");
  }
  return await response.json();
}

export async function createProduct(createData) {
  const response = await fetch(`${API_URL}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createData),
  });
  if (!response.ok) {
    throw new Error("Failed to update product.");
  }
  return await response.json();
}

export async function updateProduct(productId, updatedData) {
  const response = await fetch(`${API_URL}/product/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error("Failed to update product.");
  }
  return await response.json();
}

export async function deleteProduct(productId) {
  const response = await fetch(`${API_URL}/product/${productId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete product.");
  }
  return await response.json();
}
