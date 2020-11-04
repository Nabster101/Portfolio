import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Skill from "../Skill/Skill";
import "./Skills.scss"

const Skills = () =>{


    return(
        <div className="skills-container">
            <Container>
                <Row>
                    <Col>
                        <Skill />
                    </Col>
                    <Col>
                        <Skill />
                    </Col>
                    <Col>
                        <Skill />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Skills