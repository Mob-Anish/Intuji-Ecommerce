import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products";

export const useFetchProducts = () =>
  useQuery({
    queryKey: ["productsData"],
    queryFn: (data) => getProducts(data),
  });
