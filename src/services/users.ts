import { axiosClient } from "./api";

export const getProducts = async () => {
  const response = await axiosClient.get(`/users
    `);
  return response.data;
};
