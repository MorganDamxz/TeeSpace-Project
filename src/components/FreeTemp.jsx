import React from 'react';
import  '../assets/css/freetemp.css';
import FreeTemp0 from "../assets/images/div.elementor-element (10).png";
import FreeTemp1 from "../assets/images/div.elementor-element (11).png";
import FreeTemp2 from "../assets/images/div.elementor-element (12).png";
import FreeTemp3 from "../assets/images/div.elementor-element (13).png";
import { FaArrowRight } from "react-icons/fa";

const FreeTemp = () => {
  return (
    <>
      <div>
        <div className="free-text">
          <h2>Free design templates</h2>
          <button>
            View All
            <div className="icon">
              <FaArrowRight />
            </div>
          </button>
        </div>
        <div container>
          <div className="free-session">
            <div className="free-image">
              <img
                src={FreeTemp0}
                alt="Astronauts"
                width={"100%"}
                height={"auto"}
              />
            </div>

            <div>
              <img src={FreeTemp1} alt="Quote" width={"100%"} height={"auto"} />
            </div>

            <div>
              <img src={FreeTemp2} alt="Art" width={"100%"} height={"auto"} />
            </div>

            <div className="childs-wear">
              <img src={FreeTemp3} alt="more" width={"100%"} height={"auto"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeTemp
