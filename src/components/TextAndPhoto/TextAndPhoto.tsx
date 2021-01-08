import React from "react"
import TextAndPhotoStyle from "./TextAndPhoto.module.scss"
import ProfilePic from "../../images/ProfilePic.png"

const TextAndPhoto = () => {
    return(
        <section className={TextAndPhotoStyle.TextAndPhoto}>
            <div className={TextAndPhotoStyle.ProfilePic}>
                <img src={ProfilePic} alt=""/>
            </div>
        </section>
    )
}
export default TextAndPhoto