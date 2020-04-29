import React from "react"
import Image from "../images/Jasonround.png"

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="picture">
        <img src={Image} alt="Jason's picture" />
      </div>
      <div className="content">
        <h1>About Me</h1>
        <p>This is letting you know what I'm about</p>
      </div>
    </div>
  )
}

export default About
