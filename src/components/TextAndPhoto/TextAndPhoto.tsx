import React from "react"
import TextAndPhotoStyle from "./TextAndPhoto.module.scss"
import ProfilePic from "../../images/ProfilePic.png"
import { Container } from "react-bootstrap"
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface Props{
    id: String
}

import AOS from 'aos';
import 'aos/dist/aos.css'; 

setTimeout(() => {
    AOS.init({
        duration: 1000
    })
}, 1000) 

const TextAndPhoto = (props:Props) => {
    return(
        <section id={props.id} className={TextAndPhotoStyle.TextAndPhoto}>
            <Container className={TextAndPhotoStyle.Container}>
                <div className={TextAndPhotoStyle.ProfilePicContainer}>
                    <img className={TextAndPhotoStyle.ProfilePic} src={ProfilePic} alt=""/>
                </div>
                <div className={TextAndPhotoStyle.TypeWriterName}>
                    <h1 className={TextAndPhotoStyle.TypeWriterNameText}>Hello my name is Pietro!</h1>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1600" data-aos-once="false" className={TextAndPhotoStyle.DescriptionContainer}>
                    <span className={TextAndPhotoStyle.Description}>I'm Pietro Costanzi Fantini, a Frontend developer and Graphics designer. I'm a young, dynamic and resourceful teen open to any kind of life/working experience and eager to prove his worth!</span>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1600" data-aos-once="false" className={TextAndPhotoStyle.IconContainer}>
                    <Link to="Skills" spy={true} smooth={true} duration={300} offset={-200}>
                        <FontAwesomeIcon id={TextAndPhotoStyle.Icon} icon={faArrowDown}/>
                    </Link>
                </div>
                
            </Container>
        </section>
    )
}
export default TextAndPhoto