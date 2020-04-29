import React from "react"
import Phone from "../images/phone.png"
import Email from "../images/email.png"
import Github from "../images/GitHub_Logo.png"
import Linkedin from "../images/LI-Logo.png"

const Contact = () => (
  <div className="contact-container" id="contact">
    <div className="phone">
      <img src={Phone} alt="Phone" style={{ width: "2rem", height: "2rem" }} />
      <span> +49 176 5199 6412</span>
    </div>
    <div className="email">
      <img src={Email} alt="Email" style={{ width: "2rem", height: "2rem" }} />
      <span>jfrank325@gmail.com</span>
    </div>
    <div className="github">
      <a
        href="https://github.com/jfrank325"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src={Github} alt="Github" style={{ height: "3rem" }} />
      </a>
    </div>
    <div className="email">
      <a
        href="https://www.linkedin.com/in/jason-franklin-33447b19b/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src={Linkedin} alt="Linked in" style={{ height: "2.5rem" }} />
      </a>
    </div>
  </div>
)

export default Contact
