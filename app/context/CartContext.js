"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveCartToFirestore, getCartFromFirestore } from '@/app/firebase';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        // Load cart from Firestore when the component mounts
        const loadCart = async () => {
            const savedCart = await getCartFromFirestore();
            setCartItems(savedCart);
        };

        loadCart();
    }, []);


    const handleAdd = (item) => {
        setCartItems((prev) => {
            const existingItem = prev.find((i) => i.id === item.id);
            let newCart;
            if (existingItem) {
                newCart = prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                newCart = [...prev, { ...item, quantity: 1 }];
            }
            saveCartToFirestore(newCart);
            return newCart;
        });
    };

    const handleRemove = (id) => {
        setCartItems((prev) => {
            const newCart = prev.reduce((acc, item) => {
                if (item.id === id) {
                    if (item.quantity > 1) {
                        acc.push({...item, quantity: item.quantity - 1});
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, []);
            saveCartToFirestore(newCart);
            return newCart;
        });
    };

      const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

      return (
        <CartContext.Provider
          value={{ cart: cartItems, handleAdd, handleRemove, totalItems, getTotalPrice }}
        >
          {children}
        </CartContext.Provider>
      );

    };

export const useCart = () => useContext(CartContext);

export default CartContext;
