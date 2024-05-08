import React from 'react';
import "../assets/css/contact.css";
import logo from "../assets/images/Link → logo-black.png.png";
import { FaShoppingBag, FaSearch, FaStar, FaPhone, FaUser} from "react-icons/fa";
// import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';


const MyContact = () => {
  return (
    <>
      <div className="first">
        {/* <Navbar className="bg-body-tertiary justify-content-between">  */}
        <div className="first-side">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Teespace" />
          </a>
        </div>
        <div>
          <Form className="d-flex">
            <div style={{ position: "relative" }}>
              <FaSearch
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "6px",
                  transform: "translateY(-50%)",
                  color: "gray",
                }}
              />

              {/* Input field with left padding for the icon */}
              <Form.Control
                type="text"
                placeholder="what are you looking for?"
                className="mr-sm-2"
                style={{ paddingLeft: "45px", padding: "12px" }}
              />
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
        </div>

        <div className="btn">
          <div className="icon">
            <FaPhone />
          </div>
          <div className="hotline">
            <h5>Hotline:19008188</h5>
            <p>pickup your order for free</p>
          </div>
          <div className="icon">
            <FaUser />
          </div>
          <div className="icon">
            <FaStar />
          </div>
          <div className="icon">
            <FaShoppingBag />
      
          </div>
        </div>
      </div>
    </>
  );
};




export default MyContact
