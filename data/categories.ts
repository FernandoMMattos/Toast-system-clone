import {
  hot_drinks,
  cold_drinks,
  regular_donuts,
  cheap_donut,
  alternatives_milks,
  extras,
} from "./products";
import { Category } from "@/types";

export const categories = {
  hot: {
    label: "Hot Drinks",
    color: "bg-red-500",
    products: hot_drinks,
    type: "coffee" as Category,
  },
  cold: {
    label: "Cold Drinks",
    color: "bg-blue-300",
    products: cold_drinks,
    type: "coffee" as Category,
  },
  donuts: {
    label: "Donuts",
    color: "bg-yellow-300",
    products: regular_donuts,
    type: "donut" as Category,
  },
  cheap: {
    label: "Cheap Donuts",
    color: "bg-rose-300",
    products: cheap_donut,
    type: "donut" as Category,
  },
};

export const extraCategories = {
  milk: {
    label: "Milk Type",
    products: alternatives_milks,
  },
  extras: {
    label: "Extras",
    products: extras,
  },
};

export type SelectCategory = keyof typeof categories;
export type ExtraCategories = keyof typeof extraCategories;
