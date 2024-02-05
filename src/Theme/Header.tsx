import React from 'react';
import './Header.scss';
import linkedIn from './linkedin.png';
import { useNavigate } from 'react-router-dom';
import { ABOUT_HOME_URI, CONTACT_US, HOME_URI, LAPTOP, MOBILE, PRODUCTS_SERVICES_URI } from '../Constants';

const Header = (props: any) => {
    const navigate = useNavigate();

    let screen = props.screen == MOBILE ? MOBILE : props.screen == LAPTOP ? LAPTOP : MOBILE; 

    const navigateToCompany = () => {
        navigate(ABOUT_HOME_URI);
    };

    const navigateToHome = () => {
        navigate(HOME_URI);
    };

    const navigateToServices = () => {
        navigate(PRODUCTS_SERVICES_URI);
    };

    const scrollToElement = () => {
        const element = document.getElementById(CONTACT_US);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

    return (<>
        <div className="header container">
            <div><img src={props.logo} className=" topleft image" style={{ "cursor": "pointer" }} onClick={navigateToHome} /></div>
            <div><img src={props.rubra} className="rubratxt" /></div>
            <div className="label-container">
                <div className="label1" onClick={navigateToServices}>Products and Services</div>
                <div className="label2" onClick={navigateToCompany}>Company</div>
                <div className="label3"><a href="https://www.linkedin.com/company/rubra-mining-services-pty-ltd"><img src={linkedIn} height={30} width={30}/></a></div>
                <div className="button" onClick={scrollToElement}>Contact US</div>
            </div>

        </div>
        {/* <div className="cover"><img src={props.cover} /></div> */}
    </>);

}

export default Header;