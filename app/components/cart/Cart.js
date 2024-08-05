// app/components/cart/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '@/app/context/CartContext';
import { FaMinus} from "react-icons/fa";
import "./Cart.css"


const Cart = () => {
    const { cart, handleRemove, getTotalPrice } = useContext(CartContext);
    const totalPrice = getTotalPrice();

    return (
        <div className="cart">
            <h2 className={"your-cart"}>Your Cart</h2>
            {cart.length === 0 ? (
                <p className={"cart-text"}>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.quantity}
                            <button style={{marginLeft: '40px', position: 'absolute'}} onClick={() => handleRemove(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="total-price flex flex-row items-center justify-end mr-5">
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;
