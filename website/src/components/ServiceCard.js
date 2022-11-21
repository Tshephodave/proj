import "./ServiceCardStyle.css"

import React from 'react'
import { Link } from "react-router-dom"


const ServiceCard = (props) => {
  return (
    <div className="service-card">
    <img src={props.imgsrc} alt="Consult"/>
      <h2 className="Service-title">{props.title}</h2>
      <div className="Service-details">
        <p>
         {props.text}
        </p>
        
        <Link to="/contact" className="btn">Enquire Now</Link>
      </div>
      
      
      </div>
  )
}

export default ServiceCard