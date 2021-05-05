import React from "react"
import Helmet from "react-helmet"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "../components/Navbar/Navbar"
import ContactForm from "../components/ContactForm/ContactForm"
import ContactFooter from "../components/ContactFooter/ContactFooter"

export default function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pietro Costanzi Fantini</title>
      </Helmet>
      <div>
          <Navbar/>
          <ContactForm/>
          <ContactFooter/>
      </div>
    </React.Fragment>
    
  )
}
