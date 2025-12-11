import { useMutation, useQuery } from "@tanstack/react-query";
import { addItemstoCart, getAllCarts } from "../../services/cart";

export const useAddToCart = () =>
  useMutation({
    mutationFn: (products: any) => addItemstoCart(products),
  });

export const useFetchAllCart = () =>
  useQuery({
    queryKey: ["fetchCartItems"],
    queryFn: () => getAllCarts(),
  });
