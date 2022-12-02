import React from 'react'
import FB from './img/frameBanner.png'
import BG from './img/bgBanner.svg'
import './styles/Banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
        <img src={BG} className='BG'/>
        <img src={FB} className='FB'/>
        <div className="textBlock">
          <span>NEW</span>
            <h1>
                Spring Cushion<br />
                Collection 2019
            </h1>
          <a href='#' className='buyNow'>buy now</a>
        </div>
    </div>
  )
}

export default Banner