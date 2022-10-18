import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container container__experiencs">
        <div className="expreincs__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon"/>
              <div>
                <h4>SASS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill  className="experince__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill  className="experince__details-icon"/>
              <div>
                <h4>NEXT js </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon"/>
              <div>
                <h4>Node js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <BsPatchCheckFill className="experince__details-icon"/>
              <div>
                <h4>Express js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
