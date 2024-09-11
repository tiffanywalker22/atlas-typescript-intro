import React from 'react';
import placeholderImg from "../assets/placeholder.svg";


type CoverArtProps = {
    cover: string;
}

export const CoverArt: React.FC<CoverArtProps> = ({ cover }) => {
    return (
        <div className="flex justify-center items-center h-full pt-20">
            <img src={ cover|| placeholderImg} alt="cover art" className="w-64 h-64 object-cover" />
        </div>
    );
};
