import React from 'react';

const PlayListItem = () => {
    return (
        <div className="max-w-lg mx-auto p-4 rounded-lg my-2">
            <div>
                <h3 className="text-lg font-semibold">Electric Fever</h3>
                <p className="text-sm text-gray-500">Neon Jungle</p>
            </div>
            <div className="text-gray-400">
                <p>8:41</p>
            </div>
        </div>
    );
};

export default PlayListItem;
