import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [expander, setExpander] = useState(false)

  return (
    <div className="navbar-container">
      <p
        onMouseEnter={() => setExpander(true)}
        onMouseLeave={setTimeout(() => setExpander(false), 5000)}
      >
        T
      </p>
      {expander && (
        <nav
        // onMouseLeave={setTimeout(() => setExpander(false), 2000)}
        >
          <ul onMouseEnter={() => setExpander(true)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Projects/">Projects</Link>
            </li>
            <li>
              <Link to="/About/">About</Link>
            </li>
            <li>
              <Link to="/Contact/">Contact</Link>{" "}
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Navbar
