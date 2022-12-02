import React from 'react'
import './styles/Info.scss'
import Shop from './img/shop.svg'
import Ship from './img/ship.svg'
import like from './img/like.svg'

const Info = () => {
  return (
    <div className='InfoWrapper'>
        <div className="Info">
            <div className="InfoBox">
                <img src={Shop} alt="" />
                <span>Safe shopping</span>
                <span>Buy with confidence</span>
            </div>
            <div className="InfoBox">
                <img src={Ship} alt="" />
                <span>Fast shipping</span>
                <span>Get your product fast</span>
            </div>
            <div className="InfoBox">
                <img src={like} alt="" />
                <span>Satisfaction guarantee</span>
                <span>Or get your money back</span>
            </div>
        </div>
    </div>
  )
}

export default Info