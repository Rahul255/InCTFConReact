import React from 'react'
import './Abhinad.css'
import Accordion from './Accordion';

const Abhinand = () => {
    const data = [
        {
            name: 'Session Module',
            captain: 'abhi',
            players: [
                {
                    title: 'Module 1',
                    content: 'Bat',
                    items: [
                        'Intro to Android and App Components',
                        'Android Security Architecture',
                        'Android App Components',
                        'Android application structure',
                        'Android Debugger - ADB  ',
                        'Rooting Android devices',
                        'Android Emulator and AVD'
                    ]
                },
                {
                    title: 'Module 2',
                    content: 'Bat',
                    items: [
                        'Reverse Engineering Apps',
                        'Understanding smali',
                        'Native library',
                        'Signing Apps',
                        'Bundled apps '
                    ]
                },
                {
                    title: 'Module 3',
                    content: 'Bat',
                    items: [
                        'Analyzing Android traffic',
                        'Hooking with Frida',
                        'Protection mechanisms and bypassing techniques'
                    ]
                },
                {
                    title: 'Module 4',
                    content: 'Bat',
                    items: [
                        'Attack surface and basic tests',
                        'Data Storage',
                        'Weak Cryptography',
                        'Side Channel Data Leakage',
                        'Insecure Authorization',
                        'Insecure Activities and Intents',
                        'Insecure Broadcast Receivers',
                        'Insecure Services and ContentProvider ',
                        'Insecure Deeplinks ',
                        'Client Side injections',
                        'Memory Corruption issues'
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
                                        <h1> Offensive Android Application Pentesting</h1>
                                        <p></p>
                                        <div>
                                            {/* <a class="start_course" href="#project">Course Module</a> */}
                                            {/* <a class="start_course" href="#project">
                                                Projects </a> */}
                                            <p class="course_offer">Offer ₹12000  <del className="course_offer_value">₹15000</del></p>
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
                                <p className="paragr">This hands-on workshop provides you with the knowledge and best techniques to identify and exploit vulnerabilities in Android applications. It begins with an overview of Android components and reversing engineering techniques before various ways of exploitation techniques. The training will cover OWASP top 10 mobile vulnerabilities and OWASP Mobile Security Testing Guide (OWASP-MSTG) including exploiting local storage, weak cryptography, vulnerable activity components, intents, and broadcast receivers, insecure deeplinks, permission model flaws, memory corruption vulnerabilities, client side injections etc. </p>
                                <p className="paragr">Whether you are completely new to Android security or a cybersecurity professional who want to know more about its current state, the key steps in pentesting Android apps, and to understand the latest attacks and discoveries in this area, this training is for you. Get hands-on experience in doing static and dynamic analysis of Android Application with real work examples. </p>

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
                        <div className="image-thumb col-12 col-lg-4">
                            <div class=" m-auto about-head text-center">
                                <br /> <br />
                                <h3 className="h3">Trainer</h3>
                                <h4 className="h4">Abhinand</h4>

                            </div> <br />
                            <img className="image_paid_trainer" src={require('../../images/trainings/download.jpeg').default} alt="" />
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
                                <h3 className="h3">About the Trainer </h3>
                                <p className="paragr">abx works as a security researcher at Amrita Center for CyberSecurity. He focuses on Android Security and have experience in analyzing Android Application. He had also worked with analyzing a family of malware called stalkerwares, of which he has analyzed and reported various samples of the same. He was an intern at a cybersecurity research lab at National university of Singapore before joining Amrita. Additionally, he is also an open source enthusiast and was a Google Summer of Code student with Wikimedia Foundation.
                                </p>
                                {/* <p className="paragr">Because this is really important, let me tell you one more time.
                                    If you have exploitation experience, this course is not for you (even buffer overflow counts).
                                </p> */}

                            </div>
                            {/* <div class=" m-auto about-head ">
                                <h3 className="h3">Prerequisites </h3>
                                <p className="paragr">Beginner at exploitation doesn’t mean a beginner at programming. We expect you to have experience in C programming. We won’t be going over the basics of the same in this course. Ofcourse, by experience we don’t mean just knowing how to write a program that spits out factorials in C, you should be comfortable reading, writing and debugging C programs.
                                </p>

                            </div> */}
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

export default Abhinand
