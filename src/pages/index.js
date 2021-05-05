import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "../components/Navbar/Navbar"
import TextAndPhoto from "../components/TextAndPhoto/TextAndPhoto"
import Skills from "../components/Skills/Skills"
import Presentation from "../components/Presentation/Presentation"
import Projects from "../components/Projects/Projects"
import Resume from "../components/Resume/Resume"
import Footer from "../components/Footer/Footer"
import Helmet from "react-helmet"

export default function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pietro Costanzi Fantini</title>
      </Helmet>
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
