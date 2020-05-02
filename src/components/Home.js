import React, { useState } from "react"
import Navbar from "./Navbar"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"

const Home = () => {
  const [spin, setSpin] = useState(false)

  return (
    <div className="home-container" id="home">
      <div
        name="#home"
        className={!spin ? "home-container-full" : "home-container-small"}
      >
        <div className="home-content-container">
          <h1 className={spin ? "grow" : undefined}>
            Jason Franklin Web Developer
          </h1>
          <Navbar
            spinning={() => setSpin(spin === false ? true : false)}
            spin={spin}
          />
        </div>
      </div>
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default Home
