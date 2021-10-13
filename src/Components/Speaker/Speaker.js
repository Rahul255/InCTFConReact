import React, { useState } from 'react'
import Abhinand from '../Paid_Trainings/Abhinad'
import { PopUp } from '../Paid_Trainings/PopUp'
import './Speaker.css'


function Speaker() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="speaker">
            <div className="container">
                <div className="section_title">
                    <h3 className="title" style={{ color: 'chocolate' }}>
                        InCTFcon Trainings
                    </h3>
                </div>

                <div className="section_title ">
                    <h5 className="title" style={{ color: 'white', fontSize: '40px' }}>
                        Paid Trainings
                    </h5>
                </div>
                <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Windows Exploitation: Beginner’s Track </h2>
                                        <h5 style={{ color: 'chocolate' }}> Arjun TU</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="browse_link"><a href="/session/windows-exploitation-beginner’s-track">View Session Details</a></div>
                                    {/* <div class="p-2">
                                        <a href="/session/windows-exploitation-beginner’s-track" style={{textDecoration: 'none'}} class="browse">
                                            View Session Details</a>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Hacking Modern
                                            Web apps: Master
                                            the Future of Attack
                                            Vectors </h2>
                                        <h5 style={{ color: 'chocolate' }}>  Anirudh Anand</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="browse_link"><a href="/session/hacking-modern-web-apps-master-the-future-of-attack-vector">View Session Details</a></div>
                                    {/* <div class="p-2">
                                        <a href="/session/windows-exploitation-beginner’s-track" style={{textDecoration: 'none'}} class="browse">
                                            View Session Details</a>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Offensive Android Application Pentesting</h2>
                                        <h5 style={{ color: 'chocolate' }}> Abhinand</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="browse_link"><a href="/session/offensive-android-application-pentesting">View Session Details</a></div>
                                    {/* <div class="p-2">
                                        <a href="/session/windows-exploitation-beginner’s-track" style={{textDecoration: 'none'}} class="browse">
                                            View Session Details</a>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Hacking Android,
                                            iOS and IoT apps
                                            by Example</h2>
                                        <h5 style={{ color: 'chocolate' }}>  Anirudh Anand</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="browse_link"><a href="/session/hacking-android-iOS-and-IoT-apps-by-example">View Session Details</a></div>
                                    {/* <div class="p-2">
                                        <a href="/session/windows-exploitation-beginner’s-track" style={{textDecoration: 'none'}} class="browse">
                                            View Session Details</a>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Privilege Escalation</h2>
                                        <h5 style={{ color: 'chocolate' }}> Aswin M Guptha</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    {/* <div class="browse_link"><button className="button_click" onClick={() => setOpen(true)}>
                                        Open Popup
                                    </button></div> */}
                                    <div class="browse_link"><a href="/session/privilege-escalation">View Session Details</a></div>
                                    {/* <div class="p-2">
                                        <a href="/session/windows-exploitation-beginner’s-track" style={{textDecoration: 'none'}} class="browse">
                                            View Session Details</a>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Privilege Escalation</h2>
                                        <h5 style={{ color: 'chocolate' }}> Aswin M Guptha</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="browse_link"><a href="/session/privilege-escalation">View Session Details</a></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <PopUp
                    isOpen={isOpen}
                    onClose={() => setOpen(false)}
                >
                    <Abhinand />
                </PopUp>
                {/* <div className="section_title ">
                    <h5 className="title" style={{ color: 'white', fontSize: '40px' }}>
                        Free Trainings
                    </h5>
                </div>

                <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Introduction to Cyber Forensics </h2>
                                        <h5 style={{ color: 'chocolate' }}> K.Sridevi <span className="span" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>&</span> S Abhishek</h5>
                                    </div>
                                    <div className="row">
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/sridevi.png').default} alt="" />
                                        </div>
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/S_Abhishek.png').default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <br /><br />
                                <div className="col-lg-6">
                                    <br />
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This training will introduce you to the basics of Cyber Forensics. We will be primarily focusing on File Forensics and Network Forensics which will be helpful for beginners while approaching CTF challenges.</p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}><b>K Sridevi</b> is a 3rd year undergraduate in Amrita School of Engineering pursuing her Electronics And Communication Engineering degree. Currently working on Digital Forensics as a part of Team bi0s and Team Shakti.</p>
                                        <ul className="social-icons" >
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>

                                        <p style={{ color: 'white' }}><b>S Abhishek</b> aspire to receive a Bachelor’s Degree in Computer Science and Engineering from Amrita Vishwa Vidyapeetham. He currently working on Digital Forensics as a part of Team bi0s.</p>
                                        <ul className="social-icons" >
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Introduction to Cyber Forensics </h2>
                                        <h5 style={{ color: 'chocolate' }}>S Abhishek</h5>
                                    </div>
                                    <div className="image-thumb">
                                        <img src={require('../../images/trainings/S_Abhishek.png').default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This training will introduce you to the basics of Cyber Forensics. We will be primarily focusing on File Forensics and Network Forensics which will be helpful for beginners while approaching CTF challenges.</p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>I aspire to receive a Bachelor’s Degree in Computer Science and Engineering from Amrita Vishwa Vidyapeetham. I’m currently working on Digital Forensics as a part of Team bi0s.</p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Introduction to Cyber Forensics </h2>
                                        <h5 style={{ color: 'chocolate' }}>Pranav Nair </h5>
                                    </div>
                                    <div className="image-thumb">
                                        <img src={require('../../images/rahul.jpg').default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This training will introduce you to the basics of Cyber Forensics. We will be primarily focusing on File Forensics and Network Forensics which will be helpful for beginners while approaching CTF challenges.</p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>3rd year undergraduate in Amrita School of Engineering pursuing my Electronics And Computer Engineering degree. Currently working on Digital Forensics as a part of Team bi0s.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Intro to Gameboy and NES ROM Reversing </h2>
                                        <h5 style={{ color: 'chocolate' }}>Gourav Singh Bajeli <span className="span" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>&</span> Adhithya Suresh Kumar</h5>
                                    </div>
                                    <div className="row">
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/sridevi.png').default} alt="" />
                                        </div>
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/Adhithya_Suresh_Kumar.png').default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This session will walk you through some basics of reversing retro game ROMs like Gameboy and NES using the plugins in ghidra and the respective debuggers available. We will be using some previously released CTF challenges.</p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>
                                            <b>Gourav Singh Bajeli</b> is a 3rd year undergraduate in Amrita School of Engineering. Pursuing his degree in BTech CSE with AI. he have been an active member of Teambi0s since his first year and work in Reverse Engineering.</p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                        <p style={{ color: 'white' }}><b>Adhithya Suresh Kumar</b> also known as AmunRha. 2nd year CS undergrad at Amrita School of Engineering. he loves playing CTFs and currently doing RE with team bi0s.</p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Intro to Gameboy and NES ROM Reversing </h2>
                                        <h5 style={{ color: 'chocolate' }}>Adhithya Suresh Kumar</h5>
                                    </div>
                                    <div className="image-thumb">
                                        <img src={require('../../images/rahul.jpg').default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This session will walk you through some basics of reversing retro game ROMs like Gameboy and NES using the plugins in ghidra and the respective debuggers available. We will be using some previously released CTF challenges.</p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>Also known as AmunRha. 2nd year CS undergrad at Amrita School of Engineering. I love playing CTFs and currently doing RE with team bi0s.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Vulnerabilities In Real World Crypto </h2>
                                        <h5 style={{ color: 'chocolate' }}>Vishvesh Rao</h5>
                                    </div>
                                    <div className="image-thumb">
                                        <img src={require('../../images/trainings/vishvesh.png').default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This session will focus on some real-world crypto vulnerabilities. Starting with an intro to jwt, we will emphasize crypto-related JSON vulnerabilities, especially those that help in forging tokens and manipulating certain key-value pairs present in jwt that will help verify tokens. All attacks will have a demo in the form of CTF-style challenges. </p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>I am a 3rd year undergraduate at Amrita School of Engineering, pursuing an undergraduate degree in Btech-CSE. I have been an active member of Team bi0s since my first year and work in cryptography.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Crypto for Beginners </h2>
                                        <h5 style={{ color: 'chocolate' }}>Alekh Avinash <span className="span" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>&</span> Sahith M</h5>
                                    </div>
                                    <div className="row">
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/Alekh_Avinash.png').default} alt="" />
                                        </div>
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/sahith_m.png').default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This training will introduce you to the basics of cryptography. We will be focusing on Exclusive OR, Base64, ROT13, and other simple cryptographic topics, which will be helpful for beginners attempting CTF challenges.
                                        </p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}><b>Alekh Avinash</b> Aka xxMajinxx, 3rd year CS undergrad at Amrita Engineering College and a member of Bi0s. One among the best undergrad Cryptographers in India (find him @ CryptoHack ;). He is interested in number theory and digital signatures.</p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                        <p style={{ color: 'white' }}><b>Sahith M</b> is a first-year undergraduate in Amrita School of Engineering, pursuing a degree in Computer Science.</p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Crypto for Beginners</h2>
                                        <h5 style={{ color: 'chocolate' }}>Sahith M</h5>
                                    </div>
                                    <div className="image-thumb">
                                        <img src={require('../../images/trainings/sahith_m.png').default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This training will introduce you to the basics of cryptography. We will be focusing on Exclusive OR, Base64, ROT13, and other simple cryptographic topics, which will be helpful for beginners attempting CTF challenge</p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>A first-year undergraduate in Amrita School of Engineering, pursuing a degree in Computer Science.</p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Intro to Binary Exploitation </h2>
                                        <h5 style={{ color: 'chocolate' }}>Hrishikesh Pankaj</h5>
                                    </div>
                                    <div className="image-thumb">
                                        <img src={require('../../images/rahul.jpg').default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>The training will provide a brief introduction to binary exploitation, exploitation ideas, and identifying some common bugs using some CTF challenges as examples.</p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>Aka PwnSolo ,3rd year undergraduate in Amrita School of Engineering, pursuing an undergraduate degree in Computer Science. An active member of team bi0s and currently working on binary exploitation </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Intro to Binary Exploitation </h2>
                                        <h5 style={{ color: 'chocolate' }}>Adhithya Sree Mohan <span className="span" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>&</span> Nikhil Reddy</h5>
                                    </div>
                                    <div className="row">
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/Adhithya_Sree_Mohan.png').default} alt="" />
                                        </div>
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/nikhil_reddy.png').default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>The training will provide a brief introduction to binary exploitation, exploitation ideas, and identifying some common bugs using some CTF challenges as examples.</p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}><b>Adhithya Sree Mohan</b> is 2nd year CSE undergrad in Amrita School of Engineering. Pwner pwning with Team Shakti and bi0s.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                        <p style={{ color: 'white' }}><b>Nikhil Reddy</b> an Electrical and Computer Engineering Undergrad at Amrita Vishwa Vidyapeetham, Amritapuri.Currently doing Binary Exploitation with Team bi0s.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Intro to Binary Exploitation </h2>
                                        <h5 style={{ color: 'chocolate' }}>Nikhil Reddy</h5>
                                    </div>
                                    <div className="image-thumb">
                                        <img src={require('../../images/rahul.jpg').default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>The training will provide a brief introduction to binary exploitation, exploitation ideas, and identifying some common bugs using some CTF challenges as examples.</p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>I'm an Electrical and Computer Engineering Undergrad at Amrita Vishwa Vidyapeetham, Amritapuri.Currently doing Binary Exploitation with Team bi0s.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Introduction to the Web </h2>
                                        <h5 style={{ color: 'chocolate' }}>Srividhya Vasanth</h5>
                                    </div>
                                    <div className="image-thumb">
                                        <img src={require('../../images/trainings/download.jpeg').default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This training would serve as an introductory session to the wide world of web. Concepts such as the architecture of web, client and server-side, user identification using cookies, HTTP requests and the various kinds of responses, Same-Origin Policy, and Intro to SQL would be discussed in this training.
                                        </p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>I’m a first-year undergraduate student at Amrita School of Engineering and am pursuing a degree in Computer Science and Engineering. I’m part of Team Bi0s and Team Shakti and am currently focusing on web exploitation.</p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Exploring Web Exploitation Techniques </h2>
                                        <h5 style={{ color: 'chocolate' }}>Sayooj B Kumar <span className="span" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>&</span> Yadhu Krishna M</h5>
                                    </div>
                                    <div className="row">
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/Sayooj_B_Kumar.png').default} alt="" />
                                        </div>
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/Yadhu_Krishna_M.png').default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>The training will cover basic web exploitation techniques such as SQL Injection, Local file inclusion, Cross-site scripting attacks, and Cross-site request forgery (CSRF) attacks.
                                        </p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}><b>Sayooj B Kumar</b> is a 3rd-year undergraduate in Amrita School of Engineering, pursuing an undergraduate degree in Computer Science and Engineering. He has been an active member of Teambi0s for the past couple of years, and he Focus on Web Exploitation.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                        <p style={{ color: 'white' }}><b>Yadhu Krishna M</b> is a third-year undergraduate at Amrita School of Engineering, Amritapuri pursuing a Bachelor of Technology in Computer Science and Engineering. He has been an active member of team bi0s for the past couple of years. His main interests are in the field of web exploitation and penetration testing.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Exploring Web Exploitation Techniques</h2>
                                        <h5 style={{ color: 'chocolate' }}>Yadhu Krishna M</h5>
                                    </div>
                                    <div className="image-thumb">
                                        <img src={require('../../images/rahul.jpg').default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>The training will cover basic web exploitation techniques such as SQL Injection, Local file inclusion, Cross-site scripting attacks, and Cross-site request forgery (CSRF) attacks.
                                        </p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>I am a third-year undergraduate at Amrita School of Engineering, Amritapuri pursuing a Bachelor of Technology in Computer Science and Engineering. I have been an active member of team bi0s for the past couple of years. My main interests are in the field of web exploitation and penetration testing.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Introduction to Reverse Engineering </h2>
                                        <h5 style={{ color: 'chocolate' }}>Abhishek Barla <span className="span" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>&</span> CH Revathi</h5>
                                    </div>
                                    <div className="row">
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/abhishek_barla.png').default} alt="" />
                                        </div>
                                        <div className="image-thumb col-6">
                                            <img src={require('../../images/trainings/Revathi.png').default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This session will focus on the basics of Reversing. Starting with x86 Assembly, the memory layout of a program, function calls, program stack, debugging an assembly program in GDB
                                        </p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}><b>Abhishek Barla</b> 3rd year undergraduate in Amrita School of Engineering, pursuing his degree in Computer Science and Engineering. Member of Team Bi0s, currently working on Reverse engineering.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                        <p style={{ color: 'white' }}><b>CH Revathi</b> is a 3rd year undergraduate at Amrita School of Engineering pursuing her Electronics And Computer Engineering degree and currently working on Reverse engineering as part of team bi0s and Team Shakti.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row trainer_row">
                    <div className="col-lg-12">
                        <div className="trainer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Introduction to Reverse Engineering </h2>
                                        <h5 style={{ color: 'chocolate' }}>Ch. Revathi </h5>
                                    </div>
                                    <div className="image-thumb">
                                        <img src={require('../../images/rahul.jpg').default} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Training</h4>
                                        <p style={{ color: 'white' }}>This session will focus on the basics of Reversing. Starting with x86 Assembly, the memory layout of a program, function calls, program stack, debugging an assembly program in GDB
                                        </p>

                                    </div>
                                    <div className="down-content">
                                        <h4 style={{ color: '#ed563b' }}>About the Author</h4>
                                        <p style={{ color: 'white' }}>3rd year undergraduate at Amrita School of Engineering pursuing my Electronics And Computer Engineering degree and currently working on Reverse engineering as part of team bi0s and Team Shakti.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://twitter.com/inctf"><i className="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <br /><br /><br />
        </div>
    )
}

export default Speaker
