import React from 'react';

type PlayListItemProps = {
    title: string;
    artist: string;
    duration: string;
    isPlaying: boolean;
    onClick: () => void;
}

export const PlayListItem: React.FC<PlayListItemProps> = ({ title, artist, duration, isPlaying, onClick }) => {
    return (
        <div className={`max-w-lg mx-auto p-4 rounded-lg my-2 cursor-pointer ${isPlaying ? 'bg-pink text-white' : 'bg-gray-100 text-black'}`}
            onClick={onClick}>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{artist}</p>
            </div>
            <div className="text-gray-400">
                <p>{duration}</p>
            </div>
        </div>
    );
};
