import React from 'react';
import { FadeLoader,  } from 'react-spinners';

const loading = () => {
    return (
        <div className="flex justify-center items-center bg-green-200 h-screen font-bold text-5xl">
            <FadeLoader color="#4A0E4E" />
        </div>
    );
};

export default loading;


