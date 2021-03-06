import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SkillsStyle from "./Skills.module.scss"
import SkillCard from "../SkillsCard/SkillsCard"

import AOS from "aos"
import 'aos/dist/aos.css'; 

setTimeout(() => {
    AOS.init({
        duration: 1000
    })
}, 1000) 


const Skills = () => {
    return(
        <section id="Skills" className={SkillsStyle.Skills}>
            <Container data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true" className={SkillsStyle.TitleContainer}>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <div className={SkillsStyle.Seperators}></div>
                        <div className={SkillsStyle.Title}>My skills</div>
                        <div className={SkillsStyle.Seperators}></div>
                    </Col>
                </Row>
            </Container>
            <Container className={SkillsStyle.SkillsContainer}>
                <Row className="justify-content-around">
                    <Col md={10} lg={4} className={SkillsStyle.Project_Column}>
                        <SkillCard
                            skills={[
                                { value: "Gatsby.js" },
                                { value: "React" },
                                { value: "Javascript" },
                                { value: "Typescript" },
                                { value: "CSS" },
                                { value: "HTML5" },
                            ]}
                            id={SkillsStyle.first}
                            title="Front end"
                            className={SkillsStyle.SkillCard}
                            aos="fade-down"
                        />
                    </Col>
                    <Col md={10} lg={4} className={SkillsStyle.Project_Column}>
                        <SkillCard
                            skills={[
                                { value: "Adobe Photoshop" },
                                { value: "Adobe After effects" },
                                { value: "Markdown" },
                            ]}
                            id={SkillsStyle.second}
                            title="Graphic Design"
                            className={SkillsStyle.SkillCard}
                            aos="flip-up"
                        />
                    </Col>
                    <Col md={10} lg={4} className={SkillsStyle.Project_Column}>
                        <SkillCard
                            skills={[
                                { value: "Java" },
                                { value: "MySQL" },
                                { value: "PHP" },
                                { value: "Python" },
                            ]}
                            id={SkillsStyle.third}
                            title="Back end"
                            className={SkillsStyle.SkillCard}
                            aos="fade-down"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Skills