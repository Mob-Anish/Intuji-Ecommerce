import { axiosClient } from "./api";

export const getProducts = async () => {
  const response = await axiosClient.get(`/carts
    `);
  return response.data;
};
