import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addProduct: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  removeProduct: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));