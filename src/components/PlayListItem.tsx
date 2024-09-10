import React from 'react';

interface PlayListItemProps {
    title: string;
    artist: string;
    duration: string;
}

const PlayListItem: React.FC<PlayListItemProps> = ({ title, artist, duration}) => {
    return (
        <div className="max-w-lg mx-auto p-4 rounded-lg my-2">
            <div>
                <h3 className="text-lg font-semibold">{title || "Electric Fever"}</h3>
                <p className="text-sm text-gray-500">{artist || "Neon Jungle"}</p>
            </div>
            <div className="text-gray-400">
                <p>{duration || "8:41"}</p>
            </div>
        </div>
    );
};

export default PlayListItem;
