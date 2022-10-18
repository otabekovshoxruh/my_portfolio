import React from "react";
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"

const HaederSecials = () => {
    return(
        <div className="header__socials">

            <a href="https://linkedin.com" ><BsLinkedin /></a>
            <a href="https://github.com/otabekovshoxruh" ><BsGithub /></a>
            <a href="https://t.me/shoxruh_2oo" ><BsTelegram /></a>
            
        </div>

    )
}

export default HaederSecials