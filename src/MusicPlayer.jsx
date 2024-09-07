import React from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

const MusicPlayer = () => {
    return (
        <div className="flex flex-col md:flex-row p-8">
            <div className="bg-sage text-blue border-pink p-4 rounded-lg">
                <CurrentlyPlaying />
            </div>
            <div className="bg-purple text-blue border-l-4 border-pink p-4 rounded-lg">
                <Playlist />
            </div>
        </div>
    );
};

export default MusicPlayer;
