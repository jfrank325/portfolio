import React from "react"
import Image from "../images/Jasonroundtouched.png"
import ScrollAnimation from "react-animate-on-scroll"

const About = () => {
  return (
    <ScrollAnimation animateIn="opaque">
      <div className="about-container opaque" id="about">
        <div className="picture">
          <img src={Image} alt="Jason's profile" />
        </div>
        <div className="content">
          <h1>About Me</h1>
          <p>This is letting you know what I'm about</p>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default About
