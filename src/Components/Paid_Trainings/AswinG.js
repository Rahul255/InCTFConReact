import React from 'react'
import './AswinG.css'

function AswinG() {
    return (
        <div className="arjun">
            <section id="banner">
                <div class="full_slider">
                    <div class="slider" style={{ backgroundImage: `url(require('../../images/banner.jpg').default)` }}>
                        <div class="container prob">
                            <div class="row">
                                <div class="col-12 col-lg-12">
                                    <div class="bnr_text">
                                        <h1> Privilege Escalation</h1>
                                        <p></p>
                                        <div>
                                            {/* <a class="start_course" href="#project">Course Module</a> */}
                                            {/* <a class="start_course" href="#project">
                                                Projects </a> */}
                                            <p class="course_offer">Offer ₹15000  <del className="course_offer_value">₹18000</del></p>
                                            <a class="start_course" href="nothing">Register</a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id="service">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-12 about-text"><br /><br />
                            <div class=" m-auto about-head ">
                                <h3 className="h3">About the Training</h3>
                                <p className="paragr">Advance your knowledge of privilege escalation and learn how hackers gain full control of the systems they target. This highly technical course will teach you how to attack, gain higher privileges, and leverage those privileges to bypass security controls and escalate privileges to gain higher levels of access.</p>
                                <p className="paragr">This course will give you enough knowledge to apply them to the real world. You will leave this course with a concrete understanding of what a hacker wants, how they go about it, and what you can do to secure your environment.</p>
                            </div>
                            {/* <div class=" m-auto about-head ">
                                <h3>What Will You Learn? </h3>
                                <ul>
                                    <li class="one">
                                        Basic electronics and electronic components
                                    </li>
                                    <li class="one">
                                        Learn how to setup Arduino environment and write arduino code
                                    </li>
                                    <li class="one">
                                        Create structured Arduino programs following best practices.
                                    </li>
                                    <li class="one">
                                        Build real world systems with Arduino
                                    </li>
                                    <li class="one">
                                        Build games using the Arduino
                                    </li>
                                    <li class="one">
                                        Become confident to create your own Arduino projects at home
                                    </li>
                                </ul>

                            </div> */}
                        </div>
                        <div className="image-thumb col-12 col-lg-4"><br /><br />
                            <div class=" m-auto about-head text-center">
                                <br /> <br /> <br />
                                <h3 className="h3">Trainer</h3>
                                <h4 className="h4">Aswin M Guptha</h4>

                            </div> <br />
                            <img className="image_paid_trainer" src={require('../../images/trainings/S_Abhishek.png').default} alt="" />
                        </div>

                    </div>

                </div>

            </section>
            <br /><br />
            <section id="project">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 about-text"><br /><br />
                            <div class=" m-auto about-head ">
                                <h3 className="h3">Intended Audience </h3>
                                <p className="paragr">If you have any previous exploitation experience, even a passing one, this course is not for you.
                                    If you have experience, then you can get the Windows specific quirks down on your own without much effort. This course is squarely aimed at people who are absolutely new to exploitation, who haven’t done any buffer overflow exercises or even heard about the same until now.
                                </p>
                                <p className="paragr">Because this is really important, let me tell you one more time.
                                    If you have exploitation experience, this course is not for you (even buffer overflow counts).
                                </p>

                            </div>
                            <div class=" m-auto about-head ">
                                <h3 className="h3">Prerequisites </h3>
                                <p className="paragr">Beginner at exploitation doesn’t mean a beginner at programming. We expect you to have experience in C programming. We won’t be going over the basics of the same in this course. Ofcourse, by experience we don’t mean just knowing how to write a program that spits out factorials in C, you should be comfortable reading, writing and debugging C programs.
                                </p>

                            </div>
                        </div>
                        <div class="col-lg-4 ">
                            <br /><br /><br />
                            <div class=" m-auto about-head ">
                                <h3 className="h3">Course Requirements</h3>
                                <ul>
                                    <li class="two" >
                                        Basic overflow exploits</li>
                                    <li class="two" >
                                        x86 Windows shellcode creation</li>
                                    <li class="two" >
                                        SEH overflow exploit</li>
                                    <li class="two" >
                                        x86 Windows Egghunter creation</li>
                                    <li class="two" >
                                        Writing a custom unicode shellcode encoder</li>
                                    <li class="two" >
                                        Unicode exploitation</li>
                                    <li class="two" >
                                        Return Oriented Programming
                                    </li>
                                </ul>
                            </div>



                        </div>
                    </div>

                </div>
                <br /><br /><br />
                <div class="col-lg-12 text-center">
                    <div class="browse"><a href="nothing">Register Now</a></div>
                </div>

            </section> <br /><br /><br />



        </div>
    );
}

export default AswinG
