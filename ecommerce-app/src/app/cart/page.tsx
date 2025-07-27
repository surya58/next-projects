"use client";

import { useCart } from "../context/CartContext";
import CartItem from "@/components/CartItem";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center">
        <Card className="w-full max-w-sm sm:max-w-md text-center">
          <CardContent className="pt-6">
            <ShoppingBag className="h-12 sm:h-16 w-12 sm:w-16 mx-auto mb-4 text-muted-foreground" />

            <h1 className="text-xl sm:text-2xl font-bold mb-2">
              Your Cart is Empty
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Add some products to get started
            </p>

            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Shopping Cart ({items.length} items)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${(totalPrice * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full cursor-pointer" size="lg">
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full cursor-pointer"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
