"use client";
import { useCount } from "@/hook/useCount";
import { Product } from "@/type/product";
import Image from "next/image";

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  const { count, onPlus, onMinus } = useCount();
  const handleAddCart = () => {};

  return (
    <section className="flex flex-col gap-4 p-5 items-center max-w-screen-lg m-auto ">
      <div className="w-[200px]">
        <Image
          src={product.images}
          alt={product.title}
          width={200}
          height={200}
          className="rounded-sm w-[200px] object-cover"
        ></Image>
      </div>
      <h1>{product.title}</h1>
      <div className="flex gap-2">
        {product.tags.map((tag) => (
          <div
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
      <p>{product.description}</p>
      <p>${product.price.amount}</p>
      <div className="flex gap-4 items-center">
        <button
          onClick={onMinus}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          -
        </button>
        {count}
        <button
          onClick={onPlus}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddCart}
        className="bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        Add to Cart
      </button>
    </section>
  );
};

export default ProductDetail;
