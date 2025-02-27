import React from 'react';

export default function FlagButton({ projectId }) {
    const handleFlag = () => {
        console.log('Flagged Project:', projectId);
    };

    return (
        <button onClick={handleFlag} className="p-2 bg-red-500 text-white rounded">
            Flag Project
        </button>
    );
}