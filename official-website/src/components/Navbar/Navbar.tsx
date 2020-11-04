import React from "react";
import {Navbar as BNavbar, Container, Nav, Button} from "react-bootstrap";
import "./Navbar.scss"

import {graphql, useStaticQuery} from "gatsby";


const Navbar = () =>{
    const query = useStaticQuery(graphql`
        query nav {
            datoCmsNavbar {
                contacts
                logo {
                    url
                }
            }
        }                
    `)

    return(
        <div className="navbar-container">
            <Container>
                <BNavbar>
                    <BNavbar.Brand className="navbar-logo">
                        <img width="130" height="100" className="d-inline-block align-top" src={query.datoCmsNavbar.logo.url} alt=""/>
                    </BNavbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className="button contacts-button">{query.datoCmsNavbar.contacts}</Button>
                    </Nav>
                </BNavbar>
            </Container>
        </div>
    )
}

export default Navbar