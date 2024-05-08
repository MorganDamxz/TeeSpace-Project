import React from 'react'
import '../assets/css/footer1.css'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";


const Footer1 = () => {
  return (
    <>
      <div>
        <div className="teespace">
          <div className="space1">
            <h3>Design your next favorite <br /> custom shirt</h3>
            <div className="icon-bg">
            <div className="icon">
              <FaTwitter />
            </div>
            <div className="icon">
              <FaFacebook />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaYoutube />
            </div>
            </div>
          </div>

          <div className="space2">
            <ol>
              <h3>Get in touch</h3>
              <li>hello@teespace.io</li>
              <h3>+02 036 038 3996</h3>
              <li>3665 Paseo Place, Suite 0960</li>
              <li>San Diego </li>
            </ol>
          </div>

          <div className="space2">
            <ol>
              <h3>Information</h3>
              <li>About us </li>
              <li>Our Blog </li>
              <li>Start a Return </li>
              <li>Contact Us </li>
              <li>Shipping FAQ</li>
            </ol>
          </div>

          <div className="space2">
            <ol>
              <h3>Useful Links</h3>
              <li>My Account </li>
              <li>Shipping</li>
              <li>Contact & Support </li>
              <li>All Products</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer1
