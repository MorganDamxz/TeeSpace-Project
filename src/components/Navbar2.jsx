
import "../assets/css/navbar2.css";
import React,{ useState } from "react";
import{ FaAngleDown,}from "react-icons/fa";


function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="App">
        <nav className="second-nav">
          <button className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`menu-btn ${isMenuOpen ? "open" : ""}`}>
            <li className="home-link">
              <a href="#">Home</a>
              <FaAngleDown/>
            </li>
            <li>
              <a href="#">TeeSpace</a>
              <FaAngleDown/>
            </li>
            <li>
              <a href="#">Shop</a>
              <FaAngleDown/>
            </li>
            <li>
              <a href="#">Blog</a>
              <FaAngleDown/>
            </li>
            <li>
              <a href="#">Pages</a>
              <FaAngleDown/>

            </li>
          </ul>
        </nav>

        <div className="hot-sales">
          {/* <div className="icon">
            <FaFireAlt />
          </div> */}
          <h5>
            &#x1f525; Extra <span>Sales 30%</span> off
          </h5>
        </div>
      </div>
    </>
  );
}

export default Navbar2
