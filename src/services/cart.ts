import { axiosClient } from "./api";

export const getAllCarts = async () => {
  const response = await axiosClient.get(`/carts/1`);
  return response.data;
};

export const addItemstoCart = async (products: any) => {
  const response = await axiosClient.post(
    `/carts/add
    `,
    {
      userId: 1,
      products,
    }
  );
  return response.data;
};
