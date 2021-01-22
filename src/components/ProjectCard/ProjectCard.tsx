import React from "react";
import { Button } from "react-bootstrap";
import ProjectCardStyle from "./ProjectCard.module.scss"

import AOS from "aos"
import 'aos/dist/aos.css'; 

setTimeout(() => {
    AOS.init({
        duration: 1000
    })
}, 1000) 

const ProjectCard = ({ id, title, className, className2, description, className3, className4, className5, aos }) => {
    return(
        <div id={id} data-aos={aos} data-aos-duration="1000" data-aos-once="true" className={`${ProjectCardStyle.ProjectCard} ${className}`}>
            <div className={`${ProjectCardStyle.TextContainer} ${className4}`}>
                <div className={`${ProjectCardStyle.Title} ${className2}`}>{title}
                    <div className={ProjectCardStyle.DescriptionContainer}>
                        <div className={`${ProjectCardStyle.Description} ${className3}`}>{description}</div>
                    </div> 
                    <Button className={`${ProjectCardStyle.Button} ${className5}`}>Website ↗</Button>
                </div> 
                
            </div>
            
            
        </div>
    )
}
export default ProjectCard