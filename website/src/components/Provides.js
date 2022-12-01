import "./ServiceCardStyle.css"
import ServiceCard from "./ServiceCard"
import ServiceCardData from "./ServiceCardData"
import React from 'react'
import Typical from 'react-typical'



const Provides = () => {
  return (
    <div className="work-container">
        <h1 className="service-header">
          {''}
              <Typical
                loop={Infinity}
                steps={[
                  "Great",
                  1000,
                  "Services",
                  1000,
                  " In The",
                  1000,
                  "Palm",
                  1000,
                  "Of",
                  1000,
                  "Your",
                  1000,
                  "Hand",
                  1000,
                ]}/></h1>
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