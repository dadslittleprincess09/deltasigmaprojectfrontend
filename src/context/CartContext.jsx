import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const loadCartItem = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_GET}/${id}`);
      if (!res.ok) throw new Error("Failed to fetch item");
      const item = await res.json();
      setCartItems(prev => [...prev, item]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, loadCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
