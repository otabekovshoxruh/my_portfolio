import React from "react";
import './services.css'
import { BiCheck } from "react-icons/bi"

const Services = () =>{
    return(
        <section id="services">
            <h5>What I Offer </h5>
            <h2>Servoces</h2>

            <div className="container server__container">
                <article className="service">
                    <div className="serveice__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="seveics__list">
                        <li>
                            <BiCheck className="seveics__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima esse velit nisi nihil.</p>
                        </li>
                        <li>
                            <BiCheck className="seveics__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima esse velit nisi nihil.</p>
                        </li>
                        <li>
                            <BiCheck className="seveics__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima esse velit nisi nihil.</p>
                        </li>
                        <li>
                            <BiCheck className="seveics__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima esse velit nisi nihil.</p>
                        </li>
                        <li>
                            <BiCheck className="seveics__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima esse velit nisi nihil.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section> 
    )
}

export default Services