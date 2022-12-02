import React from 'react'
import list from './Data'
import Cards from './Card'
import './styles/Amazon.scss'

const Amazon = ({handleClick}) => {

  return (
    <section className='wrapperAmazon'>
        {list.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
    </section>
  )
}

export default Amazon