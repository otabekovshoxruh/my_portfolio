import React from "react";
import "./portfolio.css";
import IMAGE4 from '../../assets/pokemon.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My All Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
                <img src={IMAGE4} alt="" className="pic" />
          </div>
          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/otabekovshoxruh" className="btn">
            Github
          </a>
          <a
            href="https://transcendent-creponne-c3b851.netlify.app"
            className="btn btn-primary"
          >
            Demo
          </a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
                <img src={IMAGE4} alt="" className="pic" />
          </div>
          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="https://transcendent-creponne-c3b851.netlify.app"
            className="btn btn-primary"
          >
            Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
                <img src={IMAGE4} alt="" className="pic" />
          </div>
          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="https://transcendent-creponne-c3b851.netlify.app"
            className="btn btn-primary"
          >
            Demo
          </a>
          </div>
        </article>
       
        <article className="portfolio__item">
          <div className="portfolio__item-image">
                <img src={IMAGE4} alt="" className="pic" />
          </div>
          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="https://transcendent-creponne-c3b851.netlify.app"
            className="btn btn-primary"
          >
            Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
                <img src={IMAGE4} alt="" className="pic" />
          </div>
          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="https://transcendent-creponne-c3b851.netlify.app"
            className="btn btn-primary"
          >
            Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
                <img src={IMAGE4} alt="" className="pic" />
          </div>
          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="https://transcendent-creponne-c3b851.netlify.app"
            className="btn btn-primary"
          >
            Demo
          </a>
          </div>
        </article>*/}
      </div>
    </section> 
  );
};

export default Portfolio;
