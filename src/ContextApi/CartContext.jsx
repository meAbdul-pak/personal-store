import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  // ADD TO CART
  const addToCart = (product) => {

    setCart((prevCart) => {

      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {

        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1
        }
      ];

    });

  };


  // PLUS
  const increaseQuantity = (id) => {

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };


  // MINUS
  const decreaseQuantity = (id) => {

    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  // REMOVE
  const removeFromCart = (id) => {

    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );

  };


  // CART COUNT
  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity
  },0 )


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;