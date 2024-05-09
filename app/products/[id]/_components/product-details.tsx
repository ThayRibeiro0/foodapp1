"use client";

import DeliveryInfo from "@/app/_components/delivery-info";
import DiscountBadge from "@/app/_components/discount-badge";
import ProductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import {
  formatCurrency,
  calculateProductTotalPrice,
} from "@/app/_helpers/price";
import { Prisma } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>;
  complementaryProducts: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>[];
}

const ProductDetails = ({
  product,
  complementaryProducts,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantityClick = () =>
    setQuantity((currentState) => currentState + 1);
  const handleDecreaseQuantityClick = () =>
    setQuantity((currentState) => {
      if (currentState === 1) return 1;

      return currentState - 1;
    });

  return (
    <div className="z-1 relative mt-[-1.5rem] rounded-t-full rounded-se-full bg-gradient-to-r from-pink-200 to-white py-5">
      {/* RESTAURANTE */}
      <div className="flex items-center justify-center gap-[0.375rem] px-5">
        <div className="relative h-6 w-6">
          <Image
            src={product.restaurant.imageUrl}
            alt={product.restaurant.name}
            fill
            className="rounded-full object-cover "
          />
        </div>
        <span className="text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>

      {/* NOME DO PRODUTO */}
      <h1 className="mb-2 mt-1 flex justify-center px-5 text-xl font-semibold shadow">
        {product.name}
      </h1>

      <div className="mb-5 px-8 md:px-20">
        <DeliveryInfo restaurant={product.restaurant} />
      </div>

      {/* QUANTIDADE E PREÇO DO PRODUTO*/}
      <div className="flex justify-around px-5">
        {/* QUANTIDADE */}
        <div className="flex items-center gap-3 text-center">
          <Button
            size="icon"
            variant="ghost"
            className="border border-solid border-muted-foreground"
            onClick={handleDecreaseQuantityClick}
          >
            <ChevronLeftIcon />
          </Button>
          <span className="w-4">{quantity}</span>
          <Button
            className="col-span-1 flex-initial bg-pink-300 hover:bg-lime-400"
            size="icon"
            onClick={handleIncreaseQuantityClick}
          >
            <ChevronRightIcon />
          </Button>
        </div>

        {/* PREÇO COM DESCONTO */}
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">
              {formatCurrency(calculateProductTotalPrice(product))}
            </h2>
            {product.discountPercentage > 0 && (
              <DiscountBadge product={product} />
            )}
          </div>

          {/* PREÇO ORIGINAL */}
          {product.discountPercentage > 0 && (
            <p className="text-sm text-muted-foreground line-through">
              From: {formatCurrency(Number(product.price))}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-3 px-5">
        <h3 className="flex justify-center font-semibold">🤔 About</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="flex justify-center px-5 font-semibold">🥤 Juices</h3>
        <ProductList products={complementaryProducts} />
      </div>

      <div className="mt-6 flex justify-center px-5">
        <Button className="w-50  bg-lime-300 font-semibold text-rose-500 hover:text-lime-300">
          🛒 Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
