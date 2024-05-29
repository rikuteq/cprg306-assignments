import React from 'react';
import NewItem from './new-item';

function Page() {
    return (
        <main className='min-h-screen'>
            <h1 className="p-4 font-bold text-6xl ">Add a New Item</h1>
            <NewItem/>
        </main>
    );
}

export default Page;