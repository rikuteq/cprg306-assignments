import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
    return (
        <li className="bg-white p-4" onClick={onSelect}>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-800">Quantity: {quantity}</p>
            <p className="text-gray-800">Category: {category}</p>
        </li>
    );
};

export default Item;