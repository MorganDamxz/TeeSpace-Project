import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/new-arrivals.css'
import Image from "../assets/images/div.product-top (1).png";
import Image2 from "../assets/images/div.product-top (2).png";
import Image3 from "../assets/images/div.product-top (3).png";
import Image4 from "../assets/images/div.product-top.png";


const NewArrivals = () => {
  
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
      <div className="arrivals-section">
        <div className="arrivals-text">
          <h2>
            New Arrivals <span>Best-Seller</span> <span>Sale</span>
          </h2>
        </div>
        <div className="arrivals-images">
          <div>
            <img src={Image4} alt="T-shirts" width={"80%"} height={"auto"} />
            <p>Zone Sweatshirt</p>
            <p>$19.95-$159.95</p>
          </div>

          <div>
            <img src={Image} alt="T-shirts" width={"80%"} height={"auto"} />
            <p>Zoo Men's t-shirt</p>
            <p>$14.95-$119.95</p>
          </div>

          <div>
            <img src={Image2} alt="kids-wear" width={"80%"} height={"auto"} />
            <p>Toddler -shirt</p>
            <p>$26.00</p>
          </div>

          <div className="childs-wear">
            <img src={Image3} alt="kids-wear" width={"80%"} height={"auto"} />
            <p>Fine Jersey Tee</p>
            <p id="p1">
              $28.00 <span>$31.00</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mobile-arrivals">
        <div className="arrivals-text">
          <h2>
            New Arrivals <span>Best-Seller</span> <span>Sale</span>
          </h2>
        </div>
        <Slider {...settings}>
          <div>
            <img src={Image4} alt="T-shirts" width={"80%"} height={"auto"} />
            <p>Zone Sweatshirt</p>
            <p>$19.95-$159.95</p>
          </div>

          <div>
            <img src={Image} alt="T-shirts" width={"80%"} height={"auto"} />
            <p>Zoo Men's t-shirt</p>
            <p>$14.95-$119.95</p>
          </div>

          <div>
            <img src={Image2} alt="kids-wear" width={"80%"} height={"auto"} />
            <p>Toddler -shirt</p>
            <p>$26.00</p>
          </div>

          <div className="childs-wear">
            <img src={Image3} alt="kids-wear" width={"80%"} height={"auto"} />
            <p>Fine Jersey Tee</p>
            <p id="p1">
              $28.00 <span>$31.00</span>
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default NewArrivals;
