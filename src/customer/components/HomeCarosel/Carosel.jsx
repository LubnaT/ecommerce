import React from 'react'
import { carouselData } from './CaroselData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
export const Carosel = () => {
   
    const items = carouselData.map(item=>
    <img src={item.image} alt="" className='cursor-pointer' role='presentation'/>
    )
  return (
    <AliceCarousel
    autoPlay
    autoPlayControls
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="fadeout"
    //run infinitly
    infinite
    touchTracking={false}
    disableDotsControls
    //arrow buttons are disabled
    disableButtonsControls
    items={items}
/>
  )
}
