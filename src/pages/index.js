import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "../components/Navbar/Navbar"
import TextAndPhoto from "../components/TextAndPhoto/TextAndPhoto"
import Skills from "../components/Skills/Skills"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <TextAndPhoto/>
      <Skills/>
    </div>
  )
}
