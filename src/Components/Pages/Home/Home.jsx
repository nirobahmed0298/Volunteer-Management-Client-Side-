import React from 'react';
import Banner from './Banner';
import VolunteerNeedsNow from './VolunteerNeedsNow';
import VolunteerBanner from './VolunteerBanner';
import VolunteerGroup from './VolunteerGroup';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VolunteerNeedsNow></VolunteerNeedsNow>
            <VolunteerBanner></VolunteerBanner>
            <VolunteerGroup></VolunteerGroup>
        </div>
    );
};

export default Home;