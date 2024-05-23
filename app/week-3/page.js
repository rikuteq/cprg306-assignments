import React from 'react';
import ItemList from './item-list';

function Page() {
    return (
        <main>
            <h1 className="p-4 font-bold text-6xl">Shopping List</h1>
            <ItemList/>
        </main>
    );
}

export default Page;