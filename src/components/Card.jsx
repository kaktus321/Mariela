import React from 'react'

const Cards = ({ item, handleClick }) => {
    const {title, price, img} = item
  return (
    <div className="wrapperCard">
      <div className="cards">
        <div className="imageBox">
            <img src={img} alt="" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>$ {price} USD</p>
            <button onClick={() => handleClick(item)} >Добавить в Корзину</button>
        </div>
    </div>
    </div>
  )
}

export default Cards;