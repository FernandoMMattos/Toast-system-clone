import { CartItem } from "@/types";

export function calculateTotal(cart: CartItem[]) {
  let total = 0;

  const donuts: CartItem[] = [];
  const coffees: CartItem[] = [];
  const others: CartItem[] = [];

  const getExtrasTotal = (item: CartItem) => {
    const extrasTotal =
      item.extras?.reduce((sum, e) => sum + (e.price ?? 0), 0) ?? 0;

    const milkPrice = item.milk?.price ?? 0;

    return extrasTotal + milkPrice;
  };

  //expandir por quantidade
  cart.forEach((item) => {
    for (let i = 0; i < item.quantity; i++) {
      if (item.category === "donut") donuts.push(item);
      else if (item.category === "coffee") coffees.push(item);
      else others.push(item);
    }
  });

  //separar cafés válidos para combo
  const validCoffees = coffees.filter(
    (c) => c.size === "small" || c.size === "large",
  );

  const otherCoffees = coffees.filter(
    (c) => c.size !== "small" && c.size !== "large",
  );

  //função para calcular preço de donuts com deals
  const calculateDonutDeals = (donutsList: CartItem[]) => {
    let sum = 0;

    const donutsCopy = [...donutsList].sort((a, b) => b.price - a.price);

    let count = donutsCopy.length;

    const deals = [
      { qty: 12, price: 34 },
      { qty: 6, price: 20 },
      { qty: 3, price: 11 },
    ];

    for (const deal of deals) {
      while (count >= deal.qty) {
        const selected = donutsCopy.slice(0, deal.qty);

        const normalPrice = selected.reduce((s, d) => s + d.price, 0);

        if (deal.price < normalPrice) {
          sum += deal.price;
          donutsCopy.splice(0, deal.qty);
          count -= deal.qty;
        } else {
          break;
        }
      }
    }

    sum += donutsCopy.reduce((s, d) => s + d.price, 0);

    return sum;
  };

  //Testa todas as combinações
  const maxCombos = Math.min(donuts.length, validCoffees.length);

  let bestPrice = Infinity;

  for (let comboCount = 0; comboCount <= maxCombos; comboCount++) {
    let tempTotal = 0;

    const donutsCopy = [...donuts];
    const coffeesCopy = [...validCoffees];

    //aplica combos
    for (let i = 0; i < comboCount; i++) {
      const coffee = coffeesCopy.shift()!;
      donutsCopy.pop();

      const comboPrice = coffee.size === "small" ? 8 : 8.3;

      tempTotal += comboPrice;
      tempTotal += getExtrasTotal(coffee);
    }

    //donuts restantes com melhor deal
    tempTotal += calculateDonutDeals(donutsCopy);

    //cafés restantes
    tempTotal += coffeesCopy.reduce(
      (s, c) => s + c.price + getExtrasTotal(c),
      0,
    );

    //outros cafés (sem size)
    tempTotal += otherCoffees.reduce(
      (s, c) => s + c.price + getExtrasTotal(c),
      0,
    );

    bestPrice = Math.min(bestPrice, tempTotal);
  }

  //outros produtos
  total += others.reduce((s, o) => s + o.price + getExtrasTotal(o), 0);

  return total + bestPrice;
}
