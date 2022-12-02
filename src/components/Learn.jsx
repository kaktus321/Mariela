import React from 'react'
import './styles/Learn.scss'
import About from './img/About.png'
import Contact from './img/Contact.png'
import Product from './img/Product.png'

const Learn = () => {
  return (
    <div>
        <h2>
            I'm a cushion designer
        </h2>
        <p>
            Based in San Francisco, California I design trendy and fashion Cushions,<br />
            since I have memory I always had a tendency to design and illustration.
        </p>
        <a className='learnMore' href="#">
            Learn more
        </a>
        <div className="bigNav">
            <a href='#' className='Bnav About'>
                <img src={About} alt="" />
                <div className="learnMoreNav">
                    <h3>About me</h3>
                    <span>Learn more</span>
                </div>
            </a>
            <a href='#' className='Bnav Product'>
                <img src={Product} alt="" />
                <div className="learnMoreNav">
                    <h3>My products</h3>
                    <span>Learn more</span>
                </div>
            </a>
            <a href='#' className='Bnav Contact'>
                <img src={Contact} alt="" />
                <div className="learnMoreNav">
                    <h3>Contact me</h3>
                    <span>Learn more</span>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Learn