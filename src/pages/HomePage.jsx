import React, { useState } from 'react';
import Contacts from '../components/Contacts';
import Subscribe from '../components/Subscribe';
import Info from '../components/Info';
import Amazon from '../components/Amazon'
import About from '../components/About';
import Banner from '../components/Banner';
import BannerThree from '../components/BannerThree';
import BannerTwo from '../components/BannerTwo';
import Learn from '../components/Learn';

function HomePage({handleClick, setShow, size }) {
  return (
    <div>
        <Banner />
        <Learn />
        <BannerTwo />
        <About />
        <BannerThree />
        <Amazon handleClick={handleClick} setShow={setShow} size={size}/>
        <Contacts />
        <Subscribe />
        <Info />
    </div>
  )
}

export default HomePage;