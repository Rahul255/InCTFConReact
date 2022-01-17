import React, { useState, useRef } from 'react';

import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


import SideBar from "./Sidebar";

const Header = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5000;
    align-items: center;
    justify-content: space-between;
    background: rgb(20,20,30);
    border-bottom: 1px solid white;
    height: 74px;
    img {
        height: 70px;
        &:hover {
            filter: brightness(10%) invert(1);
        }
    }
      button {
        background: none!important;
        border: none;
        i {
          font-size: 32px;
          color: white;
          padding-right: 20px;
        }
      }
    nav {
       a {
          font-size: 16px;
          color: white;
          padding: 8px 16px;
          text-decoration: none!important;
          &:hover {
            color: #f07008;
          }
       }
    }
    .register-button {
        padding: 10px 15px;
        border-radius: 3px;
        border: 2px solid #666;
        color: #EEE;
        text-decoration: none!important;
        transition: all 0.5s linear;
        &:hover {
           color: #F50057;
           transition: all 0.5s linear;
        }
        margin-right: 5px;
    }
    .social-icon {
        color: #999;
        font-size: 20px;
        padding: 0 12px;
        text-decoration: none!important;
        &:hover {
           color: #F50057;
           transition: all 0.5s linear;
        }
    }
`;



const Topbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const topbarRef = useRef()

    const onOpen = () => {
        const targetElement = document.querySelector(".app");
        disableBodyScroll(targetElement);
        setShowMenu(true);
    };

    const onClose = () => {
        setShowMenu(false);
        clearAllBodyScrollLocks();
    };



    return (<React.Fragment>
        <Header ref={topbarRef}>
            <div className="row w-100 mx-0">
                <div className="col-4 col-md-3 d-flex justify-content-md-center px-3">
                    <a href="/">
                        <img className="image" height="30px" draggable="false" width="auto" src={require('../../images/logomain.png').default} alt="Team Shakti" />
                    </a>
                </div>
                <div className="col-8 d-none d-md-flex justify-content-md-end align-items-center">
                    <nav>
                        {/* <Fade delay={0}>
                            <a className="newone" href="/">Home</a>
                        </Fade> */}
                        {/* <Fade delay={100}>
                            <a className="newone" href="/about">About</a>
                        </Fade> */}
                        {/* <Fade delay={200}>
                            <a className="newone" href="/trainings">Trainings</a>
                        </Fade> */}
                        <Fade delay={300}>
                            <a className="newone" href="/speakers">Speakers</a>
                        </Fade>
                        <Fade delay={400}>
                            <a className="newone" href="/schedule">Schedule</a>
                        </Fade>
                        <Fade delay={500}>
                            <a className="newone" href="/sponsors">Sponsors</a>
                        </Fade>
                        <Fade delay={600}>
                            <a className="newone" href="/promote">Promote</a>
                        </Fade>
                    </nav>
                    <Fade left>
                        <a
                            className="register-button" target="_blank" rel="noreferrer nofollow"
                            href="https://forms.gle/a9gPwADoyKcLkp5c7"
                        >
                            Register 
                        </a>
                    </Fade>
                </div>
                <div className="col-8 d-flex d-md-none align-items-center justify-content-end px-2">
                    <button onClick={onOpen}>
                        <i class="fa fa-bars text-light color" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="col-3 d-none d-md-flex align-items-center">

                    {/* {socialMedia.map((s, index) =>
                        <Fade right delay={index*200}>
                            <a
                                href={s.url}
                                target="_blank" rel="nofollow noreferrer"
                                className="social-icon"
                                title={s.title}
                                aria-label={s.title}
                            >
                                <i className={s.icon} aria-hidden="true" />
                            </a>
                        </Fade>
                    )} */}
                </div>
            </div>
        </Header>
        {showMenu && <SideBar onClose={onClose} />}
    </React.Fragment>);
};

export default Topbar;