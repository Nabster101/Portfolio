import React from "react";
import "./Skill.scss"
import { graphql, useStaticQuery } from "gatsby";

const Skill = () =>{
    const query = useStaticQuery(graphql`
        query skills {
            datoCmsSkill {
                icon {
                    url
                }
                title
                description
                top
                mid
                bott
                bottom
            }
        }
    `)
    return(
        <div>
            <img className="icon-container" src={query.datoCmsSkill.icon.url} />
            <div className="title-container">{query.datoCmsSkill.title}</div>
            <div className="description-container">{query.datoCmsSkill.description}</div>
            <div className="topsubtitle-container">{query.datoCmsSkill.top}</div>
            <div className="midskills-container">{query.datoCmsSkill.mid}</div>
            <div className="bottomsubtitle-container">{query.datoCmsSkill.bott}</div>
            <div className="bottomskills-container">{query.datoCmsSkill.bottom}</div>
        </div>
    )
}

export default Skill