'use client';

import React, {useState} from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items';

function Page() {
    const[items, setItems] = useState(itemsData);
    
    const handleAddItem = (item) => {
        setItems([...items, item]);
    };
    return (
        <main>
            <h1 className="p-4 font-bold text-6xl">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    );
}

export default Page;