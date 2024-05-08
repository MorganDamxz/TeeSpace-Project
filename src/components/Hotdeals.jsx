import React from "react";
import "../assets/css/hotdeals.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealImg from "../assets/images/Item (4).png";
import DealImg2 from "../assets/images/Item (5).png";
import DealImg3 from "../assets/images/Item (12).png";
import DealImg4 from "../assets/images/div.product-top (3).png";
import { FaArrowRight } from "react-icons/fa";

const Hotdeals = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <div className="hotdeals-text">
          <h2>Hot under $39</h2>
          <button>
            View All
            <div className="icon">
              <FaArrowRight />
            </div>
          </button>
        </div>
        <div container>
          <div className="hotdeals-session">
            <div className="hotdeals-image">
              <div>
                <img
                  src={DealImg3}
                  alt="T-shirts"
                  width={"80%"}
                  height={"auto"}
                />
                <p>Adult Quality Tee</p>
                <p>$26.00-$29.00</p>
              </div>

              <div>
                <img
                  src={DealImg2}
                  alt="T-shirts"
                  width={"80%"}
                  height={"auto"}
                />
                <p>All-Over-Print Hoodie</p>
                <p>$26.00-$29.00</p>
              </div>

              <div>
                <img
                  src={DealImg}
                  alt="T-shirts"
                  width={"80%"}
                  height={"auto"}
                />
                <p>AOP Cut & Sew Tee</p>
                <p>$19.95-$159.95</p>
              </div>

              <div className="childs-wear">
                <img
                  src={DealImg4}
                  alt="T-shirts"
                  width={"80%"}
                  height={"auto"}
                />
                <p>Fine Jersey Tee</p>
                <p id="p1">
                  $28.00 <span>$31.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="mobile">
      <Slider {...settings}>
        <div className="hot-mobile">
          <img src={DealImg3} alt="Adult Quality Tee" />
          <p>Adult Quality Tee</p>
          <p>$26.00-$29.00</p>
        </div>
        <div>
          <img src={DealImg2} alt="All-Over-Print Hoodie" />
          <p>All-Over-Print Hoodie</p>
          <p>$26.00-$29.00</p>
        </div>
        <div>
          <img src={DealImg} alt="AOP Cut & Sew Tee" />
          <p>AOP Cut & Sew Tee</p>
          <p>$19.95-$159.95</p>
        </div>
        <div>
          <img src={DealImg4} alt="Fine Jersey Tee" />
          <p>Fine Jersey Tee</p>
          <p id="p1">$28.00 <span>$31.00</span></p>
        </div>
      </Slider>
      </div>
    
      
    </>
  );
};

export default Hotdeals;
