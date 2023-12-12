import React from 'react'
import { Carosel } from '../components/HomeCarosel/Carosel'
import HomeCaroselSection from '../components/HomeCaroselSection/HomeCaroselSection'

const HomePage = () => {
  return (
    <div>
       <Carosel/>
        <div className='space-y-10 py-10 px-3 lg:px-8 flex flex-col justify-center'>
          <HomeCaroselSection/>
          <HomeCaroselSection/>
          <HomeCaroselSection/>
          <HomeCaroselSection/>
          <HomeCaroselSection/>
          
        </div>
    </div>
  )
}

export default HomePage