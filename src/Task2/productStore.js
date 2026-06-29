import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const productLogic = (set, get) => ({
  cart: [],
  wishlist: [],

  addToCart: (product) => {
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...product,
            qty: 1,
          },
        ],
      };
    });
  },

  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.flatMap((item) => {
        if (item.id !== id) return [item];

        if (item.qty > 1) {
          return [
            {
              ...item,
              qty: item.qty - 1,
            },
          ];
        }

        return [];
      }),
    }));
  },

  moveToWishlist: (product) => {
    console.log("wishlist clicked");
    set((state) => {
      const exists = state.wishlist.some((item) => item.id === product.id);

      return {
        wishlist: exists ? state.wishlist : [...state.wishlist, product],

        cart: state.cart.filter((item) => item.id !== product.id),
      };
    });
  },

  getTotalCost: () => {
    return get().cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  },
});

export const useProductStore = create(
 productLogic
);
