import React from 'react';

export default function TokenCard() {
    const token = { name: 'Example Token', symbol: 'EXM', supply: 1000000 };

    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold">{token.name}</h2>
            <p>Symbol: {token.symbol}</p>
            <p>Supply: {token.supply}</p>
        </div>
    );
}