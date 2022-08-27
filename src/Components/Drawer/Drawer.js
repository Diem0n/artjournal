import React from "react";
import DrawerNav from  '../DrawerNav/DrawerNav'
import './Drawer.css'
import Add from '../Add/Add'
import Search from '../Search/Search'
import Profile from '../Profile/Profile'
const Drawer = ({state , handleClick , context}) =>{
    return(
        <div className=
            {
                state==='opened'?"drawer opened":"drawer"
            }
        >
            {state  === 'opened'?
            <DrawerNav handleClick={handleClick}/>:null
            }
            {
            context==='profile'? <Profile />:
            context === 'add'?
            <Add/>
            : context === 'search'?
            <Search />
            : <p style={{fontSize : "2rem" , padding:"2rem" }}>oops! shit aint working</p>
            }
           
            </div>
    )
}
export default Drawer;