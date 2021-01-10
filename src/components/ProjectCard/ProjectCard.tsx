import React from "react";
import ProjectCardStyle from "./ProjectCard.module.scss"

const ProjectCard = ({ id, title, className }) => {
    return(
        <div id={id}className={`${ProjectCardStyle.ProjectCard} ${className}`}>
            <div className={ProjectCardStyle.Title}>{title}</div> 
            <div className={ProjectCardStyle.ProjectContainer}>
                
            </div> 
        </div>
    )
}
export default ProjectCard