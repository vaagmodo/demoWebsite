import React from 'react';
import Common from './Common';
import Picture from '../src/images/camera_icon_estilizado.svg';

const Home = () => {
    return (
        <>
            <Common
                name="This is official website of Vaagmodo Pvt. Ltd."
                imgsrc={Picture}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};

export default Home;
