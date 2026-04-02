import { useEffect, useState } from "react";

type Props = {
  change: number;
  onDone: () => void;
};

const OrderFinished = ({ onDone, change }: Props) => {
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    const timer = setTimeout(onDone, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onDone]);
  return (
    <section className="flex flex-col bg-white w-screen h-screen items-center justify-center gap-3">
      <label className="text-3xl font-bold">Order Completed!</label>

      <label className="text-2xl">
        Amount of Change: €{change.toFixed(2)}
      </label>

      <button className="p-5 bg-blue-500 rounded w-[40%] cursor-pointer" onClick={onDone}>
        New Order
      </button>

      <p>Returning in: {seconds}s</p>
    </section>
  );
};

export default OrderFinished;
