import React, { useState } from 'react'
import "../Style/Main/Main.css"
import link from "../Style/Main/noun-link-1880307@2x.png"
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import MobileStepper from '@material-ui/core/MobileStepper';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

const Main = () => {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    return (
        <div className="main__contents">
            <div className="sub-head">
                <p>INSTALL SOFTWARES</p>
                <p className="avira">I'll do this later</p>
            </div>
            {activeStep === 0? 
            <>
            <h1>Get Securizza installed on your hosts</h1>
            <p>Securizza uses an efficient and powerful agent to monitor users and services activity and alert in realtime when suspicious activity is happening. Follow the instrauctions below</p>
            <div className="script-todo-1">
                <div className="na">
                <img src={link} alt="link" />
                <span>
                    <strong>Installation Script</strong>
                    <p>Run this installation script on your device you wish to monitor</p>
                </span>
                </div>
                <button className="copy-link">
                    <p className><FileCopyOutlinedIcon/> </p>
                    <p>Copy link</p>
                </button>
            </div> </>: (
                activeStep === 1?
                <>
            <h1>Get Securizza installed on docker containers</h1>
            <p>Securizza uses an efficient and powerful agent to monitor users and services activity and alert in realtime when suspicious activity is happening. Follow the instrauctions below</p>
            <p>Fill in the details of the hosts you wish to setup the installer on</p>
            <div className="script-todo-1">
                <div className="na">
                    <span className="add-host">
                        <p className="bhv">Add Host</p>
                        <select><option>Select Category</option></select>
                        <input placeholder="Type host details" />
                        <DoneIcon className="asdv"/>
                        <CloseIcon className="asdv"/>
                    </span>
                </div>
            </div>
             </> : ""
            )}
            <small>Want to install manually? See the <span className="avira">installation guide pdf</span></small>
            <div className="foot">
            <button className="step-prog">
                <div className="nav-prog">
            <p>Step {activeStep + 1} of 3</p>
            <MobileStepper
                variant="dots"
                steps={3}
                position="static"
                activeStep={activeStep}
                className="stepper"
                /> 
                 </div>
            </button>
            <button className="bck" onClick={() => {activeStep <= 0? console.log("min") : handleBack()}}>
            Go back
            </button>
            <button className="nxt" onClick={() => {activeStep >= 2? console.log("max") : handleNext()}}>
            Next
            </button>
            </div>
        </div>
    )
}

export default Main
