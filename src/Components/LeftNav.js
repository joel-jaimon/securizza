import React from 'react'
import "../Style/LeftNav/LeftNav.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const LeftNav = () => {
    return (
        <div className="leftNav">
            <span className="asd vv">Hello, Bruce</span>
            <p className="vv">Getting Started!</p>
            <p className="vv">Great to have you onboard! Lorem ipsum dotor sit amet
            </p>
            <div className="o-setup">
            <p className="dsa vv"><p>ONBOARDING SETUP</p>
            <div>
            <IconButton>
            <ExpandMoreIcon className="expand"/>
            </IconButton>
            </div>
            </p>
            <p className="slot vv">
                <p>Add Users</p>
                <span><CheckCircleIcon className="checked"/></span>
            </p>
            <p className="slot vv">
                <p>Install Software</p>
                <span>1 of 2</span>
            </p>
            <p className="slot vv">
                <p>Product walkthrough</p>
            </p>
            </div>
            
        </div>
    )
}

export default LeftNav
