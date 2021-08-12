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
                                    InCTFCon is an international conference on cybersecurity aimed at inspiring youth to take up careers in cybersecurity and also provide them the necessary skill training. 
                                    The Conference has many contests, training programs, workshops and keynote sessions. 
                                    </p>
                                <p className="para">
                                Our pre-conference national contest (InCTF) boasts a participant strength of over 15000 students from all over India, from top institutes such as the IITs and NITs! The big dream behind this conference is that we hope to train a new generation of cybersecurity professionals to safeguard India’s future in the digital atmosphere.</p>
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
