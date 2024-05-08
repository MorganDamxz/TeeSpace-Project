import React from "react";
import "../assets/css/sample.css";
import sampleImg from "../assets/images/Item (7).png";
import sampleImg1 from "../assets/images/Item (8).png";
import sampleImg2 from "../assets/images/Item (9).png";
import sampleImg3 from "../assets/images/Item (10).png";
import sampleImg4 from "../assets/images/Item (11).png";

const Sample = () => {
  return (
    <>
      <div container>
        <div className="sample-section">
        <div className="sample-images">
          <div>
            <img src={sampleImg} alt="Hoodie" width={"100%"} height={"auto"} />
          </div>

          <div>
            <img src={sampleImg1} alt="design" width={"100%"} height={"auto"} />
          </div>

          <div>
            <img
              src={sampleImg2}
              alt="sweat-shirt"
              width={"100%"}
              height={"auto"}
            />
          </div>

          <div>
            <img src={sampleImg3} alt="design" width={"100%"} height={"auto"} />
          </div>

          <div>
            <img src={sampleImg4} alt="hoodie" width={"100%"} height={"auto"} />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Sample;
