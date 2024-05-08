import React from 'react';
import  "../assets/css/tutorial.css";
import image from '../assets/images/step-31.png.png';

const Tutorial = () => {
  return (
    <>
      <h1>How to design and order custom T-shirts</h1>
      <div className="tutorial-sections">
        <div className="col-1">
          <h4>
            <span>1</span>
            Choose from 412 custom products in our catalog.
          </h4>
          <div className="tutorial-bullet">
            <h4>
              <span>2</span>
              Customize your design with graphics,text or your own uploaded
              images.
            </h4>
            <h4>
              <span>3</span>
              Get your order sent to your doorstep with free standard shipping.
            </h4>
          </div>
        </div>

        <div className="col-2">
          <img src={image} alt="Tutorial" width={"100%"} height={"auto"} />
        </div>
      </div>
    </>
  );
}

export default Tutorial
