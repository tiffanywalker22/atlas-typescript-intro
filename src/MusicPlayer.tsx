import { useState, UseEffect, useEffect } from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

type Song {
    title: string;
    artist: string;
    duration: string;
    cover: string;
}

export default function MusicPlayer() {
    const [createPlaylist, setCreatePlaylist] = useState<Song[]>([]);
    const [currentlyPlaying, setCurrentlyPlaying] = useState<Song | null>(null);

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
                const data: Song[] = await response.json();
                setCreatePlaylist(data);

                if (data.length > 0) {
                    setCurrentlyPlaying(data[0].title);
                }
            } catch (error) {
                console.error('error loading the playlist', error);
            }
        };
        fetchPlaylist();
    }, []);

    const handleSong = (title: string) => {
        const selectedTrack = playlist.find(song => song.title === title) || null;
        setCurrentlyPlaying(selectedTrack);
    };

    return (
        <div className="flex flex-col md:flex-row p-8">
            <div className="bg-sage text-blue border-pink p-4 rounded-lg">
                <CurrentlyPlaying songTitle={currentlyPlaying} />
            </div>
            <div className="bg-purple text-blue border-l-4 border-pink p-4 rounded-lg">
                <Playlist currentlyPlaying={currentlyPlaying} onSongSelect={handleSong} playlist={createPlaylist} />
            </div>
        </div>
    );
};