import { RawProduct } from "@/types";

const hot_drinks: RawProduct[] = [
  { name: "Latte 8oz", price: 4.2, color: "bg-rose-200", size: "small" },
  { name: "Cappuccino 8oz", price: 4.2, color: "bg-indigo-400", size: "small" },
  { name: "Americano 8oz", price: 3.6, color: "bg-yellow-200", size: "small" },
  { name: "Mocha 8oz", price: 4.4, color: "bg-blue-200", size: "small" },
  { name: "Hot Choc 8oz", price: 4.4, color: "bg-orange-200", size: "small" },
  { name: "Latte 12oz", price: 4.4, color: "bg-rose-200", size: "large" },
  {
    name: "Cappuccino 12oz",
    price: 4.4,
    color: "bg-indigo-400",
    size: "large",
  },
  { name: "Americano 12oz", price: 3.8, color: "bg-yellow-200", size: "large" },
  { name: "Mocha 12oz", price: 4.6, color: "bg-blue-200", size: "large" },
  { name: "Hot Choc 12oz", price: 4.6, color: "bg-orange-200" },
  { name: "Espresso", price: 3.15, color: "bg-pink-300" },
  { name: "Macchiato", price: 3.55, color: "bg-amber-300" },
  { name: "Black Tea", price: 3.4, color: "bg-gray-600" },
  { name: "Chai Latte", price: 4.6, color: "bg-slate-300" },
  { name: "Flat White", price: 4.2, size: "small" },
  { name: "Double Espresso", price: 3.75, color: "bg-pink-300" },
  { name: "Double Macchiato", price: 4.15, color: "bg-amber-300" },
  { name: "Herbal Tea", price: 3.6, color: "bg-green-600" },
  { name: "Dirty Chai", price: 5.2, color: "bg-slate-300" },
  { name: "Matcha Latte", price: 4.75, color: "bg-green-400" },
];

const cold_drinks = [
  { name: "Caramel Frappe", price: 5.95, color: "bg-blue-400" },
  { name: "Hazelnut Frappe", price: 5.95, color: "bg-blue-400" },
  { name: "Vanilla Frappe", price: 5.95, color: "bg-blue-400" },
  { name: "Iced Latte", price: 4.6, color: "bg-rose-200" },
  { name: "Iced Americano", price: 4.4, color: "bg-yellow-200" },
  { name: "Milk 12oz", price: 2.2 },
  { name: "BTL Water", price: 2.65, color: "bg-sky-300" },
  { name: "BTL Coca Cola", price: 3.1, color: "bg-red-500" },
  { name: "BTL Club Orange", price: 3.1, color: "bg-orange-500" },
  { name: "Can Sprite", price: 2.65, color: "bg-green-600" },
  { name: "Iced Chai", price: 4.7, color: "bg-slate-500" },
  { name: "Iced Dirty Chai", price: 5.2, color: "bg-slate-500" },
  { name: "Iced Matcha", price: 4.95, color: "bg-green-400" },
];

const extras = [
  { name: "Vanilla", price: 0.5 },
  { name: "Hazelnut", price: 0.5 },
  { name: "Caramel", price: 0.5 },
  { name: "Marshmallows", price: 0.5 },
  { name: "Extra Espresso Shot", price: 1.95 },
];

const alternatives_milks = [
  { name: "Oat", price: 0.4 },
  { name: "Coconut", price: 0.4 },
  { name: "Almond", price: 0.4 },
  { name: "Soya", price: 0.4 },
];

const cheap_donut = [
  { name: "Sugar Ring", price: 3.5 },
  { name: "Vanilla Glaze", price: 3.5 },
  { name: "Vanilla Sprinkles", price: 3.75 },
];

const regular_donuts = [
  { name: "Unicorn Magic", price: 4, color: "bg-pink-300" },
  { name: "Apple Crumble", price: 4, color: "bg-gray-300" },
  { name: "Blueberry Cheesecake", price: 4, color: "bg-blue-300" },
  { name: "Red Velvet", price: 4, color: "bg-red-400" },
  { name: "Dulce de Leche", price: 4 },
  { name: "S'mores", price: 4 },
  { name: "Oreo", price: 4 },
  { name: "Milky Bar", price: 4 },
  { name: "The Dub", price: 4 },
  { name: "Chocolate Praline", price: 4, color: "bg-orange-500" },
  { name: "Ferrero Rocher", price: 4, color: "bg-orange-500" },
  { name: "Dubai Chocolate", price: 4.5, color: "bg-orange-500" },
  { name: "White Kinder", price: 4, color: "bg-orange-500" },
  { name: "Kinder Deluxe", price: 4, color: "bg-orange-500" },
  { name: "Vegan Peanut Butter", price: 4, color: "bg-green-300" },
  { name: "Vegan Coffee & Walnut", price: 4, color: "bg-green-300" },
  { name: "Vegan Ferrero", price: 4, color: "bg-green-300" },
  { name: "Vegan Glaze & Pistachio", price: 4, color: "bg-green-300" },
  { name: "Vegan Biscoff", price: 4, color: "bg-green-300" },
  { name: "Vegan Oreo", price: 4, color: "bg-green-300" },
  { name: "Vegan Tradicional Jam", price: 4, color: "bg-green-300" },
  { name: "Vegan Blueberry", price: 4, color: "bg-green-300" },
  { name: "Vegan Lemon", price: 4, color: "bg-green-300" },
];

export {
  regular_donuts,
  cheap_donut,
  hot_drinks,
  cold_drinks,
  extras,
  alternatives_milks,
};
