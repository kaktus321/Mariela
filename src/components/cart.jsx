import React, { useState, useEffect } from "react";
import "./styles/Cart.scss";

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);
  
    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    });
  
    return (
      <div className="wrapperCart">
        <article>
          {cart.map((item) => (
            <div className="cartBox" key={item.id}>
              <div className="cartImg">
                <img src={item.img} alt="" />
                <p>{item.title}</p>
              </div>
              <div className="handleChangeBox">
                <button onClick={() => handleChange(item, -1)}>-</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, 1)}>+</button>
              </div>
              <div>
                <span>$ {item.price} USD</span>
                <button onClick={() => handleRemove(item.id)}>Удалить</button>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Итоговая цена</span>
            <span>Цена - $ {price} USD</span>
          </div>
        </article>            
      </div>
    );
  };
  
  export default Cart;