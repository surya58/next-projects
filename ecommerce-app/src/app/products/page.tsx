import { products } from '../data/product';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="container py-8 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-muted-foreground">
          Discover our curated collection of premium products
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}