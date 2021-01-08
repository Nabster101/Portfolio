import React from "react";
import { Navbar as NavBar, Nav, Container, Button } from "react-bootstrap";
import NavbarStyle from "./Navbar.module.scss"
import NavbarLogo from "../../images/Navbar-Icon.png"

const Navbar = () => {
    return(
        <section className={NavbarStyle.Navbar}>
            <Container>
                <NavBar variant="dark" expand="lg">
                    <NavBar.Brand href="/">
                        <img src={NavbarLogo} 
                            width="100" 
                            height="75" 
                            className="d-inline-block mb-4 align-middle"
                        /> <span className={NavbarStyle.Title}>Pietro Costanzi Fantini</span>                        
                    </NavBar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Button className={NavbarStyle.ButtonText} href="/contacts">Let's get in touch!</Button>
                        </Nav.Item>
                    </Nav>
                </NavBar>        
            </Container>
        </section>
    )
}
export default Navbar;