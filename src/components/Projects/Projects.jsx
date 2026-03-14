import React from 'react'
import Card from '../Card/Card'
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import br from "../../assets/br.png"
import cb from "../../assets/cb.png"
import ise from "../../assets/ise.png"
import hh from "../../assets/hh.png"
import rb from "../../assets/rb.png"
import rx from "../../assets/rx.png"


import "./Projects.css"

import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {

   useGSAP(() => {

  gsap.from("#para", {
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#para",
      scrub: 2,
      start: "top 80%",
      end: "top 30%"
    }
  })

  gsap.from(".slider", {   
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".slider",
      scrub: 2,
      start: "top 80%",
      end: "top 30%"
    }
  })

})


    


  return (
    <div id="projects">
        <h1 id="para">Projects I've Built</h1>
        <p className="project-desc">
Here are some of the projects I built using MERN stack and modern web technologies.
</p>
        <div className="slider">

        
            
            <Card title="HIKEHIDE" image={hh} link="https://hike-hide-1.onrender.com/listings" />
            <Card title="CODECANVAS" image={rb} link="https://resumebuilderfrontend-git-main-amanversees-projects.vercel.app" />
            <Card title="REPX" image={rx}  />
            {/* <Card title="VIRTUAL ASSISTANT" image={va} />
            <Card title="AI POWERED FITNESS WEBSITE" image={fw} />
            <Card title="AI BACKGROUD REMOVER" image={br} />
            <Card title="AI CHATBOT" image={cb} />
            <Card title="IMAGE SEARCH ENGINE" image={ise} /> */}
            
        </div>
    </div>
  )
}

export default Projects