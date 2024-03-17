import React from 'react'
import "./Product.scss"
import data from './Json'

const Product = () => {
  return (
    <div className='product-main'>


    {

        data.map((item) => {
            return(
                <div className='product-container'>
    
                <div className='product-img'> 
                <img  src={item.img} alt=''/>
                </div>
            
                <div className='product-details'>
                <span>{item.title}</span>
                <span>&#8377; {item.price}</span>
            
                </div>
                
                </div>
            )
        })
    
   

    }

    
    
    </div>
  )
}

export default Product