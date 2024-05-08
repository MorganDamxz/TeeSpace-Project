import React from 'react'
import '../assets/css/newsletter.css'
import Form from "react-bootstrap/Form";
import { FaArrowRight } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <>
      <div className="latest">
        <h2>
          Get the latest news, events & more <br /> delivered to your inbox.
        </h2>
        <Form className="d-flex">
          <div style={{ position: "relative" }}>
            {/* Input field with left padding for the icon */}
            <Form.Control
              type="text"
              placeholder="Your email address"
              className="mr-sm-2"
              style={{ paddingLeft: "45px", padding: "12px" }}
            />
            <FaArrowRight
            />
          </div>
        </Form>
      </div>
    </>
  );
}

export default NewsLetter
