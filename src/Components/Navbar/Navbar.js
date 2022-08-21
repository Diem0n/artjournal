import React from "react";
import "./NavBar.css"
import search from "../icons/search.svg"
const Navbar = ({state , handleClick}) => {
    return (
        <nav className="Navbar">
            <li onClick={()=>
            {
                state === 'opened' ? handleClick('closed'  , 'search'):handleClick('opened' , 'search')
            }
            } 
            className="NavbarItem">
                <img src={search} alt='search icon' />
            </li>
            <li onClick={()=>
            {
                state === 'opened' ? handleClick('closed' , 'profile'):handleClick('opened' , 'profile')
            }
            }   
             className="NavbarItem">
                <img alt='profile icon' src="https://robohash.org/200x200?set=set5" />
            </li>
        </nav>
    )
}

export default Navbar;