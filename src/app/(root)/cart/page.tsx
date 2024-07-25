import { getProducts } from "@/server-action";
import { Product } from "@/type/product";
import Link from "next/link";
import Image from "next/image";

const CartPage = async () => {
  const { data: products }: { data: Product[] } = await getProducts();
  return (
    <section className="flex flex-col items-center p-5 w-full justify-center max-w-screen-lg m-auto min-h-screen py-2">
      <h1>Cart</h1>
      {products.length > 0 ? (
        <div className="flex flex-col gap-4 w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 pb-4 border-b border-white"
            >
              <Image
                width={80}
                height={80}
                src={product.images}
                alt={product.title}
                className="w-[80px] h-[80px] object-cover flex-shrink-0"
              ></Image>
              <div className="flex-1 truncate">
                {product.title} - ${product.price.amount}
              </div>
              <div>{0}</div>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
                Remove
              </button>
            </div>
          ))}

          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            Checkout
          </button>
        </div>
      ) : (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      )}
    </section>
  );
};

export default CartPage;
