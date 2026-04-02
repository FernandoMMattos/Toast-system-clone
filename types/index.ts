export type Category = "donut" | "coffee";

export type Size = "small" | "large";

export type BaseProduct = {
  name: string;
  price?: number;
  color?: string;
  size?: Size;
};

export type Product = BaseProduct & {
  id: string;
  price: number; 
  category: Category;
};

export type CartItem = Product & {
  quantity: number;
  milk?: RawProduct;
  extras?: RawProduct[]
};

export type RawProduct = BaseProduct;
