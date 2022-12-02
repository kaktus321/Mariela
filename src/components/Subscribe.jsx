import React from 'react'
import './styles/Subscribe.scss'


const Subscribe = () => {
  return (
    <div className='SubscribeWrapper'>
        <span>NEWSLETTER</span><br/>
        <span>Get promotions & updates!</span>
        <form action="#">
            <input placeholder='your name' type="text" name="name" id="name" />
            <input placeholder='your email' type="text" name="email" id="email" />
            <button>subscribe</button>
        </form>
    </div>
  )
}

export default Subscribe