import React from 'react'
import Banner1 from '../components/Banner1'
import Banner2 from '../components/Banner2'
import Browsecollection from '../components/Browsecollection'
import FeaturedPlants from '../components/FeaturedPlants'
import Hero from '../components/Hero'
import Support from '../components/Support'
import Testnomial from '../components/Testnomial'

const Home = () => {
  return (
<>
{/* <Navbar /> */}
<Hero />
<Support />
<Browsecollection />
<FeaturedPlants />
<Banner1 />
<Testnomial />
<Banner2 />
</>

  )
}

export default Home