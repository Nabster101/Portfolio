import React from "react"
import SkillCardStyle from "./SkillsCard.module.scss"


import AOS from "aos"
import 'aos/dist/aos.css'; 

setTimeout(() => {
    AOS.init({
        duration: 1000
    })
}, 1000) 


const SkillsCard = ({ skills, title, className, id, aos}) => {        
    return(
        <div id={id} data-aos={aos} data-aos-duration="1000" data-aos-once="true" className={`${SkillCardStyle.SkillCard} ${className}`}>
            <div className={SkillCardStyle.Title}>{title}</div> 
            <div className={SkillCardStyle.SkillsContainer}>
                {skills
                    ? skills.map((skill, i) => (
                        <div className={SkillCardStyle.Skill} key={i}>{skill.value}</div>
                        ))
                    : null}
            </div> 
        </div>
    )
}
export default SkillsCard