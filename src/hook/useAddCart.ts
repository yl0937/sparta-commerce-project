import { useCartContext } from "@/components/providers/ZustandProvider";
import { useCartMutations } from "@/mutations/cart-mutations";
import { CartProduct } from "@/type/product";

export const useAddCart = () => {
  const addProduct = useCartContext((state) => state.addProduct);
  const { mutateAsync } = useCartMutations();

  const addProductToCart = async (item: Omit<CartProduct, "id">) => {
    const { data } = await mutateAsync(item);
    addProduct(data);
  };

  return { addProductToCart };
};
