import React, { useState } from 'react';
import groceriesData from '@/database.json';
import GroceryCard from '@/app/carditems/groceryCard/page';

const WholeFoodItems = () => {
    const filteredGroceries = groceriesData.groceries.filter(item => item.store === 'WholeFoods');
    const [items, setItems] = useState({});

    const addItem = (id) => {
        setItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    }

    const removeItem = (id) => {
        setItems(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
    }

    return (
        <div className="grocery-list mt-5">
            {filteredGroceries.map(item => (
                <GroceryCard
                    key={item.id}
                    item={item}
                    onAdd={addItem}
                    onRemove={removeItem}
                />
            ))}
        </div>
    );
};

export default WholeFoodItems;
