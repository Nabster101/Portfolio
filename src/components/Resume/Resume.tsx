import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap";
import ResumeStyle from "./Resume.module.scss"

import AOS from "aos"
import 'aos/dist/aos.css'; 

setTimeout(() => {
    AOS.init({
        duration: 1000
    })
}, 1000) 

const Resume = () =>{
    return(
        <section className={ResumeStyle.Resume}>
            <Container data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true" className={ResumeStyle.TitleContainer}>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <div className={ResumeStyle.Seperators}></div>
                        <div className={ResumeStyle.ComponentTitle}>My Resume</div>
                        <div className={ResumeStyle.Seperators}></div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div data-aos="fade-up-left" data-aos-duration="2000" data-aos-once="true" className={ResumeStyle.ResumeContainer}>
                            <div className={ResumeStyle.TextContainer}>
                                <div className={ResumeStyle.TextTitle}>Get my resume now!</div>
                                <div className={ResumeStyle.FlagContainer}>
                                    <Button className={ResumeStyle.Flag}/>
                                </div>
                                <div className={ResumeStyle.TextDescription}>Press on the flag to get my resume in that language!</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
}

export default Resume