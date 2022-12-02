import React from 'react'
import './styles/BannerThree.scss'
import bannerThree from './img/banner3.png'

const BannerThree = () => {
  return (
    <div>
        <div className="bannerWrapper">
            <img src={bannerThree} alt="" />
        <div className="textBlockTH">
            <span>NEW</span>
                <h6>
                    Spring Cushion<br />
                    Collection 2019
                </h6>
            <a href='#' className='buyNow'>buy now</a>
            </div>
        </div>
    </div>
  )
}

export default BannerThree