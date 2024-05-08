import React from "react";
import "../assets/css/categories2.css";
import images from "../assets/images/Link → banner-26.png.png";
import image2 from "../assets/images/Link → banner-27.jpg.png";
import { FaArrowRight } from "react-icons/fa";

const Categories2Section = (props) => {
  const { image, title, title1, text, text1, button } = props;

  return (
    <>
      <div container>
        <div className="categories-card">
          <img height={"auto"} width={"100%"} src={image} alt="Categories" />
          <div className="card-title">
            <h2 id="txt3">{title}</h2>
            <h2 id="txt4">{title1}</h2>
            <p id="txt">{text}</p>
            <p id="txt2">{text1}</p>
            <button id="btn" type="button">
              {button}
              <div className="icon">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const MyCategories = () => {
  return (
    <>
      <div className="categories-img">
        <div>
          <Categories2Section
            image={images}
            title="Thousands of"
            title1="free templates"
            text="Free and easy way to bring"
            text1="your ideas to life"
            button="Explore More "
          />
          
        </div>

        <div className="categories-img2">
          <div>
            <Categories2Section
              image={image2}
              title="Create your"
              title1="unique style"
              text="Free and easy way to create"
              text1="your ideas to life"
              button="Explore More"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCategories;
