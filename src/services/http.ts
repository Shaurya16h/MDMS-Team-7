import axios from "axios";

const BASE_URL = "http://localhost:3000";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET - Fetch data
export async function getData<T>(endpoint: string): Promise<T> {
  const response = await API.get<T>(endpoint);
  return response.data;
}

// POST - Create data
export async function postData<T>(endpoint: string, data: unknown): Promise<T> {
  const response = await API.post<T>(endpoint, data);
  return response.data;
}

// PUT - Update complete data
export async function updateData<T>(
  endpoint: string,
  data: unknown,
): Promise<T> {
  const response = await API.put<T>(endpoint, data);
  return response.data;
}

// PATCH - Update partial data
export async function patchData<T>(
  endpoint: string,
  data: unknown,
): Promise<T> {
  const response = await API.patch<T>(endpoint, data);
  return response.data;
}

// DELETE - Delete data
export async function deleteData(endpoint: string): Promise<void> {
  await API.delete(endpoint);
}

export default API;
