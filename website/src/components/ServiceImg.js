import "./ServiceImgStyle.css"

import React, { Component } from 'react'

class ServiceImg extends Component{
    render(){
        return (
            <div className="serviceImg">
                <div className="heading">
                    <h1>
                    {this.props.heading}
                    </h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    }
  
}

export default ServiceImg