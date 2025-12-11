import { getCustomQueries } from "../hooks/queries";
import { axiosClient } from "./api";

export const getProducts = async (data: any) => {
  console.log(data);
  const queries = getCustomQueries(data);
  const response = await axiosClient.get(`/products/search?${queries}`);
  return response.data;
};
