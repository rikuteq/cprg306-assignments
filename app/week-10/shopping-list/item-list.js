'use client';
import React, { useState } from 'react';
import Item from './item';


const ItemList = ({ item, items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState('name');
    const [nameColorChange, setNameColorChange] = useState(true);
    const [categoryColorChange, setCategoryColorChange] = useState(false);

    const handleSortName = () => {
        setSortBy('name');
        setNameColorChange(true);
        setCategoryColorChange(false);
    };
    
    const handleSortCategory = () => {
        setSortBy('category');
        setNameColorChange(false);
        setCategoryColorChange(true);
    };

    
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') 
        {
            return a.name.localeCompare(b.name);
        } 
        else 
        {
            return a.category.localeCompare(b.category);
        }
    });

    return (
        <main>
            <button 
                className={`mt-4 ml-2 mr-2 ${nameColorChange ? 'bg-blue-700' : 'bg-blue-500'} text-white font-bold py-2 px-4 rounded`}
                onClick={handleSortName}
            >
                Sort by Name
            </button>
            <button 
                className={`mt-4 ${categoryColorChange ? 'bg-blue-700' : 'bg-blue-500'} text-white font-bold py-2 px-4 rounded`}
                onClick={handleSortCategory}
            >
                Sort by Category
            </button>
            <ul>
                {sortedItems.map((item, index) => (
                    <Item key={index} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)}/>
                ))}
            </ul>
        </main>
    );
};

export default ItemList;
