import "./HomeimgStyle.css"

import React from 'react'
import Consult from '../assets/Homeimg.jpg'
import { Link } from "react-router-dom"

const Homeimg = () => {
  return (
         <div className="home">
          <div className="mask">
            <img className="consultimg" src={Consult} alt="consult" />
          </div>
          <div className="content">
            <h1>consultant</h1>
            <p>welcome to f-y business-consulting</p>
            
            <div>
             <Link to="/service" 
             className="btn">Services</Link>
             
             <Link to="/contact" className="btn btn-light">Contact Us</Link>
            </div>
            </div>
          
         </div>
  );
};
export default Homeimg