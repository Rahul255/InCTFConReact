import React from 'react'
import './Organizers.css'
import Fade from 'react-reveal/Fade';

function Organizers() {
    return (
        <div className="organizer">
            <div className="content-container">
                <h3 className="title">Organized By</h3>
                <div className="row mx-0">
                    <Fade left>
                        <div className="col-md-4 order-md-1 order-2 text-right amrita">
                            <a href="https://amrita.edu">
                                <img className="img1" alt="Amrita Vishwa Vidyapeetham" src={require('../../images/logos/amritapuri_dark.png').default} />
                            </a>
                            <h4>India's No.1 Ranked Private University</h4>
                            <div className="d-flex justify-content-end">
                                <p>
                                    Amrita Vishwa Vidyapeetham, founded in 1994, within the next 2 decades has emerged among the
                                    leading universities in India, and has been conferred the status of Institute of Eminence by the
                                    Govt. of India. It is ranked as the fourth best university in the NIRF Ranking 2020, and has been
                                    swiftly establishing itself as a world class teaching and research institution.
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade up>
                        <div className="col-md-4 bi0s text-center order-md-2 order-1">
                            <a href="https://bi0s.in">
                                <img className="img1" alt="Team bi0s" src={require('../../images/logos/bi0s_dark.png').default} />
                            </a>
                            <h4>India's No.1 Ranked CTF Hacking Team</h4>
                            <div className="d-flex justify-content-center">
                                <p>
                                    Team bi0s is a community of college student focusing on cyber security,
                                    and actively participating in CTF contests worldwide. For several years now,
                                    team bi0s has consistently been the No.1 CTF team in India. The team
                                    members also actively involve in security research projects, organizing training
                                    programs & CTFs, and developing security tools.
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-md-4 cyber order-md-2 order-1">
                            <a href="https://www.amrita.edu/center/cyber-security">
                                <img className="img1" alt="Team bi0s" src={require('../../images/logos/amrita_cyber.png').default} />
                            </a>
                            <h4>India's Leading CyberSec. Researchers</h4>
                            <div className="d-flex">
                                <p>
                                    Amrita Center for Cyber Security Systems and Networks promote partnership between
                                    industry, academia and the government to foster innovative research and education
                                    in Cyber Security, thus enhancing knowledge, deriving solutions, benefiting society
                                    and mitigating risks. The Center is supported by the Government of India throught
                                    many of its Departments and Mission REACH programs. The Center has been designated
                                    as a Center of Relevance and Excellence (CORE) for Cyber Security in India.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <img className="image" alt="amritapuri vector illustration" draggable="false" src={require('../../images/logos/amritapuri_vector.png').default} />
        </div>
    )
}

export default Organizers
