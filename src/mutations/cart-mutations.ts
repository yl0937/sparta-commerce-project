import { BASE_URL } from "@/constants/api";
import { CartProduct } from "@/type/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCartMutations = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      product,
      option,
      quantity,
    }: Omit<CartProduct, "id">) => {
      const res = await fetch(`${BASE_URL}/carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: crypto.randomUUID(),
          product,
          option,
          quantity,
        }),
      });
      const data: CartProduct = await res.json();
      return { data };
    },
  });
};
