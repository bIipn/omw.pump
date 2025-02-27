import React from 'react';
import TokenCard from '../components/TokenCard';
import ProgressBar from '../components/ProgressBar';
import FlagButton from '../components/FlagButton';
import Voting from '../components/Voting';

export default function TokenPage() {
    const token = { name: 'Example Token', symbol: 'EXM', supply: 1000000 };

    return (
        <div className="p-4">
            <TokenCard />
            <ProgressBar progress={50} />
            <FlagButton projectId="123" />
            <Voting projectId="123" />
        </div>
    );
}