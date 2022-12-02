import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import BannerThree from './components/BannerThree';
import BannerTwo from './components/BannerTwo';
import Learn from './components/Learn';
import NavBar from './components/NavBar' 
import Amazon from './components/Amazon' 
import Cart from './components/cart'; 
import Contacts from './components/Contacts';
import Subscribe from './components/Subscribe';
import Info from './components/Info';
import Footer from './components/Footer';


function App() {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
  
    const handleClick = (item) => {
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
    };
  
    const handleChange = (item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;
  
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);
    };


  return (
    <div className="App">
        <NavBar setShow={setShow} size={cart.length} />
        <Banner />
        <Learn />
        <BannerTwo />
        <About />
        <BannerThree />
        {show ? (
        <Amazon handleClick={handleClick} />
           ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
        <Contacts />
        <Subscribe />
        <Info />
        <Footer />
    </div>
  );
}

export default App;
