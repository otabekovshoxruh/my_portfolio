import React from "react";
import SV from '../../assets/my_resume.pdf'


const CTA = () =>{
    return(
        <div className="cta">
            <a href={SV} download className="btn ">Dawnload CV</a>
            <a href="#contact"className="btn btn-primary">Let's Talk</a>
        </div>
    )
}

export default CTA