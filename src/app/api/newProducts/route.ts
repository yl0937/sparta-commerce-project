import { Product } from "@/type/product";

export async function GET() {
  const res = await fetch("http://localhost:4000/products", {
    next: {
      revalidate: 20,
      tags: ["new"],
    },
  });

  const data: Product[] = await res.json();
  const newData = data.filter((p) => p.isNew);
  return Response.json({ data: newData });
}
