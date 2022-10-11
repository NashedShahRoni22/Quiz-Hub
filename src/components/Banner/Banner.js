import React from 'react';
import codeLogo from '../../images/code.png'

const Banner = () => {
    return (
        <div className='d-flex align-items-center justify-content-around banner m-5 p-3'>
            <img src={codeLogo} alt="" height="80"/>
            <h3>Test Your Coding Knowledge Today</h3>
            <img src={codeLogo} alt="" height="80"/>
        </div>
    );
};

export default Banner;