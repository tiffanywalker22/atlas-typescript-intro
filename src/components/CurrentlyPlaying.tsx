import { useState, useEffect } from 'react';
import { CoverArt } from './CoverArt';
import { PlayControls } from './PlayControls';
import { SongTitle } from './SongTitle';
import { VolumeControl } from './VolumeControl';

type Song {
    title: string;
    artist: string;
    cover: string;
}

type CurrentlyPlayingProps {
    currentSongName: string;
}

export const currentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ currentSongName }) => {
    const [currentTrack, setCurrentTrack] = useState<Song | null>(null);

    return (
        <div className="flex flex-col items-center p-6 rounded-lg">
            <CoverArt cover={currentSongName.cover}  />
            <SongTitle title="Painted in Blue" artist="Soul Canvas" />
            <PlayControls />
            <VolumeControl volume={volume} setVolume={setVolume} />
        </div>
    );
};

