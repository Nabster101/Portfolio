import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "../components/Navbar/Navbar"
import TextAndPhoto from "../components/TextAndPhoto/TextAndPhoto"
import Skills from "../components/Skills/Skills"
import Presentation from "../components/Presentation/Presentation"
import Projects from "../components/Projects/Projects"
import Resume from "../components/Resume/Resume"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <React.Fragment>
      <div>
          <Navbar/>
          <TextAndPhoto id="Home"/>
          <Skills id="Skills"/>
          <Presentation id="Info"/>
          <Projects id="Projects"/>
          <Resume/>
          <Footer/>
      </div>
    </React.Fragment>
    
  )
}
