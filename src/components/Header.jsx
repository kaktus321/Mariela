import React from 'react'
import "./styles/Header.scss"
import logo from "./img/Logo.png"
import cart from "./img/Cart.svg"

const Header = () => {
  return (
    <header>
        <div className='columnsWrapper'>
            <div className="leftColumn"><img src={logo} alt="Логотип"/></div>
            <div className="rightColumn">
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Products</li>
                    <li>Contact me</li>
                </ul>
                <button className='cartButton'><img src={cart} alt="Корзина"/></button>
            </div>
        </div>
    </header>
  )
}

export default Header