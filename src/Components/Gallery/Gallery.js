import React from "react";
import './Gallery.css'
import CardList from '../CardList/CardList'
const Gallery = ({context})=>{
    return(
      <div className={
        context === ''?"Gallery":"Gallery sendBack"}>
        <CardList />
      </div>
    )
}

export default Gallery;