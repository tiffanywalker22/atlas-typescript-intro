import React from 'react';

const SongTitle = ({ title, artist }) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">{title || "Tidal Drift"}</h1>
            <p className="text-gray-600 text-lg">{artist || "Echos of the Sea"}</p>
        </div>
    );
};

export default SongTitle;
