import React from 'react';
import Common from './Common';
import Picture from './images/JetpackRockets.svg';

const About = () => {
    return (
        <>
            <Common name="Welcome to About Page" imgsrc={Picture} visit="/contact" btname="Contact Now" />
        </>
    );
};
export default About;
