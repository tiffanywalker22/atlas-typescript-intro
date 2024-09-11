import { useState} from 'react';
import { CoverArt } from './CoverArt';
import { PlayControls } from './PlayControls';
import { SongTitle } from './SongTitle';
import { VolumeControl } from './VolumeControl';

type Song = {
    id: number;
    title: string;
    artist: string;
    cover: string;
    duration: string;
};

type CurrentlyPlayingProps = {
    songs: Song[] | null;
};

export const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ songs }) => {
    if (!songs) return null;
    
    const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
    const [isShuffle, setIsShuffle] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(50);
    const currentSong = songs[currentSongIndex];
    const isFirstSong = currentSongIndex === 0;
    const isLastSong = currentSongIndex === songs.length - 1;

    const handlePrevious = () => {
        if (!isFirstSong) {
            setCurrentSongIndex(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * songs.length);
            setCurrentSongIndex(randomIndex);
        } else if (!isLastSong) {
            setCurrentSongIndex(prev => prev + 1);
        }
    };

    const toggleShuffle = () => {
        setIsShuffle(prevState => !prevState);
    };


    return (
        <div className="flex flex-col items-center p-6 rounded-lg">
            <CoverArt cover={currentSong.cover}  />
            <SongTitle title={currentSong.title} artist={currentSong.artist} />
            <PlayControls onPrevious={handlePrevious} onNext={handleNext} isFirstSong={isFirstSong} isLastSong={isLastSong} isShuffle={isShuffle} toggleShuffle={toggleShuffle} />
            <VolumeControl volume={volume} setVolume={setVolume} />
        </div>
    );
};

