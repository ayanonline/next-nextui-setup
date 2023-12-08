import { getService } from "@/services/service";
import Link from "next/link";

interface Product {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: Array<string>;
  price: number;
  rating: number;
  thumbnail: string;
  title: string;
}

export default async function Features() {
  const { products }: { products: Product[] } = await getService("/products");

  return (
    <div className="flex flex-col  h-screen">
      <h1 className="text-2xl text-center my-5">Products page</h1>
      <div className="flex gap-4 flex-wrap justify-start">
        {products?.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="hover:shadow-md"
          >
            <div className="p-5 border-2  w-[10rem]">
              {product.title.slice(0, 10) + "..."}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
