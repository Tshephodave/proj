import "./ServiceImgStyle.css"

import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"

class ServiceImg extends Component{
    render(){
        return (
            <div className="serviceImg">
                <div className="heading">
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
                
                <h1>
                    {this.props.heading}
                    </h1>
            </motion.div>
            
                    
                    <p>
                        {this.props.text}</p>
                        

                </div>
            </div>
          )
    }
  
}

export default ServiceImg