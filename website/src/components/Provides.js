import "./ServiceCardStyle.css"
import ServiceCard from "./ServiceCard"
import ServiceCardData from "./ServiceCardData"
import React from 'react'



const Provides = () => {
  return (
    <div className="work-container">
        <h1 className="service-header">Services</h1>
        <div className="service-container">
            {ServiceCardData.map((val,ind) =>{
                return(
                    <ServiceCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    />
                )
            })}
       
        </div>
    </div>
  )
}

export default Provides