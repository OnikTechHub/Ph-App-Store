import React from 'react';
import Banner from '../Banner/Banner';
import Ratings from '../Ratings/Ratings';
import TrandingApps from '../TrandingApps/TrandingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Ratings></Ratings>
           <TrandingApps></TrandingApps>
        </div>
    );
};

export default Home;