import "./FooterStyle.css"

import React from 'react'
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone,FaTwitter} from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
             <FaHome size={20} style={{color:"#fff",marginRight:"2rem"
            }}/>
            <div>
                <p>
                    Johannesburg
                </p>
                <p>
                    South Africa
                </p>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"
            }}/>+27 61 469 7684
</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"
            }}/>faithnyayi@gmail.com
</h4>
            </div>
        </div>
        <div className="right">
            <h4>About the Company</h4>
            <p>Well-reputed OD Specialist and Change Agent offering over two decades of global experince
                across industries,strategising transformation frameworks,development plans and learning
                tools for large projects while providing strategic guidance around skills and knowlegde management
            </p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"
            }}/>
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"
            }}/>
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"
            }}/>

            </div>
            
        </div>
            

             

        
        </div>
    </div>
  )
}

export default footer