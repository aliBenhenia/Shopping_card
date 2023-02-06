import React, { useState, useContext ,createContext} from 'react';

export const CartContext = createContext();

export function CartProvider({ children }){
  const [cartItems, setCartItems] = useState([]);
  const addToCart = item => {
    setCartItems([...cartItems, item]);
  };
    const removeFromCart = item => {
    setCartItems(cartItems.filter(x => x !== item));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
