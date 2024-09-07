import React from 'react';
import placeholderImg from "../assets/placeholder.svg";

interface CoverArtProps {
    artwork?: string;
}

const CoverArt: React.FC<CoverArtProps> = ({ artwork }) => {
    return (
        <div className="flex justify-center items-center h-full pt-20">
            <img src={ artwork || placeholderImg} alt="cover art" className="w-64 h-64 object-cover" />
        </div>
    );
};

export default CoverArt;
