import React from 'react'
import './About.css'
import image from '../../images/desktop1.png'
import Fade from 'react-reveal/Fade';

function About() {

    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="title_about" >
                            <span className="span">What is</span> InCTFcon <span className="span">?</span>
                        </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <Fade left>
                                <p className="para">
                                    <span className="span2">InCTFCon</span> is an international conference on cybersecurity aimed at inspiring youth to take up careers in cybersecurity and also <strong>provide them the necessary skill training</strong>.
                                    The Conference has many contests, training programs, workshops and keynote sessions.
                                </p>
                                <p className="para">
                                    Our pre-conference national contest (InCTF) boasts a <strong>participant strength of over 15000 students from all over India</strong>, from top institutes such as the IITs and NITs! The big dream behind this conference is that we hope to train a new generation of cybersecurity professionals to safeguard India’s future in the digital atmosphere.</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center " /*style={{border: "2px solid tomato",backgroundColor:"#231F20"}}*/>
                        <div className="col-md-12 ">
                            <Fade right>
                                <img style={{ maxHeight: '100%', maxWidth: '100%' }} draggable="false" src={image} alt="INCTF participant" />
                                <img style={{ maxHeight: '100%', maxWidth: '100%' }} draggable="false" src={image} alt="INCTF participant" />   
                            </Fade>
                        </div>
                    </div>
                    
                </div>
                <br/><br/><br/><br/>
            </div>
        </div>
    )
}

export default About
