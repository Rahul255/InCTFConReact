import React from 'react'
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const CoverContainer = styled.section`
    background-image: ${() => `url(${require('../../images/bb1.png').default})`};
    background-size: cover;
    background-position: top;
    color: white;
    position: relative;
    overflow: hidden;
`;
// const GoalCard = styled.div`
//     img {
//         text-align: center;
//         display: block;
//         max-width: 50%;
//     }
//     p {
//       color: #AAA;
//       margin-left: 19px;
//       margin-top: 13px;
//       font-size: 10px;
//     }
//     transition: all 1s ease;
//     // &:hover {
//     //     transform: translateY(10px);
//     //     transition: all 1s ease;
//     //     p {
//     //        color: white;
//     //     }
//     // }
// `;
const CoverWrap = styled.div`
    {/*backdrop-filter: blur(1px) brightness(0.45);*/}
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
       width: 300px;
       max-width: 100%;
       margin-bottom: 1.5rem;
       text-align: center;
    }
    h1 {
      font-size: calc(3.5rem + 4vw);
      text-shadow: 3px 5px 8px rgba(0,0,0,0.5);
    }
    h2 {
       text-align: center;
       font-size: calc(1.35rem + 1vw);
       text-shadow: 2px 3px 4px rgba(0,0,0,0.5);
       color: #EEE;
       span {
          display: block;
          font-weight: 900;
          font-style: italic;
       }
    }
    p {
      color: #BBB;
      span {
        font-weight: 600;
        color: #fd7e14;
      }
    }
    .register-button {
        margin-top: 2vh;
   
        padding: 15px 40px;
        border-radius: 3px;
        font-size: 18px;
        background: tomato;
        color: white;
        text-decoration: none!important;
        transition: all 0.35s linear;
        &:hover {
          color: 
           transition: all 0.35s linear;
        }
        margin-right: 5px;
    }
`
// const inCTFSponsors = [
//     {
//         image: require("../../images/sponsor/salesforce.png").default,
//         text: "EVENT SPONSOR",
//     },
//     {
//         image: require("../../images/sponsor/zoho-1e78182f2870ef5f7277b10047c556e1.png").default,
//         text: "DIAMOND SPONSOR",
        
//     },
//     {
//         image: require("../../images/sponsor/vmware-54e2f942b7201762830671db2d5b73ae.png").default,
//         text: "DIAMOND SPONSOR"
//     },
//     // {
//     //     image: require("../../images/sponsor/crowdstrike.png").default,
//     //     text: "PLATINUM SPONSOR",
//     // },
//     // {
//     //     image: require("../../images/sponsor/social-cred.png").default,
//     //     text: "GOLD SPONSOR"
//     // },
//     // {
//     //     image: require("../../images/sponsor/hrblock.jpeg").default,
//     //     text: "GOLD SPONSOR"
//     // },
// ];

function Banner() {
    return (
        <React.Fragment>
            <CoverContainer>
                <CoverWrap>
                    <div className="container text-center px-2">
                        <Fade left>
                            {/* <img
                            className="mb-0 " alt="Amrita Vishwa Vidyapeetham"
                            style={{ maxHeight: '72px', maxWidth: '50vw', width: 'auto' }}
                            src={require('../../images/amrita_logo_light.png').default}
                        /> */}
                            <h1 className="font-weight-bold mb-2">InCTFCon</h1>
                        </Fade>
                        <Fade right>
                            <h2>
                                International Cybersecurity Conference & Trainings
                            </h2>
                            {/*<div className="d-flex w-100 justify-content-center mt-3 align-content-center">
                            <div className="d-flex w-50 justify-content-end text-right border-right mr-3 pr-3 pl-2">
                                <div>
                                    <div>CTF</div>
                                    <h3 className="font-weight-bold">April 3-4</h3>
                                </div>
                            </div>
                            <div className="col-6 d-flex align-content-start text-left pl-0 pr-2">
                                <div>
                                    <div>Conference</div>
                                    <h3 className="font-weight-bold">April 9-11</h3>
                                </div>
                            </div>
                        </div>*/}<br />
                            <h5 className="bold">January 21 - 23, 2022</h5>
                        </Fade><br/>
                        <Fade left>
                        <a
                            className="register-button" target="_blank" rel="noreferrer nofollow"
                            href="https://forms.gle/a9gPwADoyKcLkp5c7"
                        >
                            Register 
                        </a>
                        </Fade>
                    </div>
                   
                </CoverWrap>
                {/* <div className="container" style={{ maxWidth: 'auto', backgroundColor: "white" }}>
                            <div className="d-flex" style={{backgroundColor: "white"}}>
                                {inCTFSponsors.map((g, index) =>
                                
                                    <GoalCard className="col-4 col-md-4 col-lg-4 p-2" style={{marginLeft:""}}>
                                        <Fade up={index % 2 === 0} down={index % 2 !== 0} delay={index * 350}>
                                            <img alt="illustration" draggable="false" src={g.image} />
                                            <p>{g.text}</p>
                                        </Fade>
                                        
                                    </GoalCard>
                                    
                                )}
                            </div>
                    </div> */}
            </CoverContainer>
        </React.Fragment>
    )
}

export default Banner
