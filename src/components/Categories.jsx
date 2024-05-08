import React from "react";
import "../assets/css/categories.css";
import categoriesImg from "../assets/images/div.elementor-element (1).png";
import categoriesImg2 from "../assets/images/div.elementor-element (2).png";
import categoriesImg3 from "../assets/images/div.elementor-element (3).png";
import categoriesImg4 from "../assets/images/div.elementor-element (4).png";
import categoriesImg5 from "../assets/images/div.elementor-element (5).png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Categories = () => {

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
      <div className="Categories-section">
        <div className="categories-text">
          <h3>Shopping by Categories</h3>
        </div>

        <div className="categories-img">
          <img
            src={categoriesImg}
            alt="T-shirts"
            width={"19%"}
            height={"100%"}
          />
          <img
            src={categoriesImg2}
            alt="Longsleeves"
            width={"19%"}
            height={"100%"}
          />
          <img
            src={categoriesImg3}
            alt="Sweaters"
            width={"19%"}
            height={"100%"}
          />
          <img
            src={categoriesImg4}
            alt="Hoodies"
            width={"19%"}
            height={"100%"}
          />
          <img
            src={categoriesImg5}
            alt="Tanktops"
            width={"19%"}
            height={"100%"}
          />
        </div>
      </div>

<div className="mobile-categories">
      <Slider {...settings}>
      
        <img
          src={categoriesImg}
          alt="T-shirts"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <img
          src={categoriesImg2}
          alt="Longsleeves"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <img
          src={categoriesImg3}
          alt="Sweaters"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <img
          src={categoriesImg4}
          alt="Hoodies"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <img
          src={categoriesImg5}
          alt="Tanktops"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      
      </Slider> 
      </div>
      
    </>
  );
};
export default Categories;
