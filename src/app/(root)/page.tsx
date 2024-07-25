import ProductList from "@/components/ProductList";
import NewProductList from "@/components/NewProductList";
import { getProducts } from "@/server-action";

export default async function Home() {
  const { data } = await getProducts();

  return (
    <>
      <section className="flex flex-col p-10 gap-6">
        <NewProductList />
        <ProductList products={data} />
      </section>
    </>
  );
}
