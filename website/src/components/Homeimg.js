import "./HomeimgStyle.css"

import React from 'react'
import Consult from '../assets/home1.jpg'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import Typical from 'react-typical'

const Homeimg = () => {
  return (
         <div className="home">
          <div className="mask">
            <img className="consultimg" src={Consult} alt="consult" />
          </div>
          <div className="content">
          <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                
            <h1> consultant</h1>
            </motion.div>
            <p>
              {''}
              <Typical
                loop={Infinity}
                steps={[
                  "welcome",
                  1000,
                  "to faith-nyayi",
                  1000,
                  " business",
                  1000,
                  "consulting",
                  1000,
                ]}/>
                </p>
            
            <div>
             <Link to="/service" 
             className="btn btn-light">Services </Link>
             
             <Link to="/contact" className="btn btn-light">Contact Us</Link>
            </div>
            </div>
          
         </div>
  );
};
export default Homeimg