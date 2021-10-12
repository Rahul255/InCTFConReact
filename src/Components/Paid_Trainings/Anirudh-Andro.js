import React from 'react'
import './Anirudh-Web.css'
import Accordion from './Accordion';

function AnirudhAndro() {
    const data = [
        {
            name: 'Session Module',
            captain: 'abhi',
            players: [
                {
                    title: 'Module 1 - Modern Web App Security Crash Course',
                    content: 'Bat',
                    items: [
                        'The state of Modern Web App Security',
                        'Modern Web App architecture',
                        ' Introduction to Modern Web Apps',
                        'Modern Web Apps the filesystem',
                        'JavaScript prototypes',
                        'Recommended lab setup tips'
                    ]
                },
                {
                    title: 'Module 2 - Modern Web App frameworks and Tools',
                    content: 'Bat',
                    items: [
                        'Modern Web App frameworks and their components',
                        'Finding vulnerabilities in Modern Web App dependencies',
                        'Common misconfigurations / flaws in Modern Web App applications and frameworks',
                        'Tools and techniques to find security flaws in Modern Web Apps'
                    ]
                },
                {
                    title: 'Module 3 - Finding and fixing Modern Web App vulnerabilities',
                    content: 'Bat',
                    items: [
                        'Identification of the attack surface of Modern Web Apps and general information gathering',
                        'Identification of common vulnerability patterns in Modern Web Apps',
                        'CSRF',
                        'XSS',
                        'Access control flaws',
                        'NOSQL Injection, MongoDB attacks',
                        'SQL Injection',
                        'RCE',
                        'Crypto',
                        'Monitoring data: Logs, Insecure file storage, etc.',
                        'Test your skill with CTF time',
                    ]
                },
                {
                    title: 'Module 4 - Advanced Attacks on Modern Web Apps',
                    content: 'Bat',
                    items: [
                        'Leaking data from memory at runtime',
                        'Prototype Pollution Attack',
                        'From deserialization to RCE',
                        'Server Side Template Injection',
                        'OAuth attacks',
                        'JWT attacks',
                        'Scenarios with CSP',
                        'Scenarios with Angular.js ',
                        'Race conditions',
                        'Sandbox related security',
                        ' Real world case studies',
                        'Advanced Modern Web Apps CTF',
                        'Challenges to practice advanced attacks'
                    ]
                }
            ]

        },
        // {
        //     name: 'Rajasthan Royals',
        //     captain: 'Sanju',
        //     players: [
        //         {
        //             title: 'sanchuutti',
        //             content: 'Bat',
        //             items: [
        //                 'item 1',
        //                 'item 2'
        //             ]
        //         },
        //         {
        //             title: 'thaivattiya',
        //             content: 'Bat/ball ',
        //             items: [
        //                 'item 1',
        //                 'item 2'
        //             ]
        //         }
        //     ]
        // }
    ]
    return (
        <div className="arjun">
            <section id="banner">
                <div class="full_slider">
                    <div class="slider" style={{ backgroundImage: `url(require('../../images/banner.jpg').default)` }}>
                        <div class="container prob">
                            <div class="row">
                                <div class="col-12 col-lg-12">
                                    <div class="bnr_text">
                                        <h1> Hacking Android,
                                            iOS and IoT apps
                                            by Example</h1>
                                        <p></p>
                                        <div>
                                            {/* <a class="start_course" href="#project">Course Module</a> */}
                                            {/* <a class="start_course" href="#project">
                                                Projects </a> */}
                                            <p class="course_offer">Offer ₹20000  <del className="course_offer_value">₹23000</del></p>
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
                                <h3 className="h3">About the Training</h3><br /><br />
                                <p className="paragr">This course is the culmination of years of experience gained via practical penetration
                                    testing of mobile applications as well as countless hours spent in research. We have
                                    structured this course around the OWASP Mobile Security Testing Guide (MSTG) and
                                    relevant items of the OWASP Mobile Application Security Verification Standard
                                    (MASVS), so this course covers and goes beyond the OWASP Mobile Top Ten.</p>
                                <p className="paragr">Please note our courses are 90%+ hands-on, we do not lecture students with boring
                                    bullet points and theories, instead we give you practical challenges and help you solve
                                    them, teaching you how to troubleshoot common issues and get the most out of this
                                    training. As we try to keep both new and advanced students happy, the course is very
                                    comprehensive and we have not met any student able to complete all challenges during
                                    the class, therefore training continues after the course through our frequently updated
                                    training portal</p>
                                {/* <p className="paragr">Modern Web apps share traditional attack vectors and also introduce new opportunities
                                    to threat actors. This course will teach you how to review modern web apps, showcasing Node.js but using techniques that will also work against any other web app platform.
                                    Ideal for Penetration Testers, Web app Developers as well as everybody interested in
                                    JavaScript/Node.js and Modern app stack security.</p> */}

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

                                <h3 className="h3">Trainer</h3>
                                <h4 className="h4">Anirudh Anand</h4>

                            </div> <br />
                            <img className="image_paid_trainer" src={require('../../images/trainings/S_Abhishek.png').default} alt="" />
                        </div>

                    </div>

                </div>

            </section>
            <br /><br />
            {data.map((t) =>
                <section>
                    <div class="container">
                        <div>
                            <h3 className="h3">{t.name}</h3>
                            {/* <h2>{t.captain}</h2> */}
                            <div className="row">
                                {t.players.map((p) =>
                                    <div className="col-12 col-lg-6">
                                        <Accordion {...p} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <section id="project">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 about-text"><br /><br />
                            <div class=" m-auto about-head ">
                                <h3 className="h3">About Trainer</h3>
                                <p className="paragr">Anirudh Anand is a security researcher with a primary focus on Web and Mobile
                                    Application Security. He is currently working as a Senior Security Engineer at CRED and
                                    also Security Trainer at 7asecurity. He has been submitting bugs and contributing to
                                    security tools for over 7 years. In his free time, he participates in CTF competitions along
                                    with Team bi0s (#1 security team in India according to CTFtime). His bounties involve
                                    vulnerabilities in Google, Microsoft, LinkedIn, Zendesk, Sendgrid, Gitlab, Gratipay and
                                    Flipboard.
                                </p>
                                <p className="paragr">Anirudh is an open source enthusiast and has contributed to several OWASP projects
                                    with notable contributions being in OWTF and Hackademic Challenges Project. He has
                                    presented/trained in a multitude of conferences including c0c0n 2019, BlackHat Arsenal
                                    2019, BlackHat Europe Arsenal 2018, HITB Dubai 2018, Offzone Moscow 2018, Ground
                                    Zero Summit Delhi 2015 and Xorconf 2015.
                                </p>

                            </div>
                            <div class=" m-auto about-head ">
                                <h3 className="h3">Prerequisites </h3>
                                <p className="paragr">TThis course has no prerequisites as it is designed to accommodate students with
                                    different skills:
                                </p>
                                <p className="paragr">Advanced students will enjoy comprehensive labs, extra miles and CTF challenges <br /> Less experienced students complete what they can during the class, and can
                                    continue at their own pace from home using the training portal.
                                </p>
                                <p className="paragr">This said, the more you learn about the following ahead of the course, the more you will
                                    get out of the course:

                                </p>
                                <ul>

                                    <li class="two" >
                                        Linux command line basics</li>
                                    <li class="two" >
                                        Android basics
                                    </li>
                                    <li class="two" >
                                        iOS basics
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div class="col-lg-4 ">
                            <br /><br /><br />
                            <div class=" m-auto about-head ">
                                <h3 className="h3">Course Objectives</h3>
                                <ul>
                                    <li class="two" >
                                        This course will take any student and make sure that:</li>
                                    <li class="two" >
                                        The general level of proficiency is much higher than when they came</li>
                                    <li class="two" >
                                        The skills acquired can be immediately applied to mobile app security assessments</li>
                                    <li class="two" >
                                        The student is equipped to defeat common mobile app assessment challenges</li>
                                    <li class="two" >
                                        People who are new to mobile security will learn a lot in this training.</li>
                                    <li class="two" >
                                        Advanced students will come out with enhanced skills and more efficient workflows</li>
                                    <li class="two" >
                                        The skills gained are highly practical and applicable to real-world assessments
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

export default AnirudhAndro
