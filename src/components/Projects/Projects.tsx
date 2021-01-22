import React, { useState } from "react";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
import ProjectsStyle from "./Projects.module.scss"
import ProjectCard from "../ProjectCard/ProjectCard"

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


const Projects = (props:Props) => {    

    const [open, setOpen] = useState(false);
    const [isActive, setActive] = useState(false);
    const toggleBox = () => {
        setActive(!isActive);
    }

    return(
        <section id={props.id} className={ProjectsStyle.Projects}>
            <Container data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true" className={ProjectsStyle.TitleContainer}>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <div className={ProjectsStyle.Seperators}></div>
                        <div className={ProjectsStyle.ComponentTitle}>My projects</div>
                        <div className={ProjectsStyle.Seperators}></div>
                    </Col>
                </Row>
            </Container>
            <Container id={ProjectsStyle.FirstContainer} fluid className={ProjectsStyle.ProjectsContainer}>
                <Row className="justify-content-between">
                    <Col md="auto">
                        <ProjectCard
                            id={ProjectsStyle.first}
                            title="CyberChallenge.IT"
                            description="The first Italian introductory training program in cybersecurity for high-school and undergraduate students."
                            className={ProjectsStyle.ProjectCard}
                            className2={ProjectsStyle.ProjectCardTitle}
                            className3={ProjectsStyle.ProjectCardDescription}
                            className4={ProjectsStyle.ProjectCardTextContainer}
                            className5={ProjectsStyle.ProjectCardButton}
                            aos="zoom-in-right"
                        />
                        <ProjectCard
                            id={ProjectsStyle.second}
                            title="Zero Robotics"
                            description="Programming competition where highschool students control robotic SPHERES aboard the International Space Station."
                            className={ProjectsStyle.ProjectCard}
                            className2={ProjectsStyle.ProjectCardTitle}
                            className3={ProjectsStyle.ProjectCardDescription}
                            className4={ProjectsStyle.ProjectCardTextContainer}
                            className5={ProjectsStyle.ProjectCardButton}
                            aos="fade-down"
                        />
                        <ProjectCard
                            id={ProjectsStyle.third}
                            title="My Highschool's Timetable"
                            description="Along with a couple of friends we set up the timetable for our highschool to be viewed online"
                            className={ProjectsStyle.ProjectCard}
                            className2={ProjectsStyle.ProjectCardTitle}
                            className3={ProjectsStyle.ProjectCardDescription}
                            className4={ProjectsStyle.ProjectCardTextContainer}
                            className5={ProjectsStyle.ProjectCardButton}
                            aos="zoom-in-left"
                        />
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => {setOpen(!open);toggleBox();}} className={`${ProjectsStyle} ${isActive ? "Projects-module--ShowMoreRemove--28Oq5" : "Projects-module--ShowMore--25n3l" }`} aria-controls="SecondContainer" aria-expanded={open}>▼ Show more ▼</Button>
            <Collapse in={open}>
                <Container id={ProjectsStyle.secondcontainer} fluid className={ProjectsStyle.ProjectsContainer}>
                    <Row className="justify-content-between">
                        <Col md="auto">
                            <ProjectCard
                                id={ProjectsStyle.fourth}
                                title="Pulsee hackathon"
                                description="The goal for this hackathon was coming up with a sustainable way to encourage people to use green energy. We got second place!"
                                className={ProjectsStyle.ProjectCard}
                                className2={ProjectsStyle.ProjectCardTitle}
                                className3={ProjectsStyle.ProjectCardDescription}
                                className4={ProjectsStyle.ProjectCardTextContainer}
                                className5={ProjectsStyle.ProjectCardButton}
                                aos="zoom-in-right"
                            />
                            <ProjectCard
                                id={ProjectsStyle.fifth}
                                title="RunHack hackathon"
                                description="This was the first online hackathon with the theme of sports and technology in mind. We got 4th place!"
                                className={ProjectsStyle.ProjectCard}
                                className2={ProjectsStyle.ProjectCardTitle}
                                className3={ProjectsStyle.ProjectCardDescription}
                                className4={ProjectsStyle.ProjectCardTextContainer}
                                className5={ProjectsStyle.ProjectCardButton}
                                aos="fade-down"
                            />
                            <ProjectCard
                                id={ProjectsStyle.sixth}
                                title="Github projects"
                                description="This is a link to my github profile to check all the other projects I have worked on (plus there's a cool introduction)"
                                className={ProjectsStyle.ProjectCard}
                                className2={ProjectsStyle.ProjectCardTitle}
                                className3={ProjectsStyle.ProjectCardDescription}
                                className4={ProjectsStyle.ProjectCardTextContainer}
                                className5={ProjectsStyle.ProjectCardButton}
                                aos="zoom-in-left"
                            />
                        </Col>
                    </Row>
                </Container>  
            </Collapse>
            <Button onClick={() => {setOpen(!open);toggleBox();}} className={`${ProjectsStyle} ${isActive ? "Projects-module--ShowMore--25n3l" : "Projects-module--ShowMoreRemove--28Oq5" }`} aria-controls="SecondContainer" aria-expanded={open}>▲ Show less ▲</Button>
        </section>
    )
}
export default Projects