import React from "react";
import './Drawer.css'

const Drawer = ({state, context}) =>{
    return(
        <div className=
            {
                state==='opened'?"drawer opened":"drawer"
            }
        >
            <h1 style={{
                display : "flex",
                alignItems : "center", 
                justifyItems : "center", 
            }}>{context}</h1>
        </div>
    )
}
export default Drawer;