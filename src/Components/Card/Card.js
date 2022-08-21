import React from "react";
import './Card.css'

const Card = ({url , alt}) =>{
    return(
        <div className="imageContainer">
            <img src={url} alt={alt}/>
        </div>
    )
}

export default Card;