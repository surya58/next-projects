import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background to-muted/20 min-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              E-Shop
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Discover amazing products at great prices. Your one-stop shop for
            everything you need.
          </p>
          <Button size="lg" asChild>
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
