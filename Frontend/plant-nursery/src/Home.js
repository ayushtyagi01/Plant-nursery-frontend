import React from 'react'
import CarouselComp from './CarouselComp'
import CardsHome from './CardsHome'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <CarouselComp/>
      <CardsHome/>
    </div>
  )
}

export default Home