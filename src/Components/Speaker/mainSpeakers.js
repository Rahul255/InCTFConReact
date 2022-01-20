import React from 'react';
import styled from "@emotion/styled";
import shortid from "shortid";

const SpeakersContainer = styled.div`
    
    padding: 6vh 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        font-size: calc(1.5rem + 2vw);
        text-align: center;
        color: tomato;
        font-weight: 600;
        padding: 1.5rem 0;
    }
    .scroll-container {
      &::-webkit-scrollbar{
          background: rgba(2,2,2,0.5);
          width: 8px;
      }
      ::-webkit-scrollbar-thumb {
          background: rgba(120,20,150,0.5);
      }
      ::-webkit-scrollbar-thumb:hover {
           background: rgba(120,20,150,0.8);
      }
    }
`

const SpeakerCard = styled.div`
    text-align: center;
    color: #eee;
    padding: 0 0.35rem;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    user-select: none;
    transition: all 0.5s ease;
    border: ${({ isTrainer }) => isTrainer ? `2px solid tomato` : `2px solid tomato`};
    &:hover {
       transform: translateY(-8px);
       transition: all 0.5s ease;
       border-radius: 10px;
       img {
         border-radius: 15px;
         transition: all 0.7s ease;
       }
    }
    img {
        float: left;
        width:  140px;
        height: 150px;
        object-fit: cover;
      border-radius: 10px;
      border: 2px solid white;
      margin-bottom: 1rem;
      transition: all 0.7s ease;
      display: block;
    }
    h3 {
       font-size: calc(0.9rem + 0.15vw);
        color: #fd7e14;
        margin-bottom: 5px;
    }
    h4 {
       font-size: calc(0.75rem + 0.15vw);
       color: #eee;
       margin-bottom: 3px;
    }
    h5 {
       font-size: calc(0.8rem + 0.2vw);
       color: #FFF;
       font-weight: 600;
    }
    .trainer-badge, .speaker-badge {
       display: inline-block;
       padding: 3.5px 10px;
       font-size: calc(0.8rem + 0.25vw);
       border-radius: 5px;
       transform: translateY(-12px);
    }
    .trainer-badge {
        background: tomato;
    }
    .speaker-badge {
         background: tomato;

    }
    .social-media-links {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      a {
          margin-right: 8px;
          i {
            color: #AAA;
            font-size: 24px;
          }
          &:hover {
            i {
              color: white;
            }
          }
        }
    }
`

const ConferenceSpeakers = () => {

    const speakers = [
        {
            "name": "Ajay Prakash Sawhney",
            "designation": "Secretary. Ministry of Electronics & IT",
            "isTrainer": true,
            "speakType": "Keynote",
            "company": "Government of India",
            "image": require('../../images/speakers/Ajay-Prakash-Sawhney.jpeg').default
        },
        {
            "name": "Lt. General (Dr) Rajesh Pant (retd.)",
            "designation": "National Cyber Security Coordinator",
            "isTrainer": true,
            "speakType": "Keynote",
            "company": "National Security Council Secretariat of India",
            "image": require("../../images/speakers/rajeshPant.jpg").default,
        },
        {
            "name": "Arundhati Bhattacharya",
            "designation": "Chairperson and Chief Executive Officer ",
            "isTrainer": true,
            "speakType": "Keynote",
            "company": "Salesforce India",
            "image": require("../../images/speakers/Arundhati-Bhattacharya.jpg").default,
        },
        {
            "name": "Shri. Atanu Chakraborty",
            "designation": "Chairman",
            "company": "HDFC Bank",
            "image": require("../../images/speakers/HDFC-Chairman.jpg").default,
        },
        // {
        //     "name": "Prof. Krishnashree Achuthan",
        //     "designation": "Dean & Director, Centre for Cybersecurity Systems & Networks",
        //     "company": "Amrita Vishwa Vidyapeetham",
        //     "image": require("../../images/speakers/krishnashree.jpg").default,
        // },
        {
            "name": "Joshua Brown",
            "designation": "Vice President – Global Chief Information Security Officer",
            "company": "H&R Block",
            "image": require("../../images/speakers/Joshua-Brown.jpg").default,
        },
        {
            "name": "Chris Caren",
            "designation": "CEO",
            "company": "Turnitin",
            "image": require("../../images/speakers/Chris-Caren.jpeg").default,
        },
        {
            "name": "Suvabrata Sinha ",
            "designation": "Chief Information Security Officer",
            "company": "NXP Semiconductors",
            "image": require("../../images/speakers/Suvabrata-Sinha.jpg").default,
        },
        {
            "name": "Dotan Sagi",
            "designation": "Founder & CEO ",
            "company": "Be-Strategic Solutions",
            "image": require("../../images/speakers/DotanSagi_BeST.jpg").default,
        },
        // {
        //     "name": "Madhusudhan H. N",
        //     "designation": "Senior Security Engineering Manager ",
        //     "company": "VMware",
        //     "image": require("../../images/speakers/madhu.png").default,
        // },
        {
            "name": "Yogi Kapur",
            "designation": "Director, SOC",
            "company": "Salesforce",
            "image": require("../../images/speakers/YogiPhoto.jpg").default,
        },
        {
            "name": "Sandeep Shukla",
            "designation": "Professor",
            "company": "Indian Institute of Technology Kanpur",
            "image": require('../../images/speakers/Prof_Sandeep_Shukla.jpg').default
        },
        {
            "name": "Atul Agarwal",
            "designation": "CEO",
            "company": "Secfence",
            "image": require("../../images/speakers/atul-agarwal.jpg").default,
        },

        {
            "name": "Srinivas Bharadwaj",
            "designation": "Lead Founder",
            "company": "Jnana Marga Technologies",
            "image": require('../../images/speakers/srinivas-final.jpg').default,
        },
        {
            "name": "Dr. Amir Schreiber",
            "designation": "Senior Director",
            "company": "Bank Hapoalim",
            "image": require("../../images/speakers/amir.jpeg").default,
        },
        {
            "name": "Lavi Lazarovitz",
            "designation": "Head of Research",
            "company": "Cyberark",
            "image": require("../../images/speakers/Lazarovitz_CyberArk.jpg").default,
        },
        {
            "name": "Richard Chow",
            "designation": "University Research Manager and Scientist",
            "company": "Intel",
            "image": require("../../images/speakers/RichardChow.jpg").default,
        },
        {
            "name": "Manoj Abraham",
            "designation": "Additional Director General of Police",
            "company": "Kerala Police",
            "image": require('../../images/speakers/Manoj-Abraham.jpeg').default
        },
        {
            "name": "Rushi",
            "designation": "Senior Program Manager",
            "company": "Ministry of Home Affairs",
            "image": require('../../images/speakers/rushi.jpg').default,
        },
        // {
        //     "name": "Prof. Raghu Raman",
        //     "designation": "Dean, Amrita School of Business",
        //     "company": "Amrita Vishwa Vidyapeetham",
        //     "image": require("../../images/speakers/RaghuRaman.jpg").default,
        // },
        {
            "name": "Uri Shai",
            "designation": "",
            "company": "Independent Consultant",
            "image": require("../../images/speakers/Uri-Shai.jpg").default,

        },
        {
            "name": "Aniket Amdekar",
            "designation": "General Manager - Cyber Defence Education",
            "company": "Great Learning",
            "image": require("../../images/speakers/Aniket-Amdekar.jpg").default,

        },
        {
            "name": "Prajeesh Prathap",
            "designation": "Head of Platform and Operations",
            "company": "IT&Care",
            "image": require("../../images/speakers/prajeesh-Prathap.jpg").default,
        },
        {
            "name": "Sam Paterson",
            "designation": "IR Analyst",
            "company": "MDSec",
            "image": require("../../images/speakers/sam.jpg").default,
        },
        {
            "name": "Mini TT",
            "designation": "Security Technologist",
            "company": "Dell",
            "image": require("../../images/speakers/Mini-TT.jpeg").default,
        },
        // {
        //     "name": "Vipin Pavithran",
        //     "designation": "Founder & Chief Mentor of Team bi0s, amFOSS,Team Shakti, InCTF & InCTFj",
        //     "company": "Amrita University",
        //     "image": require('../../images/speakers/vipinpavithran.jpg').default
        // },
        {
            "name": "Ramesh Kumar",
            "designation": "Senior Engineer",
            "company": "CrowdStrike",
            "image": require("../../images/speakers/Ramesh-kumar.jpeg").default,
        },
        {
            "name": "Ajit Dhumale",
            "designation": "Senior Engineer",
            "company": "CrowdStrike",
            "image": require("../../images/speakers/AjitDhumale-Saurabh-Gawas.jpg").default,
        },
        {
            "name": "Dr. Altaf Shaik",
            "designation": "Senior Researcher",
            "company": "Technical University of Berlin",
            "image": require("../../images/speakers/altafshaik.jpeg").default,
        },
        {
            "name": "Adv. Prem Kamath",
            "designation": "",
            "company": "Lawyer & Cyber Law Consultant",
            "image": require('../../images/speakers/Prem-Kamath .jpeg').default
        },
        {
            "name": "Dr. Varun Kapoor",
            "designation": "",
            "company": "IPS",
            "image": require("../../images/speakers/varun-kapoor.jpg").default
        },

        {
            "name": "Prasad Patibandla",
            "designation": "",
            "company": "Cyber Forensics investigation, Cyber Law consultant",
            "image": require('../../images/speakers/Prasad-Patibandla.jpeg').default
        },
        {
            "name": "Britto Sidhan",
            "designation": "General Manager – Global Security Lab",
            "company": "Schneider Electric",
            "image": require("../../images/speakers/britto.jpg").default,
        },
        {
            "name": "Sagar Gulhane",
            "designation": "Sr. Threat Research Engineer",
            "company": "CrowdStrike",
            "image": require("../../images/speakers/Sagar_Gulhane.jpg").default,
        },

        {
            "name": "Raphael de la Vienne",
            "designation": "Technical Security Officer",
            "company": "IT&Care",
            "image": require("../../images/speakers/Raphael.jpg").default,
        },
        {
            "name": "Nishaanth G",
            "designation": "Security Researcher",
            "company": "MDSec",
            "image": require("../../images/speakers/NishaanthSmall.jpg").default,
        },
        {
            "name": "Akshay Jain",
            "designation": "Security Researcher",
            "company": "PhonePe",
            "image": require("../../images/speakers/AkshyJainSmall.jpg").default,
        },
        {
            "name": "Dr. M. Sethumadhavan",
            "designation": "Head - Cybersecurity, Professor",
            "company": "Amrita Vishwa Vidyapeetham",
            "image": require("../../images/speakers/Sethumadhavan.jpg").default,
        },
        {
            "name": "Dr. Bhavani Rao",
            "designation": "Dean, Social Sciences & Humanities",
            "company": "Amrita Vishwa Vidyapeetham",
            "image": require('../../images/speakers/Bhavani-Rao.jpg').default
        },
        {
            "name": "Dr. Reena Sabin",
            "designation": "Director",
            "company": " Specialists Hospital",
            "image": require('../../images/speakers/Reena-Bodhini.jpeg').default
        },
        {
            "name": "Dr. Bindu Menon",
            "designation": "Professor and Head Psychiatry and Behavior Medicine",
            "company": "Amrita Hospital",
            "image": require("../../images/speakers/bindu-menon.jpg").default
        },
        
        {
            "name": "Siddharth Pillai",
            "designation": "Co-Founder & Director",
            "company": "AarambhIndia.org",
            "image": require('../../images/speakers/Sidharth-Pillai.png').default
        },
        {
            "name": "Ganesan Kumaresan",
            "designation": "Child Protection Specialist",
            "company": "UNICEF",
            "image": require('../../images/speakers/Ganesan-Kumaresan.jpeg').default
        },

        // {
        //     "name": "Zoey Garvey",
        //     "isTrainer": true,
        //     "designation": "Consultant Software Engineer",
        //     "company": "Federal Reserve Bank of San Francisco",
        //     "image": require('../../images/speakers/zoey.jpg'),
        //     "links": {
        //         "linkedin": "https://www.linkedin.com/in/zoey-garvey-66982b34/"
        //     }
        // },
        // {
        //     "name": "Yarden Shafir",
        //     "isTrainer": true,
        //     "designation": "Software Engineer",
        //     "company": "Crowdstrike",
        //     "image": require('../../images/speakers/yarden_shafir.jpg'),
        //     "links": {
        //         "twitter": "https://twitter.com/yarden_shafir?lang=en"
        //     }
        // },
        // {
        //     "name": "Arya M Shankar",
        //     "isTrainer": true,
        //     "designation": "Product & Solution Security Professional",
        //     "company": "Siemens",
        //     "image": require('../../images/speakers/arya.JPG')
        // },
    ];

    return <SpeakersContainer id="speakers">
        <div className="row mx-0">
            <div className="col-12 px-2 py-3 text-center">
                {/* <Fade left> */}
                <h2>Speakers</h2>
                {/* </Fade> */}
            </div>

            {speakers.map((s, index) =>
                <div key={shortid.generate()} className="col-xl-2 col-lg-3 col-md-4 col-6 p-2">
                    <SpeakerCard isTrainer={s.isTrainer}>
                        <div>
                            {s.isTrainer ?
                                <div className="trainer-badge">{s.speakType}</div>
                                : <div className="speaker-badge">Speaker</div>
                            }
                            <div className="d-flex justify-content-center">
                                {s.image && <img src={s.image} alt={s.name} draggable="false" />}
                            </div>
                            <h3>{s.name}</h3>
                        </div>
                        {s.company && <div>
                            <h4>{s.designation}</h4>
                            <h5>{s.company}</h5>
                        </div>}
                        {/*{s.links &&*/}
                        {/*<div className="social-media-links">*/}
                        {/*    {s.links?.twitter &&*/}
                        {/*    <a href={s.links.twitter} rel="noreferrer nofollow" target="_blank">*/}
                        {/*        <i className="fab fa-twitter" />*/}
                        {/*    </a>}*/}
                        {/*    {s.links?.linkedin &&*/}
                        {/*    <a href={s.links.linkedin} rel="noreferrer nofollow" target="_blank">*/}
                        {/*        <i className="fab fa-linkedin" />*/}
                        {/*    </a>}*/}
                        {/*    {s.links?.website &&*/}
                        {/*    <a href={s.links.website} rel="noreferrer nofollow" target="_blank">*/}
                        {/*        <i className="far fa-globe" />*/}
                        {/*    </a>}*/}
                        {/*</div>}*/}
                    </SpeakerCard>
                </div>
            )}
        </div>
    </SpeakersContainer>

};

export default ConferenceSpeakers;
