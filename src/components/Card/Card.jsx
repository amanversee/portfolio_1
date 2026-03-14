import React from 'react'
import "./Card.css"
import mern from "../../assets/mern.png"

function Card({title,image, link}) {
  return (
    <div className="card">
        <h1>{title}</h1>
        <div className="hovercard">
            <img src={image} alt="" />
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}
        </div>
    </div>
  )
}

export default Card