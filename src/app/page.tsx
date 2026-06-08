import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GoldJewellery from './components/GoldJewellery'
import ExclusiveJewellery from './components/ExclusiveJewellery'
import DiamondJewellery from './components/DiamondJewellery'
import PlatinumExperience from './components/PlatinumExperience'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <GoldJewellery/>
      <ExclusiveJewellery/>
      <DiamondJewellery/>
      <PlatinumExperience/>
      <Footer/>
    </div>
  )
}

export default page
