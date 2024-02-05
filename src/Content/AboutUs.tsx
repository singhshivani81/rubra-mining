import React, { useEffect } from 'react';
import aboutUsGoal from './about_us_goal.jpg';
import brilliance from './brilliance.jpg';
import expertise from './expertise.jpg';
import insights from './insights.jpg';
import Footer from '../Theme/Footer';
import rubra_logo from './rubra_logo.png';
import { COMPANY, CONTACT_US } from '../Constants';
import { useLocation } from 'react-router-dom';

const AboutUs = (props: any) => {
    const location = useLocation();    
    let screen = props.screen;
    useEffect(() => {
        const data = location.state;
        if(data != null){
        scrollToElement(data.sec);
    }else{
        scrollToElement(COMPANY);
    }
      }, []);

    const scrollToElement = (data : any) => {
        const element = document.getElementById(data);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    return (<>
        <div id={COMPANY}><h1>Welcome to Rubra Mining: Empowering Your Success Through Unmatched Efficiency</h1></div>
        <div>
            <div><h3>About Us</h3></div>
            <p>Welcome to Rubra Mining Services. Our commitment is to redefine the standard, offering
                tailor-made, comprehensive solutions driven by a seasoned team of professionals with
                unparalleled expertise in commodities such as Coal, Iron Ore, Copper, and Gold.</p>
        </div>
        <div>
            <div><h3>Our Goal</h3></div>
            <div><img src={aboutUsGoal} width={400} height={200}  /></div>
            <p>Supporting clients in making complex, value-chain-wide decisions at speed to deliver optimal outcomes.</p>
            <div><h4>Guiding Values</h4></div>
            <p >•	CAPABILITY FOCUS: Crafting an optimized value proposition across all planning horizons for sustainable business goals.<br />
                •	INTEGRATED: Providing a holistic suite of mining services under one roof.<br />
                •	AGILE & INNOVATIVE: Embracing agility and prioritizing speed in innovation.<br />
                •	INTELLIGENT: Infusing decision-making steps into operational routines for swift, optimized decisions.<br />
                •	CUSTOMER-CENTRIC: Leveraging our expertise, tools, and resources for a meaningful impact and heightened customer satisfaction.
            </p>
        </div>
        <div>
            <div><h2>Solutions</h2></div>
            <div><h3>Holistic Mining Expertise</h3></div>
            <p>
                "We deliver not just solutions but holistic mining expertise, uniquely positioned to offer comprehensive support in mining leadership, operations, and technical proficiency."
            </p>
        </div>
        <div>
            <div><h3>Operational Brilliance</h3></div>
            <div><img src={brilliance} width={400} height={200}  /></div>
            <p>
                Robust Technical and Operational Prowess: Experience the benefits of our robust mining technical and operational prowess, fortified by extensive hands-on experience across various functions.
            </p>
            <p>Operational Excellence Support: We actively support operational teams in delivering heightened safety, production, and productivity, ensuring a holistic enhancement of your mining operations.</p>
            <p>Strategic Guidance for Execution: Our role extends to guiding technical teams in operationalizing plans across various planning horizons, ensuring seamless execution and alignment with long-term business objectives.</p>
        </div>
        <div>
            <div><h3>Industry Insights and Collaboration</h3></div>
            <div><img src={insights} width={400} height={200}  /></div>
            <p>Industry Insights and Resources: Leveraging an extensive network in the industry, we draw on invaluable insights, resources, and solutions.</p>
            <p>Seamless Integration and Collaboration: We seamlessly integrate the work of operational and technical teams, fostering collaboration that enhances efficiency and effectiveness in your mining operations.</p>
        </div>
        <div>
            <div><h3>Autonomy Expertise</h3></div>
            <div><img src={expertise} width={400} height={200}  /></div>
            <p>Autonomy Expertise with Proven Results: Our team possesses extensive autonomy experience, with proven success in operating both CAT and Komatsu systems.</p>
        </div>
        <div>
            <div><h2>Why Choose Rubra Mining?</h2></div>
            <p>At Rubra Mining Services, we transcend the conventional, going beyond service provision to become your strategic partners in achieving operational excellence and unparalleled growth in the dynamic mining industry. Choose us to experience the seamless integration of expertise, innovation, and results-driven solutions that will propel your mining operations to new heights.</p>
        </div>
        <div><div style={{"paddingBottom" : "5rem"}}><img src={rubra_logo} width={200} height={200}  /></div></div>
       <div id={CONTACT_US}><Footer screen={screen}/></div>
    </>);

}

export default AboutUs;