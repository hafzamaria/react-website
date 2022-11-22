import React from 'react'
import HeroSection from './components/HeroSection'

const Home = () => {
  const data={
    name:'Hafza Maria',
    image:'./image/hero1.jpg'
  }
  return (
    <div>
      <HeroSection {...data}/>
    </div>
  )
}

export default Home

