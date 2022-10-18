import React from "react";
import './About.css'
import { FaAward } from 'react-icons/fa'
import { GiDrumKit } from 'react-icons/gi'
import about__mr  from '../../assets/about__mr.JPG'
import { VscFolderLibrary} from 'react-icons/vsc'


const About = () =>{
    return(
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ month working</small>
                        </article>

                        <article className="about__card">
                            <GiDrumKit className="about__icon"/>
                            <h5>Hobby</h5>
                            <small>8+ yers playing drum</small>
                        </article>
                        
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>4+ Completed </small>
                        </article>
                    </div>
                    <p>Hello, my name is Shokruh. I am a full stack student of astrum it academy and my major is fontend. I consider myself a creative person, so the front-end direction attracted me, and I have 8 years of experience playing drums, which I really enjoy. But my love of writing code has prevailed 😁</p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={about__mr} alt="alt" className="me"/>
                    </div>
                </div>              
            </div>
        </section> 
    )
}

export default About