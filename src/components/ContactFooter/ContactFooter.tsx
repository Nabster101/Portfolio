import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import ContactFooterStyle from "./ContactFooter.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/fontawesome';

const ContactFooter = () => {
    return(
        <section className={ContactFooterStyle.Footer}>
            <Container fluid className={ContactFooterStyle.FooterContainer}>
                <Row>
                    <Col>
                        <div className={ContactFooterStyle.TextBox}>
                            <img className={ContactFooterStyle.FooterImage} src={require("../../images/Navbar-Icon.png")}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={ContactFooterStyle.SocialIconContainer}>
                            <a className={ContactFooterStyle.SocialIconButtons} href="https://www.instagram.com/pietro.costanzi/">
                                <FontAwesomeIcon className={ContactFooterStyle.SocialIcon} icon={['fab', 'instagram']} />
                            </a>
                            <a className={ContactFooterStyle.SocialIconButtons} href="https://www.facebook.com/pietro.costanzi.10/">
                                <FontAwesomeIcon className={ContactFooterStyle.SocialIcon} icon={['fab', 'facebook']} />
                            </a> 
                            <a className={ContactFooterStyle.SocialIconButtons} href="https://www.linkedin.com/in/pietro-costanzi-fantini/">
                                <FontAwesomeIcon className={ContactFooterStyle.SocialIcon} icon={['fab', 'linkedin']} />
                            </a> 
                            <a className={ContactFooterStyle.SocialIconButtons} href="https://twitter.com/TheRealNabster_">
                                <FontAwesomeIcon className={ContactFooterStyle.SocialIcon} icon={['fab', 'twitter']} />
                            </a> 
                            <a className={ContactFooterStyle.SocialIconButtons} href="https://github.com/Nabster101">
                                <FontAwesomeIcon className={ContactFooterStyle.SocialIcon} icon={['fab', 'github']} />
                            </a>      
                            <a className={ContactFooterStyle.SocialIconButtons} href="mailto:pietrocostanzi39@gmail.com">
                                <FontAwesomeIcon className={ContactFooterStyle.SocialIcon} icon={['fas', 'envelope']} />
                            </a>                           
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={ContactFooterStyle.Subtitle}>
                            <div className={ContactFooterStyle.Text}>Made with ♥ by me!</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactFooter