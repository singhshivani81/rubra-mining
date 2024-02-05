import React, { useEffect } from 'react';
import './GoalGuidingPrinciples.scss';
import cover from './cover.jpg';
import OfferingsSupport from './OfferingsSupport';
import Footer from '../Theme/Footer';
import { HOME_URI, LAPTOP, MOBILE } from '../Constants';
import { useLocation } from 'react-router-dom';

const GoalGuidingPrinciples = (props: any) => {
    useEffect(() => {
        scrollToElement(HOME_URI);
      }, []);

      let screen = props.screen == MOBILE ? MOBILE : props.screen == LAPTOP ? LAPTOP : MOBILE; 
    
    const scrollToElement = (data : any) => {
        const element = document.getElementById(data);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

    return (<>
    {props.screen == MOBILE ? <><div id={HOME_URI}><img src={cover} style={{
            "width": "50rem", "height": "12rem",
            "overflow": "hidden", "left": "-4rem", "position": "relative"
        }} /></div><div style={{ "bottom": "-3rem", "position": "relative", "height": "12rem", "backgroundColor": "lightgray" }}>
                <div style={{ "display": "inline", "color": "maroon", "fontSize": "large" }}>Rubra Mining Services</div>
                <div style={{ "display": "inline", "fontSize": "large" }}> endeavours to be at the forefront of the mining industry,
                    offering <br />comprehensive solutions. Our seasoned team of professionals brings forth a
                    wealth of <br />multidisciplinary experience in various commodities such as Coal, Iron Ore, Copper, and Gold.</div></div></>
         :
          <><div id={HOME_URI}><img src={cover} style={{ "width": "120rem", "overflow": "hidden" }} /></div><div style={{ "bottom": "-3rem", "position": "relative", "height": "8rem", "backgroundColor": "lightgray" }}>
                <div style={{ "display": "inline", "color": "maroon", "fontSize": "xxx-large" }}>Rubra Mining Services</div>
                <div style={{ "display": "inline", "fontSize": "x-large" }}> endeavours to be at the forefront of the mining industry,
                    offering <br />comprehensive solutions. Our seasoned team of professionals brings forth a
                    wealth of <br />multidisciplinary experience in various commodities such as Coal, Iron Ore, Copper, and Gold.</div></div></>}
        <div ><OfferingsSupport screen={screen} /></div>        
    </>);
}

export default GoalGuidingPrinciples;