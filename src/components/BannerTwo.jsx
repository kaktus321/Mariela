import React from 'react'
import './styles/BannerTwo.scss'
import BannerTwoPng from './img/banner2.png'

const BannerTwo = () => {
  return (
    <div>
        <div className="bannerWrapper">
            <img src={BannerTwoPng} alt="" />
        <   div className="textBlock">
            <span>About me</span>
                <h4>
                    I'm a trendy<br />
                    Cushion Designer
                </h4>
            <a href='#' className='buyNow'>learn more</a>
            </div>
        </div>
    </div>
  )
}

export default BannerTwo