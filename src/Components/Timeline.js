import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const TimelineWrapper = styled.div`
    
    color: white;
    padding: 5vh 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        font-weight: 600;
        margin-bottom: 0;
        color: tomato;
        font-size: calc(1.25rem + 2vw);
    }
    .row {
        max-width: 1300px;
    }
    h4 {
       font-weight: 600;
       color: tomato;
       margin-bottom: 5px;
    }
    .phase-timeframe {
       font-size: 15px;
       line-height: 1.2;
       color: #EEE;
    }
    p {
       font-size: 13px;
       margin-bottom: 0;
       color: #BBB;
    }
    a {
      text-decoration: none!important;
      color: #fd7e14!important;
      border: 1px solid;
      padding: 3.5px 8px;
      border-radius: 2px;
      font-size: 13px;
    }
    h5 {
        color: tomato;
        margin-bottom: 5px;
        font-size: calc(1rem + 0.25vw);
    }
    .date {
       color: #DDD;
       font-size: 14px;
       line-height: 1.2;
       margin-bottom: 10px;
    }
`

const Timeline = () => {

    const timeline = [
        {
            "title": "Phase 1",
            "timeline": "October 2021 - December 2021",
            "events": [
                {
                    "isCompleted": true,
                    "title": "InCTF Training Round & Team Registration",
                    "date": "",
                    "description": "Participants will solve Beginner level Challenges"
                },
                {
                    "title": "Beginner-Level Training",
                    "description": "Basic CybserSecurity Training, introducing participants to Web Security & Exploitation, Assembly, Digital Forensics, Reverse Engineering ",
                },
            ],
        },
        {
            "title": "Phase 2",
            "timeline": "December 2021",
            "events": [
                {
                    "title": "Qualifer Round",
                    "description": "Participants enhance their skills by practising different CTF-challenges from the Traboda Labs platform.",
                },
                {
                    "title": "Pre - conference talks",
                    "description": "Participants receive advanced talks in different cybersecurity areas to level up their skills."
                }
            ],
        },
        {
            "title": "Phase 3",
            "timeline": "January 2022",
            "events": [
                {
                    "title": "InCTF - Finals",
                    "date": "",
                    "description": "Finale of InCTF - Jeopardy Style CTF, organized by teambi0s",
                },
                {
                    "title": "Final Summit",
                    "date": "",
                    "description": "3-day CyberSecurity Conference, that will feature talks, panel-discussions, seminars etc.",
                }
            ]
        }
    ]

    return <TimelineWrapper id="timeline">
        <div className="row mx-0">
            <div className="col-12 px-2 py-3 text-center">
                {/* <Fade left> */}
                    <h2>Event Timeline</h2>
                {/* </Fade> */}
            </div>
            {timeline.map((p, index) =>
                <div className="col-md-4 p-1 p-md-2" >
                    <div style={{ background: `rgba(130,130,120, 0.2)` }} className="h-100 p-3" style={{border:"1px solid white", borderRadius:"10px"}}>
                        {/* <Fade up delay={150*index}> */}
                            <h4 className="font-weight-bold">{p.title}</h4>
                        {/* </Fade> */}
                        {/* <Fade left delay={150*index}> */}
                            <div className="phase-timeframe">{p.timeline}</div>
                        {/* </Fade> */}
                        <div className="my-1" >
                            {p.events.map((e, i) =>
                                // <Fade up delay={500*i}>
                                    <div  className="pt-4" >
                                        <h5>{e.title}</h5>
                                        {e.date && <div className="date"><i className="far fa-calendar-alt mr-1" /> {e.date}</div>}
                                        <p>{e.description}</p>
                                        <div className="d-flex mt-2">
                                            {e.registerURL &&
                                            <a href={e.registerURL} target="_blank" rel="noreferrer nofollow" className="text-light my-1 mr-3 d-inline-block plain-link">
                                                Register Now <i className="far fa-chevron-right"/>
                                            </a>}
                                            {e.viewMoreURL &&
                                            <a href={e.viewMoreURL} className="text-light my-1 d-inline-block plain-link">
                                                View Details <i className="far fa-external-link"/>
                                            </a>}
                                        </div>
                                    </div>
                                // </Fade>
                            )}
                        </div>
                    </div>

                </div>
            )}

        </div>
    </TimelineWrapper>
};

export default Timeline;