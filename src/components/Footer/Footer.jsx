import React from "react";
import './footer.css'
import { BsTelegram } from "react-icons/bs" 
import { BsInstagram } from "react-icons/bs" 
import { BsLinkedin } from "react-icons/bs" 

const Footer = () =>{
    return(
        <footer>
            <a href="# " className="footer__logo">SHOKHAA</a>

            <ul className="permalinks">
                <li><a href="# ">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Sevices</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://t.me/shoxruh_2oo"><BsTelegram /></a>
                <a href="https://www.instagram.com/shoxruh_2oo/"><BsInstagram /></a>
                <a href="https://www.linkedin.com/in/shoxruh-otabekov-370886222/"><BsLinkedin /> </a>
            </div>
        </footer>
    )
}

export default Footer