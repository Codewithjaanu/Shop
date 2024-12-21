import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BastSeller from '../components/BastSeller'
import OverPolicy from '../components/OverPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BastSeller/>
        <OverPolicy/>
        <NewsletterBox/>
    </div>
  )
}

export default Home