import { useState } from "react";
import { useCart } from "@/store/useCart";
import { extraCategories, ExtraCategories } from "@/data/categories";

type Props = {
  itemId: string;
  onBack: () => void;
};

export function ExtrasMenu({ itemId, onBack }: Props) {
  const { cart, addExtraToItem, setMilkForItem } = useCart();

  const item = cart.find((i) => i.id === itemId);

  const [selected, setSelected] = useState<ExtraCategories>("milk");

  if (!item) return null;

  const current = extraCategories[selected];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Customizing {item.name}</h2>

      <div className="flex gap-2">
        {Object.entries(extraCategories).map(([key, cat]) => (
          <button
            key={key}
            onClick={() => setSelected(key as ExtraCategories)}
            className="bg-gray-200 p-2 rounded cursor-pointer"
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {current.products.map((p) => (
          <button
            key={p.name}
            className="bg-white p-3 rounded border cursor-pointer"
            onClick={() => {
              if (selected === "milk") {
                setMilkForItem(itemId, p);
              } else {
                addExtraToItem(itemId, p);
              }
            }}
          >
            {p.name} (€{p.price})
          </button>
        ))}
      </div>

      <button onClick={onBack} className="bg-gray-200 px-3 py-1 rounded w-fit cursor-pointer">
        ← Back
      </button>
    </section>
  );
}
