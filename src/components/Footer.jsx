import React from 'react'
import logo from "./img/LogoF.svg"
import './styles/Footer.scss'
import facebook from './img/facebook.svg'

const Footer = () => {
  return (
    <footer>
        <div className="FooterWrapper">
            <ul>
                <img src={logo} alt="Логотип" />
                <li>Home</li>
                <li>About me</li>
                <li>Products</li>
                <li>Contact me</li>
            </ul>
            <div className="Social">
                <a href="#">
                    <img src={facebook} alt="" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;