import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import NavBar from './components/NavBar'  
import Cart from './components/cart'; 
import Footer from './components/Footer';
import HomePage from './pages/HomePage'


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
      <Routes>
          <Route path='/' element={<HomePage handleClick={handleClick}/>} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
