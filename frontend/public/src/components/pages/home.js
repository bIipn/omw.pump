import React from 'react';
import WalletButton from '../components/WalletButton';
import TokenCard from '../components/TokenCard';

export default function Home() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">omw.pump</h1>
            <WalletButton />
            <TokenCard />
        </div>
    );
}