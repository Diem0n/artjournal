import React from "react";
import "./NavBar.css"
import search from "../icons/search.svg"
const Navbar = ({context, state , handleClick}) => {
    return (
        <nav className={context !==''?"Navbar sendBack" :'Navbar'}>
            <div onClick={()=>
            {
                state === 'opened' ? handleClick('closed'  , 'search'):handleClick('opened' , 'search')
            }
            } 
            className="NavbarItem">
                <img src={search} alt='search icon' />
            </div>
            <div onClick={()=>
            {
                state === 'opened' ? handleClick('closed' , 'profile'):handleClick('opened' , 'profile')
            }
            }   
             className="NavbarItem">
                <img  className="profile" alt='profile icon' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
        </nav>
    )
}

export default Navbar;