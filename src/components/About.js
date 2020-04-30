import React from "react"
import Image from "../images/Jasonroundtouched.png"

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="picture">
        <img src={Image} alt="Jason's profile" />
      </div>
      <div className="content">
        <h1>About Me</h1>
        <p>This is letting you know what I'm about</p>
      </div>
    </div>
  )
}

export default About
