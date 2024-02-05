import React from 'react';
import './Footer.scss';
import logo from './logo_transparent.png';
import linkedIn from './linkedin.png';
import { useNavigate } from 'react-router-dom';
import { COMPANY, LAPTOP, MOBILE, SAFETY } from '../Constants';

const Footer = (props: any) => {
    const navigate = useNavigate();

    let screen = props.screen == MOBILE ? MOBILE : props.screen == LAPTOP ? LAPTOP : MOBILE; 
    const navigateToServices = () => {      
        let screen = props.screen == LAPTOP ? LAPTOP : MOBILE ;  
        const sectionData = { sec: SAFETY  , screen : screen};
        navigate("/services", { state: sectionData  });
    };

    const navigateToAboutUs = () => {   
        const sectionData = { sec: COMPANY  , screen : screen};     
        navigate("/aboutUs" ,  { state: sectionData  });
    }; 

    const navigateToHome = () => {        
        const sectionData = { sec: "home"  , screen : screen};
        navigate("/home" , { state: sectionData  });
    };  

    return (<>
    {screen != MOBILE ?
        <div className='footer'>
            {/*  <h3>Contact Us</h3> */}
            <div><img src={logo} className=" topleft image" style={{"height":"5rem" , "width" : "5rem"}}/></div>
            <div className="row1">
                <div style={{"cursor":"pointer "}} onClick={navigateToServices}>Products and Services</div>
                <div style={{ "position": "relative", "top": "2rem", "cursor":"pointer " }}
                onClick={navigateToAboutUs} >About Company</div>
            </div>
            <div style={{"paddingLeft" : "12rem"}}>Contact Details:</div>
            <div className="row2">               
                <div>Rabi.singh@rubramining.com</div>
                <div style={{ "position": "relative", "top": "2rem" }}>+61 408903654</div>
            </div>
            <div><a href="https://www.linkedin.com/company/rubra-mining-services-pty-ltd"><img src={linkedIn} className="linkedIn" /></a></div>
        </div> : 
        //MOBILE
        <div className="footer-mobile">
        <div style={{"paddingBottom" : "2rem"}}><img src={logo} height={200} width={200}/></div>
        <div  style={{"paddingBottom" : "2rem"}}>
            <div style={{"cursor":"pointer " , "paddingBottom" : "1rem"}} onClick={navigateToHome} >Rubra Mining</div>
            <div style={{"cursor":"pointer " , "paddingBottom" : "1rem"}} onClick={navigateToServices}>Products and Services</div>
            <div style={{"cursor":"pointer "}} onClick={navigateToAboutUs} >About Company</div>
        </div>
        <div style={{"paddingBottom" : "2rem"}}>
            <div style={{"paddingBottom" : "1rem"}}>Contact Details:</div>
            <div style={{"paddingBottom" : "1rem"}}>Email : Rabi.singh@rubramining.com</div>
            <div>Ph:  +61 408903654</div>
            <div style={{"paddingBottom" : "1rem"}}>{props.screen}</div>
        </div>
       <div ><a href="https://www.linkedin.com/company/rubra-mining-services-pty-ltd"><img src={linkedIn} className="linkedIn-mobile" /></a></div>
    </div>}
    </>)
}

export default Footer;