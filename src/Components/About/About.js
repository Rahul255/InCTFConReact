import React from 'react'
import './About.css'
import image from '../../images/desktop.png'
import Fade from 'react-reveal/Fade';

function About() {

    return (
        <div className="about">
            <div className="container">
            <div className="row">
            <div className="col-md-12">
                    <h3 className="title_about" >
                        What is InCTFcon
                    </h3>
                </div>
            </div>

                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <Fade left>
                                <p className="para">
                                    InCTFCon is a global conference focused on inspiring, training, and upskilling youth in cybersecurity.
                                    InCTFCon includes keynote sessions, training, contests, and workshops. Our pre-conference National contest
                                    - InCTF has attracted over 15,000 students from nearly 150 premier institutions, including IITs and NITs,
                                    from 23 states taking part.</p>
                                <p className="para">
                                    By doing this we hope to train a new generation of youngsters to be more actively engaged in the field and
                                    enter the cybersecurity workforce.</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                        <div className="col-md-12 ">
                            <Fade right>
                                <img style={{ maxHeight: '100%', maxWidth: '100%' }} draggable="false" src={image} alt="INCTF participant" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
