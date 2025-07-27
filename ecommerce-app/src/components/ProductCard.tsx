import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../app/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-2 left-2" variant="secondary">
            {product.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 line-clamp-1">
          {product.name}
        </CardTitle>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="text-2xl font-bold text-semibold">
          ${product.price.toFixed(2)}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/products/${product.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}