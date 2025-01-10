import React from 'react';
import Banner from './Banner';
import VolunteerNeedsNow from './VolunteerNeedsNow';
import VolunteerBanner from './VolunteerBanner';
import VolunteerGroup from './VolunteerGroup';
import FAQ from './FAQ';

const Home = () => {
    return (
        <>
            <div className='mt-16'>
                <Banner></Banner>
                <div className='w-11/12 mx-auto'>
                    <VolunteerNeedsNow></VolunteerNeedsNow>
                    <VolunteerBanner></VolunteerBanner>
                    <VolunteerGroup></VolunteerGroup>
                    <FAQ></FAQ>
                </div>
            </div>
        </>
    );
};

export default Home;