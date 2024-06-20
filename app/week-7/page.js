'use client';

import React, {useState} from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items';
import MealIdeas from './meal-ideas';

function Page() {
    const[items, setItems] = useState(itemsData);
    const[selecteDItemName, setSelectedItemName] = useState('');
    
    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (item) => {
        const itemNameRegex = /^[^\W_]+(?: [^\W_]+)*/;
    
        const itemNameMatch = item.name.match(itemNameRegex);
        const name = itemNameMatch ? itemNameMatch[0].trim() : item.name.trim();
        
        setSelectedItemName(name);
        console.log("Item selected: ", name)
    }
    return (
        <main>
            <h1 className="p-4 font-bold text-6xl">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selecteDItemName}/>
        </main>
    );
}

export default Page;