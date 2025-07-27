"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "../app/types";
import { useCart } from "../app/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
      <Card>
        <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4">
          <div className="relative h-24 w-full sm:w-16 sm:h-16 flex-shrink-0 overflow-hidden rounded-md mx-auto sm:mx-0">
            <Image
              src={item.product.image}
              alt={item.product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h3 className="font-medium text-sm truncate">
              {item.product.name}
            </h3>
            <p className="text-muted-foreground text-sm">
              ${item.product.price.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>

            <span className="w-8 text-center font-medium">{item.quantity}</span>

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <div className="text-center sm:text-right">
            <div className="font-semibold">
              ${(item.product.price * item.quantity).toFixed(2)}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-destructive hover:text-destructive h-auto p-1"
              onClick={() => removeFromCart(item.product.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
  );
}
