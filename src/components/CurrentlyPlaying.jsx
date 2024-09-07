import React, { useState } from 'react';
import CoverArt from './CoverArt';
import PlayControls from './PlayControls';
import SongTitle from './SongTitle';
import VolumeControl from './VolumeControl';

const CurrentlyPlaying = () => {
    const [volume, setVolume] = useState(50);

    return (
        <div className="flex flex-col items-center p-6 rounded-lg">
            <CoverArt />
            <SongTitle title="Painted in Blue" artist="Soul Canvas" />
            <PlayControls />
            <VolumeControl volume={volume} setVolume={setVolume} />
        </div>
    );
};

export default CurrentlyPlaying;
