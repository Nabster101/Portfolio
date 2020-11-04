import React from "react";
import "./Presentation.scss"
import {graphql, useStaticQuery} from "gatsby";

const Presentation = () =>{
    const query = useStaticQuery(graphql`
        query personal {
            datoCmsPresentation {
                roles
                description
                selfie {
                    url
                }
                icon {
                    url
                }
                hello
                presentation
            }
        }                
    `)

    return(
        <div className="presentation-container">
            <div className="roles-container">{query.datoCmsPresentation.roles}</div>
            <div className="description-container">{query.datoCmsPresentation.description}</div>
            <img className="selfie-container" src={query.datoCmsPresentation.selfie.url} />
            <img className="icon-container" src={query.datoCmsPresentation.icon.url} />
            <div className="separator-container">
                <div className="hello-container">{query.datoCmsPresentation.hello}</div>
                <div className="secondary-presentation-container">{query.datoCmsPresentation.presentation}</div>
            </div>
        </div>
    )
}
export default Presentation