import { calculateTotal } from "@/lib/pricing/calculateTotal";
import { useCart } from "@/store/useCart";
import { useState } from "react";
import PaymentButton from "../components/PaymentButton";

type Props = {
  onBack: () => void;
  onSuccess: (change: number) => void;
};

const PaymentMenu = ({ onBack, onSuccess }: Props) => {
  const { cart, clearCart } = useCart();
  const total = calculateTotal(cart);

  const [error, setError] = useState("");
  const [amount, setAmount] = useState(0);

  const formatAmount = (value: number) => {
    return (value / 100).toFixed(2);
  };

  const handleNumber = (num: number) => {
    setAmount((prev) => prev * 10 + num);
  };

  const handleBackspace = () => {
    setAmount((prev) => Math.floor(prev / 10));
  };

  const handleClear = () => {
    setAmount(0);
  };

  const getQuickAmounts = (total: number) => {
    const notes = [1, 2, 5, 10, 20, 50];
    const results: number[] = [];

    const roundedUp = Math.ceil(total);
    results.push(roundedUp);

    const candidates = notes.filter((m) => m >= total);
    results.push(...candidates);

    for (let i = notes.length - 1; i >= 0; i--) {
      for (let j = i; j >= 0; j--) {
        const sum = notes[i] + notes[j];
        if (sum >= total) results.push(sum);
      }
    }

    const unique = Array.from(new Set(results)).sort((a, b) => a - b);

    return unique.filter((v) => v >= total).slice(0, 4);
  };

  const quickAmounts = getQuickAmounts(total);

  const handleCashPayment = (value: number) => {
    if (value < total) {
      setError("Insufficient amount");
      return;
    }

    const change = value - total;

    setError("");
    clearCart();
    onSuccess(change);
  };

  return (
    <section className="flex h-screen gap-4 p-4 bg-gray-100">
      {/* SideBar Menu */}
      <div className="w-1/4 bg-white rounded p-4 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-lg mb-2">Order</h2>

          {cart.map((item) => (
            <div key={item.id} className="mb-2">
              <p>
                {item.quantity} {item.name}
              </p>

              {item.milk && (
                <p className="text-sm text-gray-500 ml-2">{item.milk.name}</p>
              )}

              {item.extras?.map((e, i) => (
                <p key={i} className="text-sm text-gray-500 ml-2">
                  {e.name}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div>
          <p className="font-bold">Total: €{total.toFixed(2)}</p>
        </div>
      </div>

      {/* Keypad */}
      <div className="w-2/4 rounded p-4 flex flex-col">
        <h2 className="font-bold text-2xl">Balance due €{total.toFixed(2)}</h2>

        <label className="text-2xl mt-4 mb-4 justify-center flex">
          Amount given: €{formatAmount(amount) || "0.00"}
        </label>

        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3].map((n, i) => (
            <PaymentButton key={i} onClick={() => handleNumber(n)}>
              {n}
            </PaymentButton>
          ))}

          <PaymentButton
            onClick={() => handleCashPayment(quickAmounts[0])}
            color="gray-600"
            text="white"
          >
            €{quickAmounts[0]}
          </PaymentButton>

          {[4, 5, 6].map((n, i) => (
            <PaymentButton key={i} onClick={() => handleNumber(n)}>
              {n}
            </PaymentButton>
          ))}

          <PaymentButton
            onClick={() => handleCashPayment(quickAmounts[1])}
            color="gray-600"
            text="white"
          >
            €{quickAmounts[1]}
          </PaymentButton>

          {[7, 8, 9].map((n, i) => (
            <PaymentButton key={i} onClick={() => handleNumber(n)}>
              {n}
            </PaymentButton>
          ))}

          <PaymentButton
            onClick={() => handleCashPayment(quickAmounts[2])}
            color="gray-600"
            text="white"
          >
            €{quickAmounts[2]}
          </PaymentButton>

          <PaymentButton onClick={handleClear}>C</PaymentButton>
          <PaymentButton onClick={() => handleNumber(0)}>0</PaymentButton>
          <PaymentButton onClick={() => setAmount((prev) => prev * 100)}>
            00
          </PaymentButton>
          <PaymentButton onClick={handleBackspace}>⌫</PaymentButton>
        </div>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>

      {/* Payment Methods */}
      <div className="w-1/4 rounded p-4 flex flex-col gap-2">
        <h2 className="font-bold text-lg">Payment</h2>
        <button
          className="bg-blue-600 text-white p-3 rounded cursor-pointer"
          onClick={() => {
            onSuccess(0.0);
            clearCart();
          }}
        >
          Card
        </button>
        <button
          className="p-3 rounded cursor-pointer bg-blue-600 text-white"
          onClick={() => handleCashPayment(amount === 0 ? total : amount)}
        >
          Cash
        </button>
        <button className="bg-gray-200 p-3 rounded cursor-pointer">
          Gift Card
        </button>
        <button
          onClick={onBack}
          className="mt-auto bg-red-500 p-2 rounded cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default PaymentMenu;
