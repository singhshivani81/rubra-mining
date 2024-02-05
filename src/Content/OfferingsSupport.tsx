import React, { useEffect, useState } from 'react';
import lead from './lead.png';
import operation from './Operation.png';
import autonomy from './Autonomy.png';
import pit from './pit.png';
import process from './process.png';
import project from './project.png';
import './OfferingsSupport.scss';
import Footer from '../Theme/Footer';
import { useNavigate } from "react-router-dom";
import { AUTONOMY, CONTACT_US, LAPTOP, MOBILE, OPERATION, PIT, PROCESS, PRODUCTS_SERVICES_URI, PROJECT_MANAGEMENT, SAFETY} from '../Constants';

const OfferingsSupport = (props: any) => { 
    const navigate = useNavigate();

    let screen = props.screen == MOBILE ? MOBILE : props.screen == LAPTOP ? LAPTOP : MOBILE; 
    
    const navigateToServices = (data : string) => {        
        const sectionData = { sec: data  , screen : props.screen};
        navigate("/services", { state: sectionData  });
    };
    return (<>
    { props.screen == LAPTOP ? 
        <div style={{"overflow" : "hidden"}}>
            <div className='heading'><h2 style={{"marginBottom":"0"}}>Our Services include:</h2></div>
            <div className='subheading'>End-to-end support in mining leadership, operations and technical domains:</div>
            <div className="box-colour bx-left" >
                        <img src={lead} className="image-support" style={{ "bottom": "2rem" }} />
                        <span className="bx-txt "><h2 >Safety Culture Support</h2></span>
                        <div><span className="bx-txt  txt-msg"><p className="txt-msg">Transform safety culture with specialized training for impactful interactions.</p></span></div>
                        <button className="btn" onClick={() => navigateToServices(SAFETY)}>Learn More</button>
                    </div>
            <div >
            <div className="box-colour bx-left" >
                        <img src={operation} className="image-support" style={{ "bottom": "2rem" }} />
                        <span className="bx-txt"><h2>Operational Support</h2></span>
                        <div><span className="bx-txt  txt-msg"><p className="txt-msg">
                            Enhance mine operations with advanced analytics and coaching for<br /> sustainable improvements.</p></span></div>
                        <button className="btn" onClick={() => navigateToServices(OPERATION)}>Learn More</button>
                    </div>
                    <div className="box-colour bx-left" >
                        <img src={autonomy} className="image-support" style={{ "bottom": "2rem" }} />
                        <span className="bx-txt"><h2>Autonomy and Analytics Support</h2></span>
                        <div><span className="bx-txt  txt-msg"><p className="txt-msg">Revolutionize fleet operations with expertise in autonomous <br />
                            hauling, optimizing efficiency and performance.</p></span></div>
                        <button className="btn" onClick={() => navigateToServices(AUTONOMY)}>Learn More</button>
                    </div>
                    <div className="box-colour bx-left" >
                        <img src={pit} className="image-support" style={{ "bottom": "2rem" }} />
                        <span className="bx-txt"><h2>Pit Optimisation, Planning and Scheduling</h2></span>
                        <div><span className="bx-txt  txt-msg"><p className="txt-msg">Maximize economic value through expert ore body comprehension,<br />
                            shaping practical mine designs aligned with business goals.</p></span></div>
                        <button className="btn" onClick={() => navigateToServices(PIT)}>Learn More</button>
                    </div>
                    <div className="box-colour bx-left" >
                        <img src={process} className="image-support" style={{ "bottom": "2rem" }} />
                        <span className="bx-txt"><h2>Process and System Design Support</h2></span>
                        <div><span className="bx-txt  txt-msg"><p className="txt-msg">Ignite operational excellence with precise solutions, reshaping <br />
                            efficiency and innovation.</p>
                        </span></div>
                        <button className="btn" onClick={() => navigateToServices(PROCESS)}>Learn More</button>
                    </div>
                    <div className="box-colour bx-left" >
                        <img src={project} className="image-support" style={{ "bottom": "2rem" }} />
                        <span className="bx-txt"><h2>Project Management </h2></span>
                        <div><span className="bx-txt  "><p className="txt-msg">Empower projects with end-to-end support for on-time, on-budget delivery <br />
                            and effective problem-solving</p>
                        </span></div>
                        <button className="btn" onClick={() => navigateToServices(PROJECT_MANAGEMENT)}>Learn More</button>
                    </div>     
                    <div id={CONTACT_US} ><Footer screen={screen} /></div>                   
            </div> 
        </div > :
        <>
        <div style={{"overflow" : "hidden"}}>
            <div className='heading'><h2 style={{"marginBottom":"0"}}>Our Services include:</h2></div>
            <div className='subheading'>End-to-end support in mining leadership, operations and technical domains:</div>
            <div className="box-colour-mobile bx-left-mobile" >
                       {/*  <img src={lead} className="image-support-mobile" style={{ "bottom": "2rem" }} /> */}
                        <span className="bx-txt "><h2 >Safety Culture Support</h2></span>
                        <div><span className="bx-txt  txt-msg"><p className="txt-msg">Transform safety culture with specialized<br/> training for impactful interactions.</p></span></div>
                        <button className="btn" onClick={() => navigateToServices(SAFETY)}>Learn More</button>
                    </div>
            <div >
            <div className="box-colour-mobile bx-left-mobile" >
                       {/*  <img src={operation} className="image-support-mobile" style={{ "bottom": "2rem" }} /> */}
                        <span className="bx-txt"><h2>Operational Support</h2></span>
                        <div><span className="bx-txt  txt-msg-mobile"><p className="txt-msg">
                            Enhance mine operations with advanced <br />analytics and coaching for sustainable<br /> improvements.</p></span></div>
                        <button className="btn" onClick={() => navigateToServices(OPERATION)}>Learn More</button>
                    </div>
                    <div className="box-colour-mobile bx-left-mobile" >
                       {/*  <img src={autonomy} className="image-support-mobile" style={{ "bottom": "2rem" }} /> */}
                        <span className="bx-txt"><h2>Autonomy and Analytics<br /> Support</h2></span>
                        <div><span className="bx-txt  txt-msg"><p className="txt-msg">Revolutionize fleet operations with expertise<br /> in autonomous 
                            hauling, optimizing<br /> efficiency and performance.</p></span></div>
                        <button className="btn" onClick={() => navigateToServices(AUTONOMY)}>Learn More</button>
                    </div>
                    <div className="box-colour-mobile bx-left-mobile" >
                       {/*  <img src={pit} className="image-support-mobile" style={{ "bottom": "2rem" }} /> */}
                        <span className="bx-txt"><h2>Pit Optimisation, Planning <br />and Scheduling</h2></span>
                        <div><span className="bx-txt  txt-msg"><p className="txt-msg">Maximize economic value through expert<br /> ore body comprehension,
                            shaping practical<br /> mine designs aligned with business goals.</p></span></div>
                        <button className="btn" onClick={() => navigateToServices(PIT)}>Learn More</button>
                    </div>
                    <div className="box-colour-mobile bx-left-mobile" >
                       {/*  <img src={process} className="image-support-mobile" style={{ "bottom": "2rem" }} /> */}
                        <span className="bx-txt"><h2>Process and System <br />Design Support</h2></span>
                        <div><span className="bx-txt  txt-msg"><p className="txt-msg">Ignite operational excellence with  precise <br /> solutions, reshaping
                            efficiency and <br/>innovation.</p>
                        </span></div>
                        <button className="btn" onClick={() => navigateToServices(PROCESS)}>Learn More</button>
                    </div>
                    <div className="box-colour-mobile bx-left-mobile" >
                        <span className="bx-txt"><h2>Project Management </h2></span>
                        <div><span className="bx-txt  "><p className="txt-msg">Empower projects with end-to-end support <br/>for on-time, on-budget delivery 
                            and <br/>effective problem-solving</p>
                        </span></div>
                        <button className="btn" onClick={() => navigateToServices(PROJECT_MANAGEMENT)}>Learn More</button>
                    </div>     
                    <div id={CONTACT_US} ><Footer screen={screen} /></div>                   
            </div> 
        </div > </> }
    </>);
}

export default OfferingsSupport;