"use client";

import { useCart } from "@/store/useCart";
import { calculateTotal } from "@/lib/pricing/calculateTotal";

export function Cart() {
  const { cart, removeItem } = useCart();

  const total = calculateTotal(cart);

  return (
    <aside className="w-80 p-4 border rounded-xl">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between">
          <span>
            {item.name} x {item.quantity}
          </span>
          <button onClick={() => removeItem(item.id)}>−</button>
        </div>
      ))}

      <div className="mt-4 font-bold">Total: €{total.toFixed(2)}</div>
    </aside>
  );
}
