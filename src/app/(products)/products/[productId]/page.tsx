"use client";

import { getService } from "@/services/service";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductDetails {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const [productDetatils, setProductDetails] = useState<ProductDetails>();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const data = await getService(`/products/${params.productId}`);
    console.log(data);
    setProductDetails(data);
  };
  if (!productDetatils) return null;
  return (
    <div className="flex flex-col items-center">
      <h1 className="my-5 text-2xl font-semibold">{productDetatils?.title}</h1>
      <Image
        src={productDetatils?.thumbnail}
        alt="Thumbnail"
        height="300"
        width="300"
      />
    </div>
  );
}
