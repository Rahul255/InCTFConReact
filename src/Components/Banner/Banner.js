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
        display: block;
        padding: 12px 18px;
        border-radius: 3px;
        font-size: 18px;
        background: #4A148C;
        color: white;
        text-decoration: none!important;
        transition: all 0.35s linear;
        &:hover {
           background: #F50057;
           transition: all 0.35s linear;
        }
        margin-right: 5px;
    }
`

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
                        </div>*/}<br/>
                        <h5 className="bold">January 2022</h5>
                    </Fade>
                </div>
            </CoverWrap>
        </CoverContainer>
    </React.Fragment>
    )
}

export default Banner
