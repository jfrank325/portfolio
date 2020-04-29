import React, { useState } from "react"
import Image from "../images/LightBlueFire.jpg"
import Navbar from "./Navbar"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"

const Home = () => {
  const [spin, setSpin] = useState(false)
  const spinning = () => {
    setSpin(!spin)
    setTimeout =
      (() => {
        setSpin(false)
      },
      1000)
  }
  return (
    <div className="home-container" id="home">
      <div
        name="#home"
        className={!spin ? "home-container-full" : "home-container-small"}
      >
        <div className="home-content-container">
          <h1>Jason Franklin Web Developer</h1>
          <Navbar spinning={spinning} spin={spin} />
        </div>
      </div>
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default Home
