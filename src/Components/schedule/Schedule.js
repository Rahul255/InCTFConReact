// import React, { useState } from "react";
import styled from "@emotion/styled";
// import ScheduleDay from "./ScheduleDay";

const ScheduleModuleWrap = styled.section`
    
    color: chocolate;
    min-height: 45vh;
    padding: 10vh 2vw;
`;

// const TabSwitcher = styled.div`
//     button {
//         border: none;
//         font-size: 20px;
//         padding: 6px 10px;
//         background: chocolate;
//         color: white;
//         &:focus {
//             outline: none!important;
//         }
//     }
//     .is_active {
//         background: white;
//         color: chocolate;
//     }
// `;

const Schedule = () => {

    // const [activeDay, setActiveDay] = useState(2);

    // const scheduleList = [
    //     {
    //         "date": "21 January 2022",
    //         "title": "January 21",
    //         "events": [
    //             {
    //                 "time": "08:00 - 08:45 IST",
    //                 "title": "Speaker",
    //                 "speakers": [
    //                     {
    //                         "name": "Rahul Manneri",
    //                         "designation": "Speaker",
    //                         "organization": "Amrita",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "08:45 - 09:30 IST",
    //                 "title": "Keynote",
    //                 "speakers": [
    //                     {
    //                         "name": "Rinki Sethi",
    //                         "designation": "Vice President & CISO",
    //                         "organization": "Twitter",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "10:00 - 11:00 IST",
    //                 "title": "Inaugural Session",
    //                 "speakers": [
                    
    //                     {
    //                         "name": "Ajay Prakash Sawhney",
    //                         "designation": "Secretary. Ministry of Electronics & IT",
    //                         "organization": "Government of India",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     },
    //                     {
    //                         "name": "Lt. General (Dr) Rajesh Pant (retd.)", 
    //                         "designation": "National Cyber Security Coordinator",
    //                         "organization": "National Security Council Secretariat of India",
    //                         "avatar": require("../../images/speakers/rajeshPant.jpg").default,
    //                     },
    //                     {
    //                         "name": "Arundhati Bhattacharya",
    //                         "designation": "Chairperson and Chief Executive Officer",
    //                         "organization": "Salesforce India",
    //                         "avatar": require("../../images/speakers/Arundhati-Bhattacharya.jpg").default,
    //                     },
    //                     
    //                 ],
    //             },
    //             {
    //                 "time": "11:15 - 12:00 IST",
    //                 "title": "From Technologist to Board Room, a Cybersecurity Journey",
    //                 "speakers": [
    //                     {
    //                         "name": "Sanju Misra",
    //                         "designation": "VP & CISO",
    //                         "organization": "Alnylam Pharmaceuticals",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             
    //            {
    //                 "time": "14:00 - 14:45 IST",
    //                 "title": "Dynamic Instrumentation 101",
    //                 "speakers": [
    //                     {
    //                         "name": "Nishaanth G",
    //                         "designation": "Security Researcher",
    //                         "organization": "MDSec",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     },
    //                     {
    //                             "name": "Akshay Jain",
    //                             "designation": "Security Researcher",
    //                             "organization": "PhonePe",
    //                             "avatar": require('../../images/rahul.jpg').default
    //                         },
                        
    //                 ],
    //             },
    //             {
    //                 "time": "14:45 - 15:30 IST",
    //                 "title": "5G IMSI catchers mirage",
    //                 "speakers": [
    //                     {
    //                         "name": "Dr. Altaf Shaik",
    //                         "designation": "Senior Researcher",
    //                         "organization": "Technical University of Berlin",
    //                         "avatar": require("../../images/speakers/altafshaik.jpeg").default,
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "15:30 - 16:15 IST",
    //                 "title": "DevSecOps – Putting security in DevOps",
    //                 "speakers": [
    //                     {
    //                         "name": "Prajeesh Prathap",
    //                         "designation": "Head of Platform and Operations",
    //                         "organization": "IT&Care",
    //                         "avatar": require("../../images/speakers/prajeesh-Prathap.jpg").default,
    //                     },
    //                     {
    //                         "name": "Raphael de la Vienne",
    //                         "designation": "Technical Security Officer",
    //                         "organization": "IT&Care",
    //                         "avatar": require("../../images/speakers/Raphael.jpg").default,
    //                     },
    //                 ]
    //             },  
    //             {
    //                 "time": "16:15 - 17:00 IST",
    //                 "title": "Introduction to Containers and Kubernetes",
    //                 "speakers": [
    //                     {
    //                         "name": "Ramesh Kumar",
    //                         "designation": "Senior Engineer",
    //                         "organization": "CrowdStrike",
    //                         "avatar": require("../../images/speakers/Ramesh-kumar.jpeg").default,
    //                     },
                        
    //                 ],
    //             },  
    //             {
    //                 "time": "20:00 - 20:45 IST",
    //                 "title": "Lessons learned from managing crisis in a VUCA (volatility, uncertainty, complexity, and ambiguity) World",
    //                 "speakers": [
    //                     {
    //                         "name": "Dotan Sagi",
    //                         "designation": "Founder & CEO ",
    //                         "organization": "Be-Strategic Solutions",
    //                         "avatar": require("../../images/speakers/DotanSagi_BeST.png").default,
    //                     },
                        
    //                 ],
    //             },
    //             {
    //                 "time": "20:45 - 21:30 IST",
    //                 "title": "Try your hand at Machine Learning for Security",
    //                 "speakers": [
    //                     {
    //                         "name": "Joshua Brown",
    //                         "designation": "Vice President – Global Chief Information Security Officer",
    //                         "organization": "H&R Block",
    //                         "avatar": require("../../images/speakers/Joshua-Brown.jpg").default,
    //                     },
                        
    //                 ],
    //             },
    //             {
    //                 "time": "21:30 - 22:30 IST",
    //                 "title": "Threat Modeling",
    //                 "speakers": [
    //                     {
    //                         "name": "Sung Lee",
    //                         "designation": "Staff Security Architect",
    //                         "organization": "VMware",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     },
                        
    //                 ],
    //             },    
    //         ]
    //     },
    //     {
    //         "date": "22 January 2022",
    //         "title": "January 22",
    //         "events": [
    //             {
    //                 "time": "08:00 - 08:45 IST",
    //                 "title": "Speaker",
    //                 "speakers": [
    //                     {
    //                         "name": "Rahul Manneri",
    //                         "designation": "Speaker",
    //                         "organization": " Amrita",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "08:45 - 09:30 IST",
    //                 "title": "Speaker",
    //                 "speakers": [
    //                     {
    //                         "name": "Rahul Manneri",
    //                         "designation": "Speaker",
    //                         "organization": " Amrita",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "09:30 - 10:15 IST",
    //                 "title": "Decadal Plan for Research in Security and Privacy",
    //                 "speakers": [
    //                     {
    //                         "name": "Richard Chow",
    //                         "designation": "University Research Manager and Scientist",
    //                         "organization": " Intel",
    //                         "avatar": require("../../images/speakers/RichardChow.jpg").default,
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "10:15 - 11:00 IST",
    //                 "title": "Android Exploitation & Protection: A 1-Click Full-Chain View ",
    //                 "speakers": [
    //                     {
    //                         "name": "Atul Agarwal",
    //                         "designation": "CEO",
    //                         "organization": "Secfence",
    //                         "avatar": require("../../images/speakers/atul-agarwal.jpg").default,
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "11:00 - 11:45 IST",
    //                 "title": "Protecting containers and the ship throughout their journey",
    //                 "speakers": [
    //                     {
    //                         "name": "Ajit Dhumale",
    //                         "designation": "Senior Engineer ",
    //                         "organization": " CrowdStrike",
    //                         "avatar": require("../../images/speakers/AjitDhumale-Saurabh-Gawas.jpg").default,
    //                     }
    //                 ],
    //             },
                
    //             {
    //                 "time": "11:45 - 12:30 IST",
    //                 "title": "End to End Device Security - Enhanced by Hardware",
    //                 "speakers": [
    //                     {
    //                         "name": "Mini TT",
    //                         "designation": "Security Technologist",
    //                         "organization": "Dell",
    //                         "avatar": require("../../images/speakers/Mini-TT.jpeg").default,
    //                     },
    //                 
    //                 ],
    //                 },
                    
                    
    //             {
    //                 "time": "14:30 - 15:15 IST",
    //                 "title": "Speaker",
    //                 "speakers": [
    //                     {
    //                         "name": "Rahul Manneri",
    //                         "designation": "cyber",
    //                         "organization": "amrita",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "15:15 - 16:00 IST",
    //                 "title": "Getting started with IR/Blue Teaming",
    //                 "speakers": [
    //                     {
    //                         "name": "Sam Paterson",
    //                         "designation": "IR Analyst",
    //                         "organization": "MDSec",
    //                         "avatar": require("../../images/speakers/sam.png").default,
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "16:00 - 16:45 IST",
    //                 "title": "Speaker",
    //                 "speakers": [
    //                     {
    //                         "name": "Rahul Manneri",
    //                         "designation": "Security Engineer",
    //                         "organization": "Amrita",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "20.00 - 20.45 IST",
    //                 "title": "Indigenous Cyber Issues - Problem Statements",
    //                 "speakers": [
    //                     {
    //                         "name": "Rushi",
    //                         "designation": "Senior Program Manager",
    //                         "organization": "Ministry of Home Affairs",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "20:45 - 21:30 IST",
    //                 "title": "Cyber Risk Management",
    //                 "speakers": [
    //                     {
    //                         "name": "Dr. Amir Schreiber",
    //                         "designation": "Senior Director",
    //                         "organization": "Bank Hapoalim",
    //                         "avatar": require("../../images/speakers/amir.jpeg").default,
    //                     }
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         "date": "23 January 2022",
    //         "title": "January 23",
    //         "events": [
    //         {
    //                 "time": "08:30 - 09:30 IST",
    //                 "title": "Speech",
    //                 "speakers": [
    //                     {
    //                         "name": "Rahul Manneri",
    //                         "designation": "Researcher",
    //                         "organization": "Amrita ",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "09:30 - 09:45 IST",
    //                 "title": "A Few Thoughts on Authenticated Encryption",
    //                 "speakers": [
    //                     {
    //                         "name": "Lakshmy K.V.",
    //                         "designation": "Assistant Professor",
    //                         "organization": "Amrita University",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "09:45 - 10:00 IST",
    //                 "title": "Covert delivery mechanisms",
    //                 "speakers": [
    //                     {
    //                         "name": "Amritha P.P.",
    //                         "designation": "Assistant Professor",
    //                         "organization": "Amrita University",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     },
    //                 ],
    //             },
    //             {
    //                 "time": "10:00 - 10:45 IST",
    //                 "title": "Interactive Session",
    //                 "speakers": [
    //                     {
    //                         "name": "Neeta Verma",
    //                         "designation": "Director General",
    //                         "organization": "National Informatics Centre",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     },
    //                     {
    //                         "name": "Sundari Nanda",
    //                         "designation": "CVO & Special Commissioner(Vigilance)",
    //                         "organization": "Delhi Police",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     },
    //                 ],
    //             },
    //             {
    //                 "time": "10:45 - 11:15 IST",
    //                 "title": "Preventing cyber attacks together - The Power of Collaboration",
    //                 "speakers": [
    //                     {
    //                         "name": "Karine Ben-Simhon",
    //                         "designation": "VP, Cyber Intelligence Center and TLV Innovation",
    //                         "organization": "Citi, Israel",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     },  
    //                 ],
    //             },
    //             {
    //                 "time": "11:30 - 12:15 IST",
    //                 "title": "Keynote",
    //                 "speakers": [
    //                     {
    //                         "name": "Rama Vedashree ",
    //                         "designation": "CEO",
    //                         "organization": "Data Security Council of India",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "12:15 - 12:45 IST",
    //                 "title": "Secure Software",
    //                 "speakers": [
    //                     {
    //                         "name": "Sarvjeet Kaur",
    //                         "designation": "Sc'G'",
    //                         "organization": "Defence Research and Development Organization(DRDO)",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "15:00 - 16:00 IST",
    //                 "title": "Firmware Security Introduction",
    //                 "speakers": [
    //                     {
    //                         "name": "Priyadharshini Krishnan",
    //                         "designation": "Engineering Manager",
    //                         "organization": "American Megatrends International LLC",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "16:00 - 17:00 IST",
    //                 "title": "Evolution of Endpoint Detection and Response(EDR)",
    //                 "speakers": [
    //                     {
    //                         "name": "Aarti Gupta",
    //                         "designation": "Director Engineering",
    //                         "organization": " CrowdStrike",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
    //             {
    //                 "time": "17:15 - 17:45 IST",
    //                 "title": "Valedictory Ceremony",
    //                 "speakers": [
    //                     {
    //                         "name": "Micha Weis",
    //                         "designation": "CyberSecurity Advisor",
    //                         "organization": "Ministry of Finance",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     },
    //                     {
    //                         "name": "Vipin Pavithran",
    //                         "designation": "Founder & Chief Mentor of Team Shakti, Team bi0s, amFOSS",
    //                         "organization": "Amrita University",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     },
    //                 ]
    //             }
    //         ],
    //     }
    // ]
    
    return <ScheduleModuleWrap>
        <div className="container-lg px-0 p-md-2">
            <div className="row mx-0 text-center">
                <div className="col-md-8 my-5 my-md-0 px-3 px-md-2 pt-5">
                    <h1>InCTFCon Schedule will update soon...</h1>
                </div>
                </div>  
                {/* <div className="d-flex align-items-center justify-content-end  mb-3 my-md-0 px-2">
                    <TabSwitcher>
                        {scheduleList?.map((day, index) =>
                            <button
                                className={index===activeDay ? 'is_active' : null}
                                onClick={() => setActiveDay(index)}
                            >
                                {day.title}
                            </button>
                        )}
                    </TabSwitcher>
                </div>
            
            <div className="p-1 p-md-2">
                <ScheduleDay {...scheduleList[activeDay]} />
            </div>
            <div className="d-flex align-items-center justify-content-end  mb-3 my-md-0 px-2">
                <TabSwitcher>
                    {scheduleList?.map((day, index) =>
                        <button
                            className={index===activeDay ? 'is_active' : null}
                            onClick={() => setActiveDay(index)}
                        >
                            {day.title}
                        </button>
                    )}
                </TabSwitcher>
            </div> */}
        </div>
    </ScheduleModuleWrap>

};

export default Schedule;
