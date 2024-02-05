import React, { useEffect } from 'react';
import './ProductsServices.scss';
import safety from './Safety.jpeg';
import pit_ser from './pitService.png';
import proj from './proj.png';
import operational from './operational.png';
import process_ser from './process_ser.jpg';
import autonomous from './autonomous.png';
import { AUTONOMY, CONTACT_US, LAPTOP, OPERATION, OUR_SERVICES, PIT, PROCESS, PROJECT_MANAGEMENT, SAFETY } from '../Constants';
import { useLocation } from "react-router-dom";
import Footer from '../Theme/Footer';

const ProductsServices = (props: any) => {
    const location = useLocation();   
    let screen = props.screen; 
    useEffect(() => {
        const data = location.state;
        if(data != null){
        scrollToElement(data.sec);
    }else{
        scrollToElement(OUR_SERVICES);
    }
      }, []);

    const scrollToElement = (data : any) => {
        const element = document.getElementById(data);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    return (<>
     {props.screen == LAPTOP || location.state.screen == LAPTOP ?
     <>
        <div id={OUR_SERVICES}><h1>Our services include:</h1></div>
        <div id = {SAFETY} style={{"backgroundColor" : "beige"}}>
        <div style={{ "textAlign": "left" , "paddingLeft" : "2rem" }}>
            <div className="safety-heading "><h3>Safety Culture Support: On the Ground Expertise</h3></div>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we are dedicated to fostering a robust safety culture within your operations.<br />
                Our comprehensive Safety Culture Support services encompass:</p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>• On-the-Ground Support, Training, and Coaching:</h4><br />
            <div style={{"float" : "right" , "paddingRight":"2rem"}}>
                <img src={safety} width={700} height={500}  />
        </div>    
            <div style={{"paddingLeft" : "3rem"}}>
                •	Effective Safety Interactions<br />
                •	Critical Control Verifications<br />
                •	Successful Pre-Start Meetings<br />
                •	Leaders' Engagement in the Field<br />
                •	Risk Assessments and Development of Controls<br />
                </div>                        
                <h4 style={{"marginBottom":"0"}}>  •	Incident Management and Safety Plan Implementation:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Conducting/supporting incident investigations with <br/>follow-up actions<br />
                •	Supporting the development and implementation of <br/> safety management plans<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Statutory Support Coverage:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Providing coverage for mine leadership as Quarry Manager/Senior<br/> Site Executive<br /></div>
            </p>

            <div style={{ "textAlign": "left" }}><h3>Proven Success in Safety:</h3></div>
            <p style={{ "textAlign": "left" }}>Our track record includes substantial contributions to safety initiatives and notable achievements, such as:</p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>•	Large Gold Mine:</h4>
            <div style={{"paddingLeft" : "3rem"}}>
                •	Achieved improved safety performance (AIFR, LTI)<br/>
                •	Recorded significant reduction in significant potential incidents for managed opeartions
            </div>
                <h4 style={{"marginBottom":"0"}}>•	Large Iron Ore Mine Operations:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Achieved an impressive 900+ days lost time injury-free days as Ops Manager
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Leadership Recognition:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Key member of two leadership teams managing large operations, both honored with CEO Safety Awards (Copper/Gold Mine, Port Operations)</div>
                <h4 style={{"marginBottom":"0"}}> •	Critical Risk Management:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Valuable member of the Critical Risk Management deployment team at operational sites</div>
                <h4 style={{"marginBottom":"0"}}>  •	Employee Engagement: </h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Significantly improved Employee Net Promoter Score (eNPS) for managed teams and operations</div>
            </p>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we are committed to creating a safety-centric environment through hands-on support, training, and a proven track record of safety excellence.</p>
        </div>  
        </div>  

        {/* Operation Support  */}  


        <div id={OPERATION} style={{"backgroundColor" : "white" , "textAlign": "initial"}}>
        <div style={{ "textAlign": "initial" , "paddingRight" : "2rem" }}>
            <div className="safety-heading "><h3>Operational Support: Enhancing Operational Excellence</h3></div>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, our Operational Support services employ advanced analytics and technical expertise to thoroughly examine every facet of mine operations throughout the value chain. We leverage these insights to pinpoint real improvements, achieving excellence in performance.</p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h3 style={{"marginBottom":"0"}}>Key Offerings:</h3><br />
            <div style={{"float" : "left" , "paddingLeft":"2rem", "paddingRight":"3rem"}}>
                <img src={operational} width={700} height={500}  />
        </div>    
            <div style={{"paddingLeft" : "3rem"}}>
                <h4>•	Coaching Operations Leaders:</h4><br />
                •	Provide coaching to operations leaders for a deeper technical understanding of mine operations.<br />
                •	Ensure mine plan conformance through targeted guidance.<br />
                </div>                        
                <h4 style={{"marginBottom":"0"}}>•	On-Site Partnering Process:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Undertake on-site partnering to unlock significant value for the mine.<br />
                •	Implement cost reduction or volume uplift programs for tangible results.<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Design Sustainable Improvement Programs:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Design processes and key performance indicators for a sustainable improvement program<br />
                •	Ensure continual enhancement of operational efficiency.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Project Management Resources:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Provide coverage and project management resources for mine operations engineering and leadership roles.<br />
                </div>
            </p>

            <div style={{ "textAlign": "initial" , "paddingLeft" : "2rem"}}><h3>Achievements in operational management:</h3></div>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}>Our track record includes substantial contributions to safety initiatives and notable achievements, such as:</p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h4 style={{"marginBottom":"0"}}>•	Tier A Gold Mine:</h4>
            <div style={{"paddingLeft" : "3rem"}}>
                •	Successfully designed and implemented daily, weekly, and monthly reconciliation processes for the mine value stream.<br/>
            </div>
                <h4 style={{"marginBottom":"0"}}>•	Capacity Utilization Focus:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Improved asset capacity utilization, achieving the best production records through debottlenecking and strategy alignment.<br/>
                •	Introduced "Theory of Constraints" at the operational level for enhanced efficiency.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Large-Scale Copper/Gold Mine:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Successfully led the Transformation workstream for the open pit mine, HME maintenance, Mine Technical Services, and Asset and Material Management</div>
                
            </p>
            <p style={{ "textAlign": "initial" , "paddingLeft" : "2rem" }}>At Rubra Mining, our Operational Support services are designed to elevate your mine operations to new heights by ensuring technical proficiency, value realization, and sustained improvement.</p>
        </div>  
        </div>   


       {/*  Autonomy and Analytics Support */}
       <div id={AUTONOMY} style={{"backgroundColor" : "beige"}}>
        <div style={{ "textAlign": "left" , "paddingLeft" : "2rem" }}>
            <div className="safety-heading "><h3>Autonomy and Analytics Support: Elevating Operational Efficiency</h3></div>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we leverage extensive expertise in autonomous hauling fleet operations, particularly with CAT MineStar and Komatsu Frontrunner systems. Our Autonomy and Analytics Support services are designed to enhance your mining operations by:</p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>•	System Optimization:</h4><br />
            <div style={{"float" : "right" , "paddingRight":"2rem"}}>
                <img src={autonomous} width={700} height={500}  />
        </div>    
            <div style={{"paddingLeft" : "3rem"}}>
                •   Identify constraints within autonomous hauling systems<br />
                •	Develop improvement plans to address constraints<br />                
                </div>                        
                <h4 style={{"marginBottom":"0"}}>•	Fleet Utilization and Efficiency Improvement:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Enhance concurrent hang/queue management<br />
                •	Minimize on-haul stoppages due to obstructions<br/>
                •	Reduce truck interchange delays<br/>
                •	Optimize hauling speed<br/>
                •	Minimize bunching and queuing<br/>
                •	Improve overall system productivity<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Mine Control System Enhancement:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Improve efficiencies of Mine Control systems and processes<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Asset Performance Improvement:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Incorporate autonomous operational data for asset maintenance and defect elimination processes<br /></div>
            </p>

            <div style={{ "textAlign": "left" }}><h3>Proven Success in managing Autonomy:</h3></div>
            <p style={{ "textAlign": "left" }}>Our commitment to excellence is demonstrated through the following career achievements:</p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>•	Large Iron Mine (180Mt TMM):</h4>
            <div style={{"paddingLeft" : "3rem"}}>
                •	Successfully managed leading utilization and productivity site with the Komatsu Frontrunner system<br/>
            </div>
                <h4 style={{"marginBottom":"0"}}>•	CAT MineStar System Implementation:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Managed one of the fastest implementations and ramp-ups of the CAT MineStar system, achieving the quickest 100Mt moved milestone.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Productivity Enhancement:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Achieved a significant improvement (10%+) in CAT MineStar utilization and productivity within 12 months through debottlenecking and system improvement.</div>
                <h4 style={{"marginBottom":"0"}}>•	Industry Collaboration:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Built strong connections with Autonomy OEMs development and Ops support senior leadership team through collaboration, product feature enhancement, and continuous improvement.</div>
                
            </p>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we are committed to optimizing your mining operations through advanced autonomy and analytics support, ensuring efficiency, productivity, and continuous improvement.</p>
        </div>  
        </div>  

        {/* Pit Optimisation, Planning and Scheduling */}

        
        <div id={PIT} style={{"backgroundColor" : "white" , "textAlign": "initial"}}>
        <div style={{ "textAlign": "initial" , "paddingRight" : "2rem" }}>
            <div className="safety-heading "><h3>Pit Optimization, Planning, and Scheduling: Maximizing Resource Value</h3></div>
            <p style={{ "textAlign": "left" }}>Welcome to Rubra Mining, where we specialize in optimizing pit design, planning, and scheduling to maximize the economic value of your resources.</p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h3 style={{"marginBottom":"0"}}>Our Approach:</h3><br />
            <div style={{"float" : "left" , "paddingLeft":"2rem", "paddingRight":"3rem"}}>
                <img src={pit_ser} width={700} height={500}  />
        </div>    
            <div style={{"paddingLeft" : "3rem"}}>
                <h4>•	Ore Body Understanding:</h4>
                •	Thoroughly understand the ore body<br />
                •	Articulate uncertainty to develop a range of pit limits.<br />
             </div>                        
                <h4 style={{"marginBottom":"0"}}> •	Practical Mine Designs and Sequencing:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Support the development of practical mine designs and sequencing.<br />
                •	Ensure safe and executable mine plans.<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Production Plan Development:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Develop production plans at all horizons.<br />
                •	Ensure alignment between the plan and business objectives.</div>
                <h4 style={{"marginBottom":"0"}}>•	Plan Reviews and Due Diligence:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Conduct plan reviews and due diligence.<br />
                •	Articulate risks and opportunities from both operational and technical viewpoints.</div>
            </p>

            <div style={{ "textAlign": "initial" , "paddingLeft" : "2rem"}}><h3>Successes in planning, scheduling and optimisation:</h3></div>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}>Our commitment to excellence is showcased through the following projects and achievements: </p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h4 style={{"marginBottom":"0"}}>•	Process-Driven Mine Planning Models:</h4>
            <div style={{"paddingLeft" : "3rem"}}>
                •	Led the development of process flow-driven mine planning models for short to long term planning to ensured scheduling is user-friendly and supports audits of mine plans.<br/>
                •	Implemented across short-term and life-of-mine plan horizons across all Pilbara operations of a large iron ore miner (14+ mine operations).
            </div>
                <h4 style={{"marginBottom":"0"}}>•	Simulation Model for Grade Conformance:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Developed a simulation model to analyze grade conformance for a group of iron ore mines blend.<br/>
                •	Ascertained the impact of non-conformances on individual mine sites on combined grade conformance.<br/>
                •	Collaborated with the marketing team on final product conformance and variability analysis.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Transition Management:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Successfully managed the transition of the long-term planning process from Resource Development to the Technical Services team.<br/>
                •	Developed and implemented a mine planning framework for 0 to 5-year planning for a group of mines in Pilbara.
                </div>                
            </p>
            <p style={{ "textAlign": "initial" , "paddingLeft" : "2rem" }}>At Rubra Mining, we are dedicated to optimizing your mining operations through innovative pit optimization, planning, and scheduling, ensuring the maximization of your resource value.</p>
        </div>  
        </div>  

        {/* Process and System Design Support */}

        <div id={PROCESS} style={{"backgroundColor" : "beige"}}>
        <div style={{ "textAlign": "left" , "paddingLeft" : "2rem" }}>
            <div className="safety-heading "><h3>Process and System Design Support: Driving Operational Excellence</h3></div>
            <p style={{ "textAlign": "left" }}><h3>Our Services:</h3></p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>•  All-Inclusive Process Design:</h4><br />
            <div style={{"float" : "right" , "paddingRight":"2rem"}}>
                <img src={process_ser} width={700} height={500}  />
        </div>    
            <div style={{"paddingLeft" : "3rem"}}>
                •	Utilize operational and technical expertise to design processes that comprehensively deliver business objectives.<br />
                
                </div>                        
                <h4 style={{"marginBottom":"0"}}>•	Bottleneck Analysis and De-bottlenecking:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Review and analyze existing processes.<br />
                •	Articulate bottlenecks and assist in developing de-bottlenecking processes.<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Advanced Data Analytics:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Use advanced data analytics to spotlight areas of concern.<br />
                •	Support in designing key performance indicators (KPIs) and subordinate steps to enhance performance.<br/>
                </div>
            </p>

            <div style={{ "textAlign": "left" }}><h3>Key Achievements in process management:</h3></div>
            <p style={{ "textAlign": "left" }}>Our commitment to innovation and efficiency is reflected in our projects and achievements:</p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>•	Web-Based Mine Design Approval System:</h4>
            <div style={{"paddingLeft" : "3rem"}}>
            •	Conceptualized and developed a web-based Mine Design Approval System<br/>
            •	In use across Pilbara operations, it streamlines workflow-managed documentation and approval of mine designs.
            </div>
                <h4 style={{"marginBottom":"0"}}>•	Mining Engineer systems and processes:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	•	Managed mine planning tools, processes, and systems for Pilbara operations or a large multi mine company to provided crucial support to operations and planning deliverables.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Greenfield Operations in Pilbara and Mongolia:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Developed and embedded processes and systems for technical teams in greenfield operations <br/>
                •	Covered areas such as Mine and Resource Geology, Geotechnical, Mine Planning, Drill & Blast, and Tailings Storage Facility
                </div>
            </p>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we are dedicated to optimizing your operational processes and systems, ensuring seamless alignment with your business objectives. Our track record of developing innovative solutions underscores our commitment to operational excellence..</p>
        </div>  
        </div>  

       {/*  Project Management */}

       
       <div id={PROJECT_MANAGEMENT}style={{"backgroundColor" : "white" , "textAlign": "initial"}}>
        <div style={{ "textAlign": "initial" , "paddingRight" : "2rem" }}>
            <div className="safety-heading "><h3>Project Management Excellence: Your Partner from Ideation to Implementation</h3></div>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we are your dedicated partner for a diverse range of projects, whether they are new initiatives, improvement projects, debottlenecking endeavours, or straight problem-solving projects.</p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h4 style={{"marginBottom":"0"}}>Our Comprehensive Project Management Services::</h4><br />
            <div style={{"float" : "left" , "paddingLeft":"2rem", "paddingRight":"3rem"}}>
                <img src={proj} width={700} height={500}  />
        </div>                                 
                <h4 style={{"marginBottom":"0"}}>  •	End-to-End Project Management:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Take full responsibility for project management, from ideation/initiation to successful conclusion.<br />
                •	Provide a complete end-to-end, outcome-based project delivery service.<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Schedule and Budget Management:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Ensure projects stay on schedule and on budget.<br />
                •	Identify business opportunities, review feasibilities, and mitigate risks throughout the project lifecycle.<br/></div>
                <h4 style={{"marginBottom":"0"}}>•	Problem-Solving Support:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Provide support for problem-solving at any stage.<br />
                •	Assure clients that potential major issues can be controlled and mitigated<br/></div>
            
            </p>

            <div style={{ "textAlign": "initial" , "paddingLeft" : "2rem"}}><h3>Key project successes:</h3></div>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}>Our proven track record in project management includes the successful management of various initiatives, such as:</p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h4 style={{"marginBottom":"0"}}>•	Mine Design Approval System:</h4>
            <div style={{"paddingLeft" : "3rem"}}>
                •	Managed the project from ideation to implementation.<br/>
                •	Engaged internal and external stakeholders and vendors for seamless execution.
            </div>
                <h4 style={{"marginBottom":"0"}}>•	Mine Planning Software and Workflow Enhancement:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Oversaw the development of mine planning software and process-driven workflows for short and medium-term goals.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Geotechnical Challenging Mine Project:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Managed a technical and operational joint project at a geotechnically challenging copper/gold mine.<br/>
                •	Successfully and safely recovered ore from geotechnically sensitive zones.<br /></div>
                <h4 style={{"marginBottom":"0"}}> •	Transformation Lead:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Facilitated projects as a Transformation lead across the mining value stream for a large mining operation.</div>
            </p>
            <p style={{ "textAlign": "initial" , "paddingLeft" : "2rem" }}>At Rubra Mining, we are committed to delivering excellence in project management, ensuring the success of every endeavour, and providing comprehensive support to overcome challenges at every stage.</p>
            <div id={CONTACT_US}><Footer screen={screen}/> </div>
        </div>         
        </div> 
        </> : 
        <>
        <div id={OUR_SERVICES}><h1>Our services include:</h1></div>
        <div id = {SAFETY} style={{"backgroundColor" : "beige"}}>
        <div style={{ "textAlign": "left" , "paddingLeft" : "2rem" }}>
            <div className="safety-heading "><h3>Safety Culture Support: On the Ground Expertise</h3></div>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we are dedicated to fostering a robust safety culture within your operations.<br />
                Our comprehensive Safety Culture Support services encompass:</p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>• On-the-Ground Support, Training, and Coaching:</h4><br />
            <div style={{"float" : "right" , "paddingRight":"2rem"}}>
                <img src={safety} width={250} height={200}  />
        </div>    
            <div style={{"paddingLeft" : "3rem"}}>
                •	Effective Safety Interactions<br />
                •	Critical Control Verifications<br />
                •	Successful Pre-Start Meetings<br />
                •	Leaders' Engagement in the Field<br />
                •	Risk Assessments and Development of Controls<br />
                </div>                        
                <h4 style={{"marginBottom":"0"}}>  •	Incident Management and Safety Plan Implementation:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Conducting/supporting incident investigations with <br/>follow-up actions<br />
                •	Supporting the development and implementation of <br/> safety management plans<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Statutory Support Coverage:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Providing coverage for mine leadership as Quarry Manager/Senior<br/> Site Executive<br /></div>
            </p>

            <div style={{ "textAlign": "left" }}><h3>Proven Success in Safety:</h3></div>
            <p style={{ "textAlign": "left" }}>Our track record includes substantial contributions to safety initiatives and notable achievements, such as:</p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>•	Large Gold Mine:</h4>
            <div style={{"paddingLeft" : "3rem"}}>
                •	Achieved improved safety performance (AIFR, LTI)<br/>
                •	Recorded significant reduction in significant potential incidents for managed opeartions
            </div>
                <h4 style={{"marginBottom":"0"}}>•	Large Iron Ore Mine Operations:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Achieved an impressive 900+ days lost time injury-free days as Ops Manager
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Leadership Recognition:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Key member of two leadership teams managing large operations, both honored with CEO Safety Awards (Copper/Gold Mine, Port Operations)</div>
                <h4 style={{"marginBottom":"0"}}> •	Critical Risk Management:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Valuable member of the Critical Risk Management deployment team at operational sites</div>
                <h4 style={{"marginBottom":"0"}}>  •	Employee Engagement: </h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Significantly improved Employee Net Promoter Score (eNPS) for managed teams and operations</div>
            </p>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we are committed to creating a safety-centric environment through hands-on support, training, and a proven track record of safety excellence.</p>
        </div>  
        </div>  

        {/* Operation Support  */}  


        <div id={OPERATION} style={{"backgroundColor" : "white" , "textAlign": "initial"}}>
        <div style={{ "textAlign": "initial" , "paddingRight" : "2rem" }}>
            <div className="safety-heading " style={{"paddingLeft" : "1rem" }}><h3>Operational Support: Enhancing Operational Excellence</h3></div>
            <p style={{ "textAlign": "left" , "paddingLeft" : "1rem"}}>At Rubra Mining, our Operational Support services employ advanced analytics and technical expertise to thoroughly examine every facet of mine operations throughout the value chain. We leverage these insights to pinpoint real improvements, achieving excellence in performance.</p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h3 style={{"marginBottom":"0"}}>Key Offerings:</h3><br />
            <div style={{"float" : "left" , "paddingRight":"3rem"}}>
                <img src={operational} width={250} height={200}  />
        </div>    
            <div style={{"paddingLeft" : "3rem"}}>
                <h4>•	Coaching Operations Leaders:</h4><br />
                •	Provide coaching to operations leaders for a deeper technical understanding of mine operations.<br />
                •	Ensure mine plan conformance through targeted guidance.<br />
                </div>                        
                <h4 style={{"marginBottom":"0"}}>•	On-Site Partnering Process:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Undertake on-site partnering to unlock significant value for the mine.<br />
                •	Implement cost reduction or volume uplift programs for tangible results.<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Design Sustainable Improvement Programs:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Design processes and key performance indicators for a sustainable improvement program<br />
                •	Ensure continual enhancement of operational efficiency.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Project Management Resources:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Provide coverage and project management resources for mine operations engineering and leadership roles.<br />
                </div>
            </p>

            <div style={{ "textAlign": "initial" , "paddingLeft" : "2rem"}}><h3>Achievements in operational management:</h3></div>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}>Our track record includes substantial contributions to safety initiatives and notable achievements, such as:</p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h4 style={{"marginBottom":"0"}}>•	Tier A Gold Mine:</h4>
            <div style={{"paddingLeft" : "3rem"}}>
                •	Successfully designed and implemented daily, weekly, and monthly reconciliation processes for the mine value stream.<br/>
            </div>
                <h4 style={{"marginBottom":"0"}}>•	Capacity Utilization Focus:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Improved asset capacity utilization, achieving the best production records through debottlenecking and strategy alignment.<br/>
                •	Introduced "Theory of Constraints" at the operational level for enhanced efficiency.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Large-Scale Copper/Gold Mine:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Successfully led the Transformation workstream for the open pit mine, HME maintenance, Mine Technical Services, and Asset and Material Management</div>
                
            </p>
            <p style={{ "textAlign": "initial" , "paddingLeft" : "2rem" }}>At Rubra Mining, our Operational Support services are designed to elevate your mine operations to new heights by ensuring technical proficiency, value realization, and sustained improvement.</p>
        </div>  
        </div>   


       {/*  Autonomy and Analytics Support */}
       <div id={AUTONOMY} style={{"backgroundColor" : "beige"}}>
        <div style={{ "textAlign": "left" , "paddingLeft" : "2rem" }}>
            <div className="safety-heading "><h3>Autonomy and Analytics Support: Elevating Operational Efficiency</h3></div>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we leverage extensive expertise in autonomous hauling fleet operations, particularly with CAT MineStar and Komatsu Frontrunner systems. Our Autonomy and Analytics Support services are designed to enhance your mining operations by:</p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>•	System Optimization:</h4><br />
            <div style={{"float" : "right" , "paddingRight":"2rem"}}>
                <img src={autonomous} width={250} height={200}  />
        </div>    
            <div style={{"paddingLeft" : "3rem"}}>
                •   Identify constraints within autonomous hauling systems<br />
                •	Develop improvement plans to address constraints<br />                
                </div>                        
                <h4 style={{"marginBottom":"0"}}>•	Fleet Utilization and Efficiency Improvement:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Enhance concurrent hang/queue management<br />
                •	Minimize on-haul stoppages due to obstructions<br/>
                •	Reduce truck interchange delays<br/>
                •	Optimize hauling speed<br/>
                •	Minimize bunching and queuing<br/>
                •	Improve overall system productivity<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Mine Control System Enhancement:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Improve efficiencies of Mine Control systems and processes<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Asset Performance Improvement:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Incorporate autonomous operational data for asset maintenance and defect elimination processes<br /></div>
            </p>

            <div style={{ "textAlign": "left" }}><h3>Proven Success in managing Autonomy:</h3></div>
            <p style={{ "textAlign": "left" }}>Our commitment to excellence is demonstrated through the following career achievements:</p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>•	Large Iron Mine (180Mt TMM):</h4>
            <div style={{"paddingLeft" : "3rem"}}>
                •	Successfully managed leading utilization and productivity site with the Komatsu Frontrunner system<br/>
            </div>
                <h4 style={{"marginBottom":"0"}}>•	CAT MineStar System Implementation:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Managed one of the fastest implementations and ramp-ups of the CAT MineStar system, achieving the quickest 100Mt moved milestone.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Productivity Enhancement:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Achieved a significant improvement (10%+) in CAT MineStar utilization and productivity within 12 months through debottlenecking and system improvement.</div>
                <h4 style={{"marginBottom":"0"}}>•	Industry Collaboration:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Built strong connections with Autonomy OEMs development and Ops support senior leadership team through collaboration, product feature enhancement, and continuous improvement.</div>
                
            </p>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we are committed to optimizing your mining operations through advanced autonomy and analytics support, ensuring efficiency, productivity, and continuous improvement.</p>
        </div>  
        </div>  

        {/* Pit Optimisation, Planning and Scheduling */}

        
        <div id={PIT} style={{"backgroundColor" : "white" , "textAlign": "initial"}}>
        <div style={{ "textAlign": "initial" , "paddingRight" : "2rem" }}>
            <div className="safety-heading " style={{"paddingLeft" : "1rem" }}><h3>Pit Optimization, Planning, and Scheduling: Maximizing Resource Value</h3></div>
            <p style={{ "textAlign": "left", "paddingLeft" : "1rem" }}>Welcome to Rubra Mining, where we specialize in optimizing pit design, planning, and scheduling to maximize the economic value of your resources.</p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h3 style={{"marginBottom":"0"}}>Our Approach:</h3><br />
            <div style={{"float" : "left" ,"paddingRight":"3rem"}}>
                <img src={pit_ser} width={250} height={200}  />
        </div>    
            <div style={{"paddingLeft" : "3rem"}}>
                <h4>•	Ore Body Understanding:</h4>
                •	Thoroughly understand the ore body<br />
                •	Articulate uncertainty to develop a range of pit limits.<br />
             </div>                        
                <h4 style={{"marginBottom":"0"}}> •	Practical Mine Designs and Sequencing:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Support the development of practical mine designs and sequencing.<br />
                •	Ensure safe and executable mine plans.<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Production Plan Development:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Develop production plans at all horizons.<br />
                •	Ensure alignment between the plan and business objectives.</div>
                <h4 style={{"marginBottom":"0"}}>•	Plan Reviews and Due Diligence:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Conduct plan reviews and due diligence.<br />
                •	Articulate risks and opportunities from both operational and technical viewpoints.</div>
            </p>

            <div style={{ "textAlign": "initial" , "paddingLeft" : "2rem"}}><h3>Successes in planning, scheduling and optimisation:</h3></div>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}>Our commitment to excellence is showcased through the following projects and achievements: </p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h4 style={{"marginBottom":"0"}}>•	Process-Driven Mine Planning Models:</h4>
            <div style={{"paddingLeft" : "3rem"}}>
                •	Led the development of process flow-driven mine planning models for short to long term planning to ensured scheduling is user-friendly and supports audits of mine plans.<br/>
                •	Implemented across short-term and life-of-mine plan horizons across all Pilbara operations of a large iron ore miner (14+ mine operations).
            </div>
                <h4 style={{"marginBottom":"0"}}>•	Simulation Model for Grade Conformance:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Developed a simulation model to analyze grade conformance for a group of iron ore mines blend.<br/>
                •	Ascertained the impact of non-conformances on individual mine sites on combined grade conformance.<br/>
                •	Collaborated with the marketing team on final product conformance and variability analysis.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Transition Management:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Successfully managed the transition of the long-term planning process from Resource Development to the Technical Services team.<br/>
                •	Developed and implemented a mine planning framework for 0 to 5-year planning for a group of mines in Pilbara.
                </div>                
            </p>
            <p style={{ "textAlign": "initial" , "paddingLeft" : "2rem" }}>At Rubra Mining, we are dedicated to optimizing your mining operations through innovative pit optimization, planning, and scheduling, ensuring the maximization of your resource value.</p>
        </div>  
        </div>  

        {/* Process and System Design Support */}

        <div id={PROCESS} style={{"backgroundColor" : "beige"}}>
        <div style={{ "textAlign": "left" , "paddingLeft" : "2rem" }}>
            <div className="safety-heading "><h3>Process and System Design Support: Driving Operational Excellence</h3></div>
            <p style={{ "textAlign": "left" }}><h3>Our Services:</h3></p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>•  All-Inclusive Process Design:</h4><br />
            <div style={{"float" : "right" , "paddingRight":"2rem"}}>
                <img src={process_ser} width={250} height={200}  />
        </div>    
            <div style={{"paddingLeft" : "3rem"}}>
                •	Utilize operational and technical expertise to design processes that comprehensively deliver business objectives.<br />
                
                </div>                        
                <h4 style={{"marginBottom":"0"}}>•	Bottleneck Analysis and De-bottlenecking:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Review and analyze existing processes.<br />
                •	Articulate bottlenecks and assist in developing de-bottlenecking processes.<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Advanced Data Analytics:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Use advanced data analytics to spotlight areas of concern.<br />
                •	Support in designing key performance indicators (KPIs) and subordinate steps to enhance performance.<br/>
                </div>
            </p>

            <div style={{ "textAlign": "left" }}><h3>Key Achievements in process management:</h3></div>
            <p style={{ "textAlign": "left" }}>Our commitment to innovation and efficiency is reflected in our projects and achievements:</p>
            <p style={{ "textAlign": "left" }}><h4 style={{"marginBottom":"0"}}>•	Web-Based Mine Design Approval System:</h4>
            <div style={{"paddingLeft" : "3rem"}}>
            •	Conceptualized and developed a web-based Mine Design Approval System<br/>
            •	In use across Pilbara operations, it streamlines workflow-managed documentation and approval of mine designs.
            </div>
                <h4 style={{"marginBottom":"0"}}>•	Mining Engineer systems and processes:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	•	Managed mine planning tools, processes, and systems for Pilbara operations or a large multi mine company to provided crucial support to operations and planning deliverables.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Greenfield Operations in Pilbara and Mongolia:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Developed and embedded processes and systems for technical teams in greenfield operations <br/>
                •	Covered areas such as Mine and Resource Geology, Geotechnical, Mine Planning, Drill & Blast, and Tailings Storage Facility
                </div>
            </p>
            <p style={{ "textAlign": "left" }}>At Rubra Mining, we are dedicated to optimizing your operational processes and systems, ensuring seamless alignment with your business objectives. Our track record of developing innovative solutions underscores our commitment to operational excellence..</p>
        </div>  
        </div>  

       {/*  Project Management */}

       
       <div id={PROJECT_MANAGEMENT}style={{"backgroundColor" : "white" , "textAlign": "initial"}}>
        <div style={{ "textAlign": "initial" , "paddingRight" : "2rem" }}>
            <div className="safety-heading "  style={{"paddingLeft" : "1rem" }}><h3>Project Management Excellence: Your Partner from Ideation to Implementation</h3></div>
            <p style={{ "textAlign": "left" , "paddingLeft" : "1rem" }}>At Rubra Mining, we are your dedicated partner for a diverse range of projects, whether they are new initiatives, improvement projects, debottlenecking endeavours, or straight problem-solving projects.</p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h4 style={{"marginBottom":"0"}}>Our Comprehensive Project Management Services::</h4><br />
            <div style={{"float" : "left" , "paddingRight":"3rem"}}>
                <img src={proj} width={250} height={200}  />
        </div>                                 
                <h4 style={{"marginBottom":"0"}}>  •	End-to-End Project Management:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Take full responsibility for project management, from ideation/initiation to successful conclusion.<br />
                •	Provide a complete end-to-end, outcome-based project delivery service.<br /></div>
                <h4 style={{"marginBottom":"0"}}>•	Schedule and Budget Management:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Ensure projects stay on schedule and on budget.<br />
                •	Identify business opportunities, review feasibilities, and mitigate risks throughout the project lifecycle.<br/></div>
                <h4 style={{"marginBottom":"0"}}>•	Problem-Solving Support:</h4><br />
                <div style={{"paddingLeft" : "3rem"}}>
                •	Provide support for problem-solving at any stage.<br />
                •	Assure clients that potential major issues can be controlled and mitigated<br/></div>
            
            </p>

            <div style={{ "textAlign": "initial" , "paddingLeft" : "2rem"}}><h3>Key project successes:</h3></div>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}>Our proven track record in project management includes the successful management of various initiatives, such as:</p>
            <p style={{ "textAlign": "initial"  , "paddingLeft" : "2rem"}}><h4 style={{"marginBottom":"0"}}>•	Mine Design Approval System:</h4>
            <div style={{"paddingLeft" : "3rem"}}>
                •	Managed the project from ideation to implementation.<br/>
                •	Engaged internal and external stakeholders and vendors for seamless execution.
            </div>
                <h4 style={{"marginBottom":"0"}}>•	Mine Planning Software and Workflow Enhancement:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Oversaw the development of mine planning software and process-driven workflows for short and medium-term goals.
                </div>
                <h4 style={{"marginBottom":"0"}}>•	Geotechnical Challenging Mine Project:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Managed a technical and operational joint project at a geotechnically challenging copper/gold mine.<br/>
                •	Successfully and safely recovered ore from geotechnically sensitive zones.<br /></div>
                <h4 style={{"marginBottom":"0"}}> •	Transformation Lead:</h4>
                <div style={{"paddingLeft" : "3rem"}}>
                •	Facilitated projects as a Transformation lead across the mining value stream for a large mining operation.</div>
            </p>
            <p style={{ "textAlign": "initial" , "paddingLeft" : "2rem" }}>At Rubra Mining, we are committed to delivering excellence in project management, ensuring the success of every endeavour, and providing comprehensive support to overcome challenges at every stage.</p>
            <div id={CONTACT_US}><Footer screen={screen}/> </div>
        </div>         
        </div>
        </>} 
              
    </>);

}

export default ProductsServices;