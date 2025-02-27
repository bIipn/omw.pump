import React, { useState } from 'react';

export default function Voting({ projectId }) {
    const [votes, setVotes] = useState(0);

    const handleVote = (type) => {
        if (type === 'up') setVotes(votes + 1);
        else if (type === 'down') setVotes(votes - 1);
    };

    return (
        <div className="space-x-2">
            <button onClick={() => handleVote('up')} className="p-2 bg-green-500 text-white rounded">
                👍 Upvote
            </button>
            <button onClick={() => handleVote('down')} className="p-2 bg-red-500 text-white rounded">
                👎 Downvote
            </button>
            <span>Votes: {votes}</span>
        </div>
    );
}