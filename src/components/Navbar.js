import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Arrow from "../images/rightarrow.png"

const Navbar = ({ spinning, spin }) => {
  return (
    <div className="navbar-container">
      <button onClick={spinning} className={!spin ? "no-show" : "show"}>
        <h2 className={!spin ? "static" : "spin"}>
          <img
            src={Arrow}
            alt="navigation arrow"
            style={{ width: "3rem", color: "white" }}
          />
        </h2>
      </button>

      <nav>
        <ul>
          <li>
            <button onClick={() => scrollTo("#home")}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
