"use client";

import { useState } from "react";
import { categories, SelectCategory } from "@/data/categories";
import { CategoryNav } from "@/views/CategoryNav";
import { ProductGrid } from "@/components/ProductGrid";
import { SideMenu } from "@/views/SideMenu";
import { ExtrasMenu } from "@/views/ExtrasMenu";
import PaymentMenu from "@/views/PaymentMenu";
import OrderFinished from "@/views/OrderFinished";

type ViewMode =
  | { type: "category"; category: SelectCategory }
  | { type: "extras"; itemId: string }
  | { type: "payment" }
  | { type: "order_success"; change: number };

export default function Home() {
  const [view, setView] = useState<ViewMode>({
    type: "category",
    category: "hot",
  });

  if (view.type === "payment") {
    return (
      <PaymentMenu
        onBack={() => setView({ type: "category", category: "hot" })}
        onSuccess={(change) => setView({ type: "order_success", change })}
      />
    );
  }

  return (
    <section className="flex h-screen overflow-x-hidden">
      {view.type === "order_success" ? (
        <OrderFinished
          onDone={() => setView({ type: "category", category: "hot" })}
          change={view.change}
        />
      ) : (
        <>
          <SideMenu
            onSelectItem={(id) => setView({ type: "extras", itemId: id })}
            selectedItemId={view.type === "extras" ? view.itemId : undefined}
            onCheckout={() => setView({ type: "payment" })}
          />
          <section className="flex gap-10 m-8 flex-col">
            <CategoryNav
              selected={view.type === "category" ? view.category : "hot"}
              onSelect={(cat) => setView({ type: "category", category: cat })}
            />
            {view.type === "category" && (
              <ProductGrid
                products={categories[view.category].products}
                category={categories[view.category].type}
              />
            )}{" "}
            {view.type === "extras" && (
              <ExtrasMenu
                itemId={view.itemId}
                onBack={() => setView({ type: "category", category: "hot" })}
              />
            )}
          </section>
        </>
      )}
    </section>
  );
}
