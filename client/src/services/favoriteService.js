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

export const addUserFavorite = async (favoriteUserId) => {
  const response = await api.post("/favorites/add-user", { favoriteUserId });
  return response.data;
};

export const removeUserFavorite = async (favoriteUserId) => {
  const response = await api.post("/favorites/remove-user", { favoriteUserId });
  return response.data;
};

export const login = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const register = async (email, password) => {
  const response = await api.post("/auth/register", { email, password });
  return response.data;
};
