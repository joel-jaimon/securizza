import React from 'react'
import "../Style/Header/Header.css"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import avatar from "../Style/Header/user-pic@3x.jpg"
import logo from "../Style/Header/Capture.PNG"
import { Avatar, Badge } from '@material-ui/core';


const Header = () => {
    return (
        <div className="header">
           <div className="logo">
            <img src={logo} alt="LOGO" />
           </div>
           <div className="user__panel">
            <span className="vvv">
            <div className="search">
                <SearchIcon className="search-icon" />
                <input type="text" placeholder="Search e.g. hosts, configurations" />
            </div>
            </span>
            <div>
            <div className="asdd">
            <Badge badgeContent={1} color="error">
                <NotificationsNoneIcon className="notfi" />
            </Badge>
            </div>    
            </div>
            <span>
                <Avatar src={avatar} /></span>
            </div> 
        </div>
    )
}

export default Header
