import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "../components/Navbar/Navbar"
import TextAndPhoto from "../components/TextAndPhoto/TextAndPhoto"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <TextAndPhoto/>
    </div>
  )
}
