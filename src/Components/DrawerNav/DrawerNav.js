import React from "react";
import close from '../icons/close.svg'
import './DrawerNav.css'
const DrawerNav = ({handleClick}) =>{
    return(
        <div className="DrawerNav">
            <img 
            onClick={
                ()=>{
                    handleClick('closed' , '')
                }
            }
             src={close} alt='close icon' />
        </div>
    )
}

export default DrawerNav;