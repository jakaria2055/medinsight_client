import React from 'react'
import Hero from '../components/Hero'
import CompanyMarque from '../components/CompanyMarque'
import WarmSupportive from '../components/WarmSupportive'
import { Image } from 'lucide-react'

const HomePage = () => {
  return (
    <div>
      <Hero /> 
      <CompanyMarque />
      <WarmSupportive />
    </div>
  )
}

export default HomePage