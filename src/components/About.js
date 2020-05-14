import React from "react"
import Image from "../images/Jasonroundtouched.png"
import ScrollAnimation from "react-animate-on-scroll"

const About = () => {
  return (
    <ScrollAnimation animateIn="opaque">
      <div className="about-container opaque">
        <div className="picture" id="about">
          <img src={Image} alt="Jason's profile" />
        </div>
        <div className="content">
          <h1>About Me</h1>
          <p>
            I'm a full-stack web developer with a passion for creating unique
            user experiences with clean and effective code in the newest
            technologies. I bring a special level of creativity and aesthetic
            from my past career as a dancer and choreographer. I'd love to hear
            from you about new job opportunities, collaborations, or projects.
          </p>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default About
