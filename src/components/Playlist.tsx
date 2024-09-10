import React from 'react';

const Playlist = () => {
    const songs = [
        { title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
        { title: 'Fading Shadows', artist: 'The EmberLights', duration: '3:01' },
        { title: 'Cosmic Drift', artist: 'Solar Flare', duration: '5:01' },
        { title: 'Urban Serenade', artist: 'Midnight Groove', duration: '4:54' },
        { title: 'Whispers in the Wind', artist: 'Rust & Rain', duration: '6:13' },
        { title: 'Electric Fever', artist: 'Neon Jungle', duration: '8:41' },
        { title: 'Edge of the Abyss', artist: 'Steel Horizon', duration: '2:27' },
        { title: 'Golden Haze', artist: 'Velvet Waves', duration: '3:15' },
        { title: 'Shatter the Silence', artist: 'Thunderclap Excho', duration: '8:22' },

    ];

    return (
        <div className='p-8 max-w-md mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>Playlist</h1>
            <ul>
                {songs.map((song, index) => (
                    <li key={index} className='flex justify-between py-2 border-b'>
                        <div className='text-left'>
                            <span className='block font-bold'>{song.title}</span>
                            <span className='text-gray-500'>{song.artist}</span>
                        </div>
                        <span className='text-right'>{song.duration}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;
