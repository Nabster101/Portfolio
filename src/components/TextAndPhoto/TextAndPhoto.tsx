import React from "react"
import TextAndPhotoStyle from "./TextAndPhoto.module.scss"
import ProfilePic from "../../images/ProfilePic.png"
import { Container } from "react-bootstrap"
import Icon from "../../images/Navbar-Icon.png"

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const TextAndPhoto = () => {
    return(
        <section className={TextAndPhotoStyle.TextAndPhoto}>
            <Container className={TextAndPhotoStyle.Container}>
                <div className={TextAndPhotoStyle.ProfilePicContainer}>
                    <img className={TextAndPhotoStyle.ProfilePic} src={ProfilePic} alt=""/>
                </div>
                <div className={TextAndPhotoStyle.TypeWriterName}>
                    <h1 className={TextAndPhotoStyle.TypeWriterNameText}>Hello my name is Pietro!</h1>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1600" data-aos-once="true" className={TextAndPhotoStyle.DescriptionContainer}>
                    <span className={TextAndPhotoStyle.Description}>I'm Pietro Costanzi Fantini, a Frontend developer and Graphics designer. I'm a young, dynamic and resourceful teen open to any kind of life/working experience and eager to prove his worth!</span>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1600" data-aos-once="true" className={TextAndPhotoStyle.IconContainer}>
                    <img className={TextAndPhotoStyle.Icon} src={Icon} alt=""/>
                </div>
            </Container>
        </section>
    )
}
export default TextAndPhoto