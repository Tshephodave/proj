import React from 'react'
import NavBar from '../components/NavBar'
import Footer from'../components/Footer'
import ServiceImg from'../components/ServiceImg'
import Form from'../components/Form'



const Contact = () => {
  return (
    <div>
       <NavBar/>
       <ServiceImg heading="Contact" text="Feel free to contact us"/>
       <Form/>
     <Footer/>
    </div>
  )
}

export default Contact