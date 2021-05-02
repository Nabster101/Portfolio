import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ContactForm from "../components/ContactForm/ContactForm"
import ContactFooter from "../components/ContactFooter/ContactFooter"

export default function Home() {
  return (
    <React.Fragment>
      <div>
          <Navbar/>
          <ContactForm/>
          <ContactFooter/>
      </div>
    </React.Fragment>
    
  )
}
