import React from 'react';
import placeholderImg from "../assets/placeholder.svg";

const CoverArt = () => {
    return (
        <div className="flex justify-center items-center h-full pt-20">
            <img src={placeholderImg} alt="cover art" className="w-64 h-64 object-cover" />
        </div>
    );
};

export default CoverArt;
