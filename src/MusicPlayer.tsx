import { useState, useEffect } from 'react';
import { CurrentlyPlaying } from './components/CurrentlyPlaying';
import { Playlist } from './components/Playlist';

type Song = {
    id: number;
    title: string;
    artist: string;
    duration: string;
    cover: string;
};

export default function MusicPlayer() {
    const [createPlaylist, setCreatePlaylist] = useState<Song[]>([]);
    const [currentTrack, setCurrentTrack] = useState<Song | null>(null);

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
                const data: Song[] = await response.json();
                setCreatePlaylist(data);

                if (data.length > 0) {
                    setCurrentTrack(data[0]);
                }
            } catch (error) {
                console.error('error loading the playlist', error);
            }
        };
        fetchPlaylist();
    }, []);

    const handleSong = (id: number) => {
        const selectedTrack = createPlaylist.find(song => song.id === id) || null;
        setCurrentTrack(selectedTrack);
    };

    return (
        <div className="flex flex-col max-w-screen-md w-full mx-auto p-8 rounded-lg shadow-lg md:flex-row items-stretch md:items-start">
            <div className="bg-sage text-blue border-pink p-4 rounded-lg flex-1">
                <CurrentlyPlaying songs={createPlaylist} />
            </div>
            <div className="bg-purple text-blue border-l-4 border-pink p-4 rounded-lg flex-1">
                <Playlist currentSongId={currentTrack?.id ?? null} onSongSelect={handleSong} playlist={createPlaylist} />
            </div>
        </div>
    );
}
