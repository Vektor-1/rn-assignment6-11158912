import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const addToCart = (item) => {
        console.log('Adding item to cart:', item); // Debugging
        setCartItems((prevItems) => [...prevItems, item]);
        setTotalCost((prevCost) => prevCost + parseFloat(item.price.replace(/[^0-9.-]+/g, '')));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
        setTotalCost((prevCost) => {
            const removedItem = cartItems.find(item => item.id === itemId);
            return removedItem ? prevCost - parseFloat(removedItem.price.replace(/[^0-9.-]+/g, '')) : prevCost;
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, totalCost, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
