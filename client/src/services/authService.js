import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Replace with your backend server URL
});

export const login = async (email, password) => {
  try {
    const response = await api.post("/users/login", { email, password });
    const { token, user } = response.data;
    localStorage.setItem("authToken", token);
    return user;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (user) => {
  try {
    const response = await api.post("users/register", user);
    const { token, user: registeredUser } = response.data;
    localStorage.setItem("authToken", token);
    return registeredUser;
  } catch (error) {
    throw error.response.data;
  }
};
