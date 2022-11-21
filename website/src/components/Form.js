import "./FormStyle.css"
import React from 'react'
import emailjs from'emailjs-com'

const Form = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_7dxfvfo','template_slw3ys2',e.target,"SIIIFefvfz23Byt7X")
    
  }
  return (
    <div className="form">
        <form onSubmit={sendEmail}>
            <label>
              Your name
            </label>
            <input type="text" name="name">
            </input>
            <label>
              Email
            </label>
            <input type="email" name="user_email">
            </input>
            <label>
              Subject
            </label>
            <input type="text">
            </input>
            <label>
              Message
            </label>
            <textarea rows="6" name="message" placeholder="Type Your Message Here"/>
            <button className="btn">Submit</button>
            
        </form>
    </div>
  )
}

export default Form