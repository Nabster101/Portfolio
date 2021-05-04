import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PresentationStyle from "./Presentation.module.scss"

import AOS from "aos"
import 'aos/dist/aos.css'; 

setTimeout(() => {
    AOS.init({
        duration: 1000
    })
}, 1000) 

interface Props{
    id: String
}

const Presentation = (props:Props) => {
    return(
        <section id={props.id} className={PresentationStyle.Presentation}>
            <Container data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true" className={PresentationStyle.ComponentTitleContainer}>
                <Row className="justify-content-center">
                    <Col>
                        <div className={PresentationStyle.Seperators}></div>
                        <div className={PresentationStyle.ComponentTitle}>Info</div>
                        <div className={PresentationStyle.Seperators}></div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={PresentationStyle.CardContainer} >
                <Row className="justify-content-center">
                    <Col md={6} lg="auto" xl="auto">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className={PresentationStyle.ObjectivesContainer}>
                            <div className={PresentationStyle.Title}>🚀 My objectives 🚀</div>
                            <div className={PresentationStyle.Description}>
                                <ul>
                                    <li>
                                        I plan to become a full-stack developer (getting there!)
                                    </li>
                                    <li>
                                        Travel around the world
                                    </li>
                                    <li>
                                        Work at a cool company like Discord :P
                                    </li>
                                    <li>
                                        Major in computer science
                                    </li>
                                </ul> 
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg="auto" xl="auto">
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className={PresentationStyle.WIP}>
                            <div className={PresentationStyle.Title}>📚 What I’m learning 📚</div>
                            <div className={PresentationStyle.Description}>
                                <ul>
                                    <li>
                                        I'm taking multiple courses on Udemy on web development (JS, CSS, HTML, TS)
                                    </li>
                                    <li>
                                        Getting started on backend development and databse management (MySQL, PHP)
                                    </li>
                                    <li>
                                        Always improving general programming skills
                                    </li>
                                </ul> 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Presentation
