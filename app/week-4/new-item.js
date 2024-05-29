"use client";
import React from "react";
import { useState } from "react";

const NewItem = () => {
    // Use states for name, quantity, and category
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");    

    const submitItem = (event) => {
        event.preventDefault();

        const Item = {
            name: name,
            quantity: quantity,
            category: category
        };

        console.log("Item submitted: ", Item);
        alert("Item submitted of details:\nName: " + name + "\nQuantity: " + quantity + "\nCategory: " + category);
        
        //Resets the state variables to their initial values
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }
    
    return (
        //Form
        <form className="bg-white p-4 " onSubmit={submitItem}>
            
            <label>
                <span className="text-gray-700">Item Name:</span>
                <input
                    type="text"
                    placeholder="Enter item name"                  
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);}
                    }
                    className="ml-2"
                    required/>
            </label>
            <label className="block mt-6">
                <span className="text-gray-700">Quantity:</span>
                <input
                    type="number"
                    min={1}
                    max={99}                 
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    className="ml-2"
                    required/>
            </label>
            <label className="block mt-6">
                <span className="text-gray-700">Category:</span>
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="ml-2">
                    
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>    
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <button 
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"                 
                type="submit">
                Add Item
            </button>
        </form>
    );
}

export default NewItem;
