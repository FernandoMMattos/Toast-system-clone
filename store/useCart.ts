import { create } from "zustand";
import { CartItem, Product, RawProduct } from "@/types";

type CartStore = {
  cart: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  addExtraToItem: (id: string, extra: RawProduct) => void;
  setMilkForItem: (id: string, milk: RawProduct) => void;
  removeExtraFromItem: (id: string, extraName: string) => void;
  removeMilkFromItem: (id: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartStore>((set) => ({
  cart: [],

  addItem: (product) =>
    set((state) => {
      const existing = state.cart.find(
        (i) =>
          i.name === product.name &&
          i.category === product.category &&
          i.size === product.size,
      );

      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.name === product.name &&
            i.category === product.category &&
            i.size === product.size
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  addExtraToItem: (id, extra) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              extras: [...(item.extras ?? []), extra],
            }
          : item,
      ),
    })),

  setMilkForItem: (id, milk) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, milk } : item,
      ),
    })),

  removeMilkFromItem: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, milk: undefined } : item,
      ),
    })),

  removeExtraFromItem: (id, extraName) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              extras: item.extras?.filter((e) => e.name !== extraName),
            }
          : item,
      ),
    })),

  clearCart: () => set({ cart: [] }),
}));
