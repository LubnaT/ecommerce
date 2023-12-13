import React from 'react'
import { Carosel } from '../components/HomeCarosel/Carosel'
import HomeCaroselSection from '../components/HomeCaroselSection/HomeCaroselSection'
import { mens_kurta } from '../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
       <Carosel/>
        <div className='space-y-10 py-10 px-3 lg:px-8 flex flex-col justify-center'>
          <HomeCaroselSection data={mens_kurta} sectionName= {"Men's Kurta"}/>
          <HomeCaroselSection data={mens_kurta} sectionName= {"Men's Shirts"}/>
          <HomeCaroselSection data={mens_kurta} sectionName= {"Men's Shoes"}/>
          <HomeCaroselSection data={mens_kurta} sectionName= {"Women's Saree"}/>
          <HomeCaroselSection data={mens_kurta} sectionName= {"Women's Dress "}/>
         
        </div>
    </div>
  )
}

export default HomePage