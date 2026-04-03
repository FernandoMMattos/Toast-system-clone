import { useCart } from "@/store/useCart";
import { Category, RawProduct } from "@/types";
import Button from "./Button";

export function ProductGrid({
  products,
  category,
}: {
  products: RawProduct[];
  category: Category;
}) {
  const { addItem } = useCart();

  return (
    <section className="grid grid-cols-5 gap-2 sm:justify-around w-full">
      {products.map((product) => (
        <Button
          key={product.name}
          color={product.color ?? "bg-white"}
          onClick={() => {
            addItem({
              id: crypto.randomUUID(),
              name: product.name,
              price: product.price ?? 0,
              category: category,
              size: product.size,
            });
          }}
        >
          {product.name}
        </Button>
      ))}
    </section>
  );
}
