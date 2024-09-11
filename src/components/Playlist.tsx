import React from 'react';
import { PlayListItem } from './PlayListItem';

type Song = {
    id: number;
    title: string;
    artist: string;
    duration: string;
    cover: string;
}

type PlayListProps = {
    playlist: Song[];
    currentSongId: number | null;
    onSongSelect: (id: number) => void;
}



export const Playlist: React.FC<PlayListProps> = ({ playlist, currentSongId, onSongSelect }) => {

    return (
        <div className='p-8 flex flex-col mx-auto rounded-lg h-full '>
            <h1 className='text-2xl font-bold mb-4'>Playlist</h1>
            <ul>
                {playlist.map((song) => (
                    <PlayListItem key={song.id} title={song.title} artist={song.artist} duration={song.duration} isPlaying={song.id === currentSongId} onClick={() => onSongSelect(song.id)} />
                ))}
            </ul>
        </div>
    );
};
