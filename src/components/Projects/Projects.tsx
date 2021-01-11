import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsStyle from "./Projects.module.scss"
import ProjectCard from "../ProjectCard/ProjectCard"

const Projects = () => {
    return(
        <section className={ProjectsStyle.Projects}>
            <Container className={ProjectsStyle.TitleContainer}>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <div className={ProjectsStyle.Seperators}></div>
                        <div className={ProjectsStyle.ComponentTitle}>My projects</div>
                        <div className={ProjectsStyle.Seperators}></div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={ProjectsStyle.ProjectsContainer}>
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
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Projects