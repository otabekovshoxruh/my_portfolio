import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HaederSecials from "./HaederSecials";

const Header= () =>{
    return(
        <header>
            <div className="container header__container">
                 <h5>Hello I'm</h5>
                 <h1>SHoxruh Otabekov</h1>
                 <h5 className="text-light">Fullstack Developer</h5>
                 <CTA />
                 <HaederSecials />
                 <div className="me">
                    <img src={ME} alt="ME" />
                 </div>

                 <a href="#contact" className="scroll__dawn">Scroll Dawn</a>
            </div>
        </header>
    )
}

export default Header