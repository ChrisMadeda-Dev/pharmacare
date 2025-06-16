import React from 'react'
import Hero from './_components/Hero'
import ServicesOverview from './_components/ServicesOverview'
import FeaturedProducts from './_components/FeaturedProducts'
import WhyChooseUs from './_components/WhyChooseUs'
import LocationInfo from './_components/LocationInfo'
import CallToAction from '../components/CallToAction'

const Home
 = () => {
  return (
    <>
    <Hero />
    <ServicesOverview />
    <FeaturedProducts />
    <WhyChooseUs />
    <CallToAction/>
    </>
  )
}

export default Home
