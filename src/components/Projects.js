import React, { useState } from "react"
import LargeImage from "../images/Syklmac.png"
import DuckHunt from "../images/DuckMac.png"
import HomeImage from "../images/Homecookedmac.png"
import Layout from "../components/layout"

const Projects = () => {
  return (
    <Layout>
      <div className="projects-container" id="projects">
        <div className="project-container">
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
            <h4>
              Long distance cycling app created with React, Node.js, Express.js,
              MongoDB, and a variety of Mapbox technologies to allow the user to
              plan their next great cycling adventure by customizing their trip
              step by step with the most optimal cycling conditions.
            </h4>
            <p>{"\ud83e\udd47"}Winner of the Ironhack Hackshow</p>
          </div>
        </div>
        <div className="project-container">
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
            <h4>Description</h4>
          </div>
        </div>
        <div className="project-container">
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
            <h4>Description</h4>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
