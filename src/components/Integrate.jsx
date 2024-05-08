import React from 'react';
import '../assets/css/integrate.css';
import logo from '../assets/images/Item → Link → logo-spotify.png (1).png'
import logo1 from "../assets/images/Item → logo-amazon.png.png";
import logo2 from "../assets/images/Item → logo-dribble.png.png";
import logo3 from "../assets/images/Item → logo-ebay.png.png";
import logo4 from "../assets/images/Item → logo-feedly.png (1).png";
import logo5 from "../assets/images/Item → logo-hopin.png (2).png";
import logo6 from "../assets/images/Item → logo-lattice.png.png";
import logo7 from "../assets/images/Item → logo-upwork.png.png";
import { FaArrowRight } from "react-icons/fa";

const Integrate = () => {
  return (
    <div className="integrate-section">
      <div className="col-1">
        <h2>We integrate with</h2>
        <button>
          Add more
          <div className="icon">
            <FaArrowRight />
          </div>
        </button>
      </div>

      <div className="integrate-images">
        <div className="col-2">
          <table className="table1">
            <tbody>
            <tr>
              <td>
                <img src={logo} alt="spotify" height={"auto"} width={"90%"} />
              </td>
              <td>
                <img src={logo6} alt="lattice" height={"auto"} width={"90%"} />
              </td>
              <td>
                <img src={logo7} alt="upwork" height={"auto"} width={"90%"} />
              </td>
              <td>
                <img src={logo2} alt="dribble" height={"auto"} width={"90%"} />
              </td>
            </tr>
            </tbody>
          </table>
          <table className="table2">
            <tbody>
            <tr>
              <td>
                <img src={logo4} alt="feedly" height={"auto"} width={"90%"} />
              </td>
              <td>
                <img src={logo5} alt="hopin" height={"auto"} width={"90%"} />
              </td>
              <td>
                <img src={logo1} alt="amazon" height={"auto"} width={"90%"} />
              </td>
              <td>
                <img src={logo3} alt="ebay" height={"auto"} width={"90%"} />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Integrate
