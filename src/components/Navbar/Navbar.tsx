import React from "react";
import { Navbar as NavBar, Nav, Container, Button } from "react-bootstrap";
import NavbarStyle from "./Navbar.module.scss"
import NavbarLogo from "../../images/Navbar-Icon.png"

const Navbar = () => {
    return(
        <section className={NavbarStyle.Navbar}>
            <Container className={NavbarStyle.NavContainer}>
                <NavBar collapseOnSelect variant="dark" expand="lg">
                    <NavBar.Brand href="/" className={NavbarStyle.NavbarLink}>
                        <img src={NavbarLogo} 
                            width="100" 
                            height="75" 
                            className= {`${NavbarStyle.LogoPic} ${"align-middle"}`}
                        /> <span className={NavbarStyle.Title}>Pietro Costanzi Fantini</span>                        
                    </NavBar.Brand>
                    <Nav className={`${NavbarStyle.NavItem} ${"ml-auto"}`}>
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