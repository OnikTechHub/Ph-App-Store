import React from 'react';
import { GridLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className="flex justify-center items-center bg-purple-200 h-screen font-bold text-5xl">
            <GridLoader  color="#4A0E4E" />
        </div>
    );
};

export default loading;