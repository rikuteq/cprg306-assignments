'use client';

import React, {useState, useEffect} from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import getItems from '../_services/shopping-list-service';
import addItem from '../_services/shopping-list-service';
import MealIdeas from './meal-ideas';

function Page() {
    const[items, setItems] = useState(itemsData);
    const[selecteDItemName, setSelectedItemName] = useState('');
    
    const handleAddItem = async (item) => {  
        const newItem = await addItem(user.uid, item);
        newItem.id = newItem.id;
        setItems([...items, newItem]);
        
        
    };

    const handleItemSelect = (item) => {
        const itemNameRegex = /^[^\W_]+(?: [^\W_]+)*/;
    
        const itemNameMatch = item.name.match(itemNameRegex);
        const name = itemNameMatch ? itemNameMatch[0].trim() : item.name.trim();
        
        setSelectedItemName(name);
        console.log("Item selected: ", name)
    }

    const loadItems = async () => {
        const items = await getItems(user.uid);
        setItems(items);

    }

    useEffect(() => {
        if(user) {
            loadItems();
        }});
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