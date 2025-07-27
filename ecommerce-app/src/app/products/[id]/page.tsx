"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "../../data/product";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const productId = parseInt(params.id as string);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container py-8 mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
            <p className="text-muted-foreground mb-4">
              The product you&#39;re looking for doesn&#39;t exist.
            </p>
            <Button asChild>
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col gap-8 pt-6">
          {/* Back Button */}
          <div className="self-start">
            <Button asChild variant="outline" className="ml-2">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          {/* Product Content */}
          <div className="flex flex-col">
            {/* Product Image */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                {product.name}
              </h1>
              <Badge className="mb-2">{product.category}</Badge>
              <Separator className="my-4" />
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                {product.description}
              </p>
              <div className="text-lg sm:text-xl font-semibold mb-4">
                ${product.price}
              </div>
              <Button
                disabled={isAdding}
                onClick={async () => {
                  setIsAdding(true);
                  await addToCart(product);
                  setIsAdding(false);
                }}
                className="cursor-pointer"
              >
                <ShoppingCart className="mr-2 h-4 w-4 " />
                {isAdding ? "Adding..." : "Add to Cart"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
