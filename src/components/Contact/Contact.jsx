import React from "react";
import './Contact.css'
import { MdOutlineEmail } from  "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { useRef } from "react"
import emailjs from 'emailjs-com'


const Contact = () =>{
     
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pbh5pc9', 'template_3i9d4lu', form.current, 'dKHCHhR9Fp8XJ-iwa')

        e.target.reset()
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(  
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>otabekovshoxruh13@gmail.com</h5>
                        <a href="mailto:otabekovshoxruh13@gmail.com">Sand a message</a>
                    </article>
                    <article className="contact__option">
                        <BsInstagram className="contact__option-icon" />
                        <h4>Instagram</h4>
                        <h5>App</h5>
                        <a href="https://www.instagram.com/shoxruh_2oo/">get in touch</a>
                    </article>
                    <article className="contact__option">
                        <BsTelegram className="contact__option-icon"/>
                        <h4>Telegram</h4>
                        <h5>massager</h5>
                        <a href="https://t.me/shoxruh_2oo">Sand a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTION */}
                
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" type="message" rows="7"  placeholder="Your message" required />
                    <button type="submit" className="btn btn-primary">Sand massage</button>
                </form>
            </div>
        </section> 
    )
}

export default Contact 