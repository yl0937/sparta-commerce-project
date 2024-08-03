"use server";

import { CartProduct, Product } from "@/type/product";
import { BASE_URL } from "@/constants/api";
import { SearchQueryParams } from "@/type/search";

export async function getProducts({
  search = "",
  category = "ALL",
}: Partial<SearchQueryParams>) {
  let result: Product[];

  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  });
  const data: Product[] = await res.json();
  result = data;

  if (search) {
    result = result.filter((product) =>
      product.title.trim().toLowerCase().includes(search.trim().toLowerCase())
    );
  }

  if (category !== "ALL") {
    result = result.filter((product) => product.tags.includes(category));
  }

  return { data: result };
}

export async function getNewProducts() {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
    next: {
      tags: ["new"],
    },
  });
  const data: Product[] = await res.json();
  return {
    data: data.filter((product) => product.isNew),
  };
}

export async function getProductById(id: number) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });
  const data: Product = await res.json();
  return { data };
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
    next: {
      tags: ["category"],
    },
  });

  const data: Product[] = await res.json();
  const categories = new Set<string>([]);
  data.forEach((product) => {
    product.tags.forEach((tag) => {
      categories.add(tag);
    });
  });

  return {
    data: Array.from(categories).map((category) => ({
      name: category,
    })),
  };
}

export async function getCartProducts() {
  const res = await fetch(`${BASE_URL}/carts`, {
    cache: "no-store",
  });
  const data: CartProduct[] = await res.json();
  return { data };
}
