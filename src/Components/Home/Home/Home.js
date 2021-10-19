import React from 'react';
import Choose from '../../Choose/Choose';
import Review from '../../Review/Review';
import Banner from '../Banner.js/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        //home
        <div>
            <Banner></Banner>
            <Services></Services>
            <Choose></Choose>
            <Review></Review>
        </div>
    );
};

export default Home;