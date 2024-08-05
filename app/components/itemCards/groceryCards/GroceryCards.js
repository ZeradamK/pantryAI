import React from 'react'; // Adjust the path if necessary
import { useCart } from '@/app/context/CartContext';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './groceries.css';


const GroceryCards = ({ item }) => {
    const { handleAdd, handleRemove, cart } = useCart();
    const itemInCart = cart.find(i => i.id === item.id);
    const count = itemInCart ? itemInCart.quantity : 0;

    return (
        <div className={"groceries-main"} style={{ marginBottom: '20px' }}> {/* Add margin to the bottom of the item */}
            <h2>{item.name}</h2>
            <p>{item.price} USD / {item.unit}</p>
            <div style={{ display: 'flex', flex:'row', alignItems: 'center', gap: '10px' }}> {/* Flexbox for spacing */}
                <button onClick={() => handleAdd(item)} style={{ border: 'none', background: 'transparent' }}>
                    <FaPlus className={"add-button"}/>
                </button>
                <span>{count}</span>
                <button onClick={() => handleRemove(item.id)} style={{ border: 'none', background: 'transparent' }}>
                    <FaMinus className={"remove-button"}/>
                </button>
            </div>
            <hr style={{ marginTop: '10px', borderColor: '#9f9f9f' }} />
        </div>
    );
};

export default GroceryCards;
