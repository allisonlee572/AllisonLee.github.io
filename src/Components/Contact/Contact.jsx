import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/template/mail_icon.svg";
import location_icon from "../../assets/template/location_icon.svg";
import call_icon from "../../assets/template/call_icon.svg";
// also include linkedin

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="parallax-wrapper">
        <div className="sky"></div>
        <div className="reflection"></div>
        <div className="clouds"></div>
        <div className="star"></div>

        <div className="main-content">
          <div className="contact-title">
            <h1>Get in touch</h1>
          </div>

          <div className="contact-section">
            <div className="contact-details">
              <div className="contact-email">
                <img src={mail_icon} alt="Mail Icon" className="email" />{" "}
                <span>allison.682.lee@gmail.com</span>
              </div>
              <a
                href="https://www.linkedin.com/in/allisonlee572"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                <span>in/allisonlee572</span>
              </a>
            </div>
          </div>
          <div className="footer">
            <h5>© 2025 Allison Lee</h5>
            <h5>Designed and coded by yours truly ;)</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
