import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../../services/products";

export const useFetchProduct = (id: string | undefined) =>
  useQuery({
    queryKey: ["productData", id],
    queryFn: () => getSingleProduct(id),
  });
