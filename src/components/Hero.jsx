import React from 'react';
import "../assets/css/hero.css";
import svgImg from "../assets/images/Group 14.png"
import heroImg from "../assets/images/HeroImg (3).png"

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="col-1">
          <h1>Let's configure your own</h1>
            <h1 id='h11'> print product</h1>
          <img id='svg' src={svgImg} alt="svg" width={'100%'} /> 
          <p id='p2'>The easiest way to get your print as you want</p>
          <button>Print Your Own</button>
        </div>

        <div className="hero-images">
          <div className="col-2">
            <div>
              <img src={heroImg} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero
