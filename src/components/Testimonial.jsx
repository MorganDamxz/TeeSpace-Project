import React from 'react';
import '../assets/css/testimonial.css';
import downloadApp from "../assets/images/div.elementor-element (14).png";
import reviewImg from "../assets/images/Item (6).png";
import {
  FaAngleLeft, FaAngleRight
} from "react-icons/fa";


const Testimonial = () => {
  return (
    <>
      <div className="testimonial-section">
        <img src={downloadApp} alt="download app" width="50%" height="100%" />
        <div className="testimonial-card">
          <h2>Testimonials</h2>
          <h4>
            “For all your printing prerequisites. Offer to make and print their
            pamphlets, business cards, solicitations, and occasion programs.”
          </h4>
          <div className="review">
            <div className="review-id">
              <img src={reviewImg} alt="reviewer" />
              <h5>
                Eddy M. <br />
                <span>Designer at Lift</span>
              </h5>
            </div>
            <div className="icon">
              <FaAngleLeft />
            </div>
            <div className="icon">
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial
