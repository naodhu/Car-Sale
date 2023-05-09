// /client/src/services/carService.js
import axios from "axios";

export const getCars = async (filters = {}, searchTerm = "") => {
  const response = await axios.get("/api/cars", {
    params: {
      ...filters,
      searchTerm,
    },
  });

  console.log(response);

  return response.data;
};
