import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data ={
    name:"Maria Momina",
    image:'./image/about1.jpg'
  }
  return (
    <div>
      <HeroSection   {...data}/>
    </div>
  )
}

export default About
