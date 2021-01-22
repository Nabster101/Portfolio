import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import FooterStyle from "./Footer.module.scss"
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return(
        <section className={FooterStyle.Footer}>
            <Container fluid className={FooterStyle.FooterContainer}>
                <Row>
                    <Col>
                        <div className={FooterStyle.TextBox}>
                            <Link className={FooterStyle.SectionsLink} to="Home" spy={true} smooth={true} duration={300} offset={-200}>Home</Link>
                            <Link className={FooterStyle.SectionsLink} to="Skills" spy={true} smooth={true} duration={300} offset={-200}>Skills</Link>
                            <img className={FooterStyle.FooterImage} src={require("../../images/Navbar-Icon.png")}/>
                            <Link className={FooterStyle.SectionsLink} to="Info" spy={true} smooth={true} duration={300} offset={-200}>Info</Link>
                            <Link className={FooterStyle.SectionsLink} to="Projects" spy={true} smooth={true} duration={300} offset={-200}>Projects</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={FooterStyle.SocialIconContainer}>
                            <a className={FooterStyle.SocialIconButtons} href="https://www.instagram.com/pietro.costanzi/">
                                <FontAwesomeIcon className={FooterStyle.SocialIcon} icon={faInstagram} />
                            </a>
                            <a className={FooterStyle.SocialIconButtons} href="https://www.facebook.com/pietro.costanzi.10/">
                                <FontAwesomeIcon className={FooterStyle.SocialIcon} icon={faFacebook} />
                            </a> 
                            <a className={FooterStyle.SocialIconButtons} href="https://www.linkedin.com/in/pietro-costanzi-fantini/">
                                <FontAwesomeIcon className={FooterStyle.SocialIcon} icon={faLinkedinIn} />
                            </a> 
                            <a className={FooterStyle.SocialIconButtons} href="https://twitter.com/TheRealNabster_">
                                <FontAwesomeIcon className={FooterStyle.SocialIcon} icon={faTwitter} />
                            </a> 
                            <a className={FooterStyle.SocialIconButtons} href="https://github.com/Nabster101">
                                <FontAwesomeIcon className={FooterStyle.SocialIcon} icon={faGithub} />
                            </a>      
                            <a className={FooterStyle.SocialIconButtons} href="mailto:pietrocostanzi39@gmail.com">
                                <FontAwesomeIcon className={FooterStyle.SocialIcon} icon={faEnvelope} />
                            </a>                           
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={FooterStyle.Subtitle}>
                            <div className={FooterStyle.Text}>Made with ♥ by me!</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer