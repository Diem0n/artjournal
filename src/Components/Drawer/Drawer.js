import React from "react";
import DrawerNav from  '../DrawerNav/DrawerNav'
import './Drawer.css'

const Drawer = ({state , handleClick , context}) =>{
    return(
        <div className=
            {
                state==='opened'?"drawer opened":"drawer"
            }
        >
            {state  === 'opened'?
            <DrawerNav handleClick={handleClick}/>: null
            }
            {context===''}
            </div>
    )
}
export default Drawer;