import React from 'react';
import TokenForm from '../components/TokenForm';

export default function LaunchToken() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Launch a Token</h2>
            <TokenForm />
        </div>
    );
}