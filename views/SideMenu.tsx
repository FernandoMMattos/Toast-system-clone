import Button from "@/components/Button";
import { useCart } from "@/store/useCart";
import { calculateTotal } from "@/lib/pricing/calculateTotal";

type Props = {
  onSelectItem: (id: string) => void;
  selectedItemId?: string;
  onCheckout: () => void;
};

export function SideMenu({ onSelectItem, selectedItemId, onCheckout }: Props) {
  const { cart, removeItem, removeExtraFromItem, removeMilkFromItem, clearCart } =
    useCart();
  const subtotal = calculateTotal(cart);

  return (
    <aside className="w-max h-100% justify-around flex flex-col m-4 gap-4 bg-white p-4 rounded-md">
      <section className="flex justify-around items-center">
        <button className="bg-gray-300 p-2 rounded-md">User</button>
        <button className="bg-gray-300 p-2 rounded-md">Split</button>
        <button className="bg-gray-300 p-2 rounded-md">Discount</button>
      </section>

      <section className="border-y-2 border-gray-300 h-full">
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className={`flex justify-between ${selectedItemId === item.id ? "bg-blue-100" : ""} `}
            >
              <div className="flex flex-col w-full gap-2">
                <div className="flex justify-between">
                  <button
                    className="cursor-pointer flex"
                    onClick={() => {
                      if (item.category === "coffee") onSelectItem(item.id);
                    }}
                  >
                    {item.quantity} {item.name}
                  </button>

                  <div className="flex gap-2">
                    <p>€{item.price.toFixed(2)}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="cursor-pointer"
                    >
                      ❌
                    </button>
                  </div>
                </div>

                {item.milk && (
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 ml-2">
                      {item.milk.name} Milk
                    </p>

                    <div className="flex gap-2">
                      <p className="text-sm text-gray-500 ml-2">
                        €{item.milk.price?.toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeMilkFromItem(item.id)}
                        className="cursor-pointer"
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                )}

                {item.extras?.map((extra, i) => (
                  <div key={i} className="flex justify-between">
                    <p className="text-sm text-gray-500 ml-2 justify-between">
                      {extra.name}
                    </p>

                    <div className="flex gap-2">
                      <p className="text-sm text-gray-500 ml-2">
                        €{extra.price?.toFixed(2)}
                      </p>
                      <button
                        className="cursor-pointer"
                        onClick={() => removeExtraFromItem(item.id, extra.name)}
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2"></div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>€{subtotal.toFixed(2)}</p>
        </div>
        <div className=" flex gap-2">
          <Button color="bg-white" onClick={clearCart}>No sale</Button>
          <Button color="bg-white">Print</Button>
          <Button
            color="bg-blue-700"
            textColor="text-white"
            disabled={cart.length == 0 ? true : false}
            onClick={onCheckout}
          >
            Pay €{subtotal.toFixed(2)}
          </Button>
        </div>
      </section>
    </aside>
  );
}
