import React from 'react'
import "./Slider.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/slider1.png"

const Slider = () => {
  return (
    <div className='slider-main'>
    <Carousel showThumbs={false}>
                <div>
                    <img src={img1} alt=''/>
                  
                </div>
                <div>
                <img src={img1} alt=''/>
                  
                </div>
                <div>
                <img src={img1} alt='' />
                  
                </div>
            </Carousel>
    </div>
  )
}

export default Slider