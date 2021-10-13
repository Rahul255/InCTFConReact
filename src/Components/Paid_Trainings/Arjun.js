import React from 'react'
import './Arjun.css'

function Arjun() {
    return (
        <div className="arjun">
            <section id="banner">
                <div class="full_slider">
                    <div class="slider" style={{ backgroundImage: `url(require('../../images/banner.jpg').default)` }}>
                        <div class="container prob">
                            <div class="row">
                                <div class="col-12 col-lg-12">
                                    <div class="bnr_text">
                                        <h1> Windows Exploitation: Beginner’s Track</h1>
                                        <p></p>
                                        <div>
                                            {/* <a class="start_course" href="#project">Course Module</a> */}
                                            {/* <a class="start_course" href="#project">
                                                Projects </a> */}
                                            <p class="course_offer">Offer ₹7000  <del className="course_offer_value">₹10000</del></p>
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
                                <p className="paragr">Windows is one of the most popular OS’s (user side, not server side) and it’s not going away anytime soon. Windows exploitation has some quirks of its own, but the fundamentals of exploitation and the skills required is almost the same across OS’s (well most OS’s) and therefore you can learn or practise Linux exploitation and then pick up on the Windows specific details as required.</p>
                                <p className="paragr">This training is an alternative, a way in which you can start your exploitation from Windows itself. Modern Windows has a great number of exploit mitigation mechanisms present and it might be difficult to follow outdated public guides while this training looks at all the exploitation mechanisms in the W10 environment (why they work and why some things don’t work). (Although W11 is the future, we won’t be looking at it now) We also will only be focusing on x86 (32bit) programs and exploits in this course (although we might touch upon some x86-64 things, that won’t be our focus)</p>
                                <p className="paragr">We are also going to do most things manually without depending on many tools (even though it might be easier, tools obscure some details from you) so that the fundamentals are really hammered home.</p>
                                <p className="paragr">The training will be done live, across 7 days, in 2 hour slots starting around 6:00 PM IST and ending around 8:00 PM IST.</p>

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
                                <h4 className="h4">Arjun TU</h4>

                            </div> <br />
                            <img className="image_paid_trainer" src={require('../../images/trainings/arjun-tu.png').default} alt="" />
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
                                <h3 className="h3">Topics Covered</h3>
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

export default Arjun
