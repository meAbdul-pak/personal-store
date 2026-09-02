
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist( // "Meri state ko browser ke localStorage mein persist/save karte rehna."
  (set, get) => ({


  cart: [],

  addToCart: (product) => {
    set((state) => {

      const existingProduct = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return {
          cart: state.cart.map(
            (item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                  }
                : item
          )
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...product,
            quantity: 1
          }
        ]
      };

    });
  },

  increaseQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
      )
    }));
  },

  decreaseQuantity: (id) => {
    set((state) => ({
      cart: state.cart
        .map(
          (item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity - 1
                }
              : item
        )
        .filter((item) => item.quantity > 0)
    }));
  },

  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.id !== id
      )
    }));
  },

  cartCount: () => {
    return get().cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

}),

{
  name : "cart-storage"
}

)
);


export default useCartStore;

