'use client';

import React, {useState, useEffect} from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import { getItems, addItem } from '../_services/shopping-list-service';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';



function Page() {
    const[items, setItems] = useState([]);
    const[selecteDItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth();
    
    const handleAddItem = async (item) => {  
        if (user) {
            console.log("User: ", user.uid);

            const newItemId = await addItem(user.uid, item);
            const newItem = {
                id: newItemId,
                name: item.name,
                quantity: item.quantity,
                category: item.category
            };
            setItems([...items, newItem]);
        } else {
            console.error("User not logged in");
        }   
    };

    const handleItemSelect = (item) => {
        const itemNameRegex = /^[^\W_]+(?: [^\W_]+)*/;
    
        const itemNameMatch = item.name.match(itemNameRegex);
        const name = itemNameMatch ? itemNameMatch[0].trim() : item.name.trim();
        
        setSelectedItemName(name);
        console.log("Item selected: ", name)
    }

    const loadItems = async () => {
        if (user) {
            const items = await getItems(user.uid);
            setItems(items);
            

    }
}

    useEffect(() => {
        loadItems();
    }, [user]);
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