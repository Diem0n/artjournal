import React from "react";
import './Profile.css'
import logouticon from '../icons/logout.svg'
const Profile = ()=>{
    return(
        <div className="profileCard">
            <div className="imageContainerProfile">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="profile" />
            </div>
            <h1 className="name">Crysta Pritchett</h1>
            <div className="settings">
                <div className="item">
                    <h4 className="label">Notifications</h4>
                    <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                    </label>
                </div>
                <div className="item">
                    <h4 className="label">Smaller Grid</h4>
                    <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                    </label>
                </div>
                <div className="item">
                    <h4 className="label">Dark Mode</h4>
                    <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                    </label>
                </div>
                <button className="logout" > Logout <img src={logouticon} alt='pencil' /> </button>
            </div>
        </div>
    )
}
export default Profile