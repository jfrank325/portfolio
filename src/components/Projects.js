import React from "react"
import LargeImage from "../images/Syklmac.png"
import DuckHunt from "../images/DuckMac.png"
import HomeImage from "../images/Homecookedmac.png"
import DancerParty from "../images/DP.png"
import ScrollAnimation from "react-animate-on-scroll"

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <ScrollAnimation animateIn="opaque">
        <div className="project-container opaque">
          <div className="image-container">
            <a
              href="http://sykl.ist/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                className="project-image"
                src={LargeImage}
                alt="Sykkel Web App"
              />
            </a>
          </div>

          <div className="description-container">
            <h1>Sykkel</h1>
            <h4>{"\ud83e\udd47"}Winner of the Ironhack Hackshow</h4>
            <p>
              Long distance cycling trip planner that allows the user to plan
              their next great cycling adventure by customizing their trip step
              by step with the most optimal cycling conditions. Created with
              React, Node.js, Express.js, MongoDB, and a variety of Mapbox
              technologies. Created in collaboration with "Jackie and the Ferry
              Boys"
            </p>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="opaque">
        <div className="project-container opaque">
          <div className="image-container">
            <a
              href="https://dancerparty.herokuapp.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                className="project-image"
                src={DancerParty}
                alt="Dance Party"
              />
            </a>
          </div>
          <div className="description-container">
            <h1>DancerParty</h1>
            <p>
              DancerParty is a social network app created specifically for
              dancers. It allows dancers to come together to talk about what's
              going on in the dance world today. Created with MERN stack.
            </p>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="opaque">
        <div className="project-container opaque">
          <div className="image-container">
            <a
              href="https://homecooked1.herokuapp.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img className="project-image" src={HomeImage} alt="HomeCooked" />
            </a>
          </div>
          <div className="description-container">
            <h1>HomeCooked</h1>
            <p>
              Social meal sharing app allowing users to host meals in their home
              as well as join as a guest in others with the hope of connecting
              with people in their communities, having another option to
              restaurants, as well as reducing food waste. Created with
              Javascript, Node.js, Express.js, Handlebars.js and AJAX.
            </p>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="opaque">
        <div className="project-container opaque">
          <div className="image-container">
            <a
              href="https://jfrank325.github.io/DuckHunt2020/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img className="project-image" src={DuckHunt} alt="Duck Hunt" />
            </a>
          </div>
          <div className="description-container">
            <h1>DuckHunt 2020</h1>
            <h4>{"\ud83e\udd47"}Voted Best First Project IronHack Berlin</h4>
            <p>
              {" "}
              Realistic Duck Hunting game created with Javascript and P5.js. Be
              prepared for anything... You never know when the hunter might
              become the hunted!
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Projects
