import api from "./api";

export const getFavorites = async () => {
  const response = await api.get("/favorites");
  return response.data;
};

export const addFavorite = async (carId) => {
  const response = await api.post("/favorites", { carId });
  return response.data;
};

export const removeFavorite = async (id) => {
  await api.delete(`/favorites/${id}`);
};
