import api from "./api";

export const searchCars = async (searchTerm) => {
  const response = await api.get("/cars", { params: { q: searchTerm } });
  return response.data;
};

export const getCar = async (id) => {
  const response = await api.get(`/cars/${id}`);
  return response.data;
};
