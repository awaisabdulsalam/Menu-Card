import React from 'react'

const MenuItem = ({ items }) => {
  return (
    <div>
    {items.map((item) => {
        const {id, title, price, img, desc} = item;
        return (
            <article className='items' key={id}> 
            <div className='left_items'>
                <h3>{title}</h3>
                <p className='desciption'>{desc}</p>
            <h5>{price}</h5>
            </div>
            <div className='right_items'>
            <img src={img} alt="Image" srcset="" className='main_img' />
            </div>
            </article>
        )
    })}
    </div>
  )
}

export default MenuItem