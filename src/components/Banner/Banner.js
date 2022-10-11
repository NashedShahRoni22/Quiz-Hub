import React from 'react';
import headerBanner from '../../images/headerBanner.jpg'
import headerBanner2 from '../../images/headerBanner2.jpg'

const Banner = () => {
    return (
        <div className='d-flex align-items-center justify-content-around banner m-5 p-3'>
            <img src={headerBanner} alt="" className='rounded'/>
            <img src={headerBanner2} alt="" className='rounded d-none d-lg-block'/>
        </div>
    );
};

export default Banner;