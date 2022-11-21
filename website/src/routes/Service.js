import React from 'react'
import NavBar from '../components/NavBar'
import Footer from'../components/Footer'
import ServiceImg from'../components/ServiceImg'
import Provides from '../components/Provides'

const Service = () => {
  return (
    <div>
     <NavBar/>
     <ServiceImg heading="Here is what we offer" text="With lot of expectise"/>
     <Provides/>
     <Footer/>
    </div>
  )
}

export default Service