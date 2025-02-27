import React, { useState } from 'react';

export default function TokenForm() {
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [supply, setSupply] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fee = supply * 0.02;
        alert(`A 2% fee of ${fee} tokens will be deducted.`);
        // Call backend API to create token
        console.log('Token Created:', { name, symbol, supply });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Token Name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 border rounded" />
            <input type="text" placeholder="Token Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} className="p-2 border rounded" />
            <input type="number" placeholder="Total Supply" value={supply} onChange={(e) => setSupply(e.target.value)} className="p-2 border rounded" />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Launch Token</button>
        </form>
    );
}