import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";
import shortid from "shortid";

import SpeakerCard from "./SpeakerCard";


const TrainingModuleWrap = styled.section`
    background: #112;
    color: #eee;
    min-height: 45vh;
    padding: 5vh 2vw;
    h2 {
       font-size: calc(1.5rem + 1.5vw);
       font-weight: 600;
       margin-bottom: 0.75rem;
       color: tomato;
       text-align: center;
    }
    p {
      color: #EEE;
      font-size: 14px;
      line-height: 1.5;
      padding: 0.5rem;
      margin-bottom: 8px;
   }
   a {
      color: #fd7e14;
      font-size: 14px;
      text-decoration: none!important;
      &:hover {
        color: white;
      }
   }
`;

const SpeakersContainer = styled.div`
    background: #112;
    color: #eee;
    min-height: 45vh;
    padding: 5vh 2vw;
    h2 {
        font-size: calc(1.5rem + 1.5vw);
       font-weight: 600;
       margin-bottom: 0.75rem;
       color: tomato;
       text-align: center;
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

const SpeakerCardMain = styled.div`
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
    border: ${({ isTrainer }) => isTrainer ? `2px solid white` : `2px solid white`};
    &:hover {
       
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
      border-radius: 100px;
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

const ConSpeakers = ({ hideTitle = false }) => {

    const PreConfList = [

        {
            "slug": "cybersecurity-for-iot-ics",
            "title": "The Genesis of Cyber Espionage",
            "registerURL": "https://us06web.zoom.us/j/85717212069?pwd=Y2VtOG9HUXhBa1dVc2NFdGNtd1NUQT09l",
            "sessions": [
                {
                    "meetingId": "Meeting ID : 857 1721 2069",
                    "passCode": "Pass Code : 61EFmu",
                    "date": "24th December, 2021",
                    "time": "6.00 pm to 7.00 pm"
                }
            ],
            "abstract": <>
                Espionage is the practice of spying or using spies. In this talk, listen to the mindblowing stories about how the art and science of espionage has evolved over time.
                PS: Its not always about the technology.
            </>,
            "speaker": {
                "name": "Aniket Amdekar",
                "designation": "General Manager - Cyber Defence Education",
                "company": "Great Learning",
                "image": require("../../images/speakers/Aniket-Amdekar.jpg").default,
                "bio": <p>
                    Aniket Amdekar is an accomplished cyber security professional. He has more than 15 years of experience in cyber security. He has lead the cyber security posture monitoring and threat intelligence for multiple teams.
                </p>
            },
        },

        // {
        //     "slug": "cybersecurity-for-iot-ics",
        //     "title": "Bypassing Windows Hello For Business & Pleasure",
        //     "registerURL": "",
        //     "sessions": [
        //         {
        //             "date": "27th December, 2021",
        //             "time": "6.00 pm to 7.00 pm"
        //         }
        //     ],
        //     "abstract": <>
        //         Windows Hello is the most popular passwordless solution that includes authentication by either PIN code or biometric authentication. Windows Hello promises better security ??? but is it the truth? In this session, I'll discuss face recognition bypass vectors and introduce Cyberark Labs research that shows how an attacker can bypass Windows Hello without a camera.
        //     </>,
        //     "speaker": {
        //         "name": "Lavi Lazarovitz",
        //         "designation": "Head of Research",
        //         "company": "Cyberark",
        //         "image": require("../../images/speakers/Lazarovitz_CyberArk.png").default,
        //         "bio": <p>
        //             Lavi is the head of security research at CyberArk Labs. He and his team focus on offensive security and security innovation. They specialize in spotting security gaps in emerging technologies and developing innovative new security layers and effective mitigations to fill those gaps. Recent research vectors include acclaimed work on: cloud security, containers and Kubernetes security and authentication and identity security.
        //         </p>
        //     },
        // },
        {
            "slug": "cybersecurity-for-iot-ics",
            "title": "Evolution of eCrimes",
            "registerURL": "https://us06web.zoom.us/j/84053486578?pwd=OTVmRnlEcnFPK0phMVJLU2xTTXNydz09",
            "youtubeURL": " https://youtu.be/L1a7RaHb9VE",
            "sessions": [
                {
                    "meetingId": "Meeting ID : 840 5348 6578",
                    "passCode": "Pass Code : ypgr2D",
                    "date": "28th December, 2021",
                    "time": "6.00 pm to 7.00 pm"
                }
            ],
            "abstract": <>
                Today eCrimes are weaponised by Cyber criminals using their sophistic toolkits. These toolkits are much evolved and release updated binaries daily to evade malware detection, and that then are delivered through botnets. These binaries become distributors for other malware too. CrowdStrike uses various technologies to tackle these malware and keep customers safe.
            </>,
            "speaker": {
                "name": "Sagar Gulhane",
                "designation": "Sr. Threat Research Engineer",
                "company": "CrowdStrike",
                "image": require("../../images/speakers/Sagar_Gulhane.jpg").default,
                "bio": <p>
                    Sagar has over decade of experience in CyberSecurity with focus on Reverse Engineering malware binaries. He has worked on both legacy Antivirus as well as on next-Gen EDR products where he has been contributing by adding detections for latest threats and working on new features to counter latest threat vectors. His expertise lies in analysing File Infectors and creating repair routines. In his free time he likes to keep track of the evolving Threat Landscape and its impact.
                </p>
            },
        },
        {
            "slug": "cybersecurity-for-iot-ics",
            "title": "Cyber Security Agenda for 2022",
            "registerURL": " https://us06web.zoom.us/j/84554605854?pwd=RWxtNHBvVU11WjQ0Z2dUa3VwSUM1dz09",
            "youtubeURL": " https://youtu.be/gbDgo5TEP2Q",
            "sessions": [
                {
                    "meetingId": "Meeting ID : 845 5460 5854",
                    "passCode": "Pass Code : 3rKNTP",
                    "date": "30th December, 2021",
                    "time": "6.00 pm to 7.00 pm"
                }
            ],
            "abstract": <>
                As we start to wrap up 2021,we can introspect on the risks and threats that we witnessed in 2021 and plan the strategy for 2022. In this talk, lets discuss the strategies in place, and the ones that are being formed for the coming year.
            </>,
            "speaker": {
                "name": "Aniket Amdekar",
                "designation": "General Manager - Cyber Defence Education",
                "company": "Great Learning",
                "image": require("../../images/speakers/Aniket-Amdekar.jpg").default,
                "bio": <p>
                    Aniket Amdekar is an accomplished cyber security professional. He has more than 15 years of experience in cyber security. He has lead the cyber security posture monitoring and threat intelligence for multiple teams.
                </p>
            },
        },
    ];

    const SpeakersList = [
        // {
        //     "slug": "inaugural-ceremony",
        //     "title": "Inaugural Ceremony",
        //     "speaker": {
        //         "name": "Meenakshi Lekhi",
        //         "designation": "Member of Parliament",
        //         "company": "Lok Sabha, Delhi",
        //         "image": require("../../images/sponsor/crowdstrike.png").default,
        //         "links": {
        //             "twitter": "https://twitter.com/M_Lekhi",
        //             "linkedin": "https://www.linkedin.com/in/meenakshi-lekhi-bjp/"
        //         },
        //         "bio": <p>
        //             Meenakashi Lekhi is a Member of Parliament from the New Delhi Parliamentary constituency.
        //             She enrolled with the Bar Council of Delhi in 1990, and started practicing at the Supreme
        //             Court of India, Delhi High Court, other courts, tribunals and forums in Delhi and other
        //             parts of the country. She has argued a wide variety of matters, such as bails, revisions,
        //             trials, appeals, criminal writs, murder references, Prevention of Corruption Act/Official
        //             Secrets Act/Customs Act/FERA prosecutions, Domestic Violence and Family Law dispute. Lekhi
        //             has been part of the Drafting Committees for bills like ???Women Reservation Bill??? and ???Problem
        //             of Sexual Harassment at Workplace???. She has been in National Commission for Women (NCW)???s
        //             special committee, Chairperson of Special Task Force on Women Empowerment, Vice Chairperson
        //             of JPM, Blind School, New Delhi & Jt. Secretary Blind Relief Association.

        //         </p>
        //     }
        // },

        {
            "slug": "threat-modeling",
            "title": "Down the Rabbit Hole: the Future of CyberSecurity",
            "abstract": <>
                Cybersecurity a relatively young offshoot of information technology has been given an unenviable task: cook a nutritious and delicious meal without having taken part in the selection of the ingredients.  Or, in more business friendly terms, protect everything that is important without knowing definitively what that means; do so with significant constraints (money, time, people) that do not hinder the adversary; and do so without negatively impacting productivity or creativity.  In this presentation, Joshua Brown will explore some of the challenges facing the cybersecurity team of the present and the future while suggesting ways to improve our odds of success, and to transform information security into a business enabler rather than merely a cost center.
            </>,
            "speaker": {
                "name": "Joshua Brown",
                "designation": " Vice President ??? Global Chief Information Security Officer",
                "company": "H&R Block",
                "image": require("../../images/speakers/Joshua-Brown.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <><p>
                    Joshua Brown is the Vice President and Global Chief Information Security Officer of H&R Block. In this role, he leads the teams responsible for identifying, tracking, and mitigating security risk, ultimately ensuring the company can move quickly and safely to innovate and fulfill its ambitious Block Horizons growth strategy.

                </p>  <p>
                        Prior to H&R Block, Brown worked for several different entities within the Omnicom Group of companies, where he was a founding member of the corporate CISO council to drive security throughout the organization.  Before that, he cut his technology teeth at the financial education firm, The Motley Fool.  His love of teaching and lifelong learning led him to become a mentor for the SANS Institute, the leading authority for information security education. He has been a frequent author and speaker on myriad information security topics, including speaking at the InfoSec World conference, the ISC2 World Congress, and has been published in Security Current magazine, CIO Review magazine and Enterprise Security magazine. Brown holds a Bachelor???s degree from Duke University and a Master???s degree from Georgetown University.

                    </p></>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "Lessons learned from managing crisis in a VUCA (volatility, uncertainty, complexity, and ambiguity) World",
            "abstract": <>
                This Presentation will present case studies and lessons learned from war gaming simulations carried out for 40 different organizations (banking, smart cities, transportation, communication, cyber and natural disasters) during the past 24 months. the lessons learned include correlation between procedures and actual behavior, situational awareness when confronting crisis and many more.
            </>,
            "speaker": {
                "name": "Dotan Sagi",
                "designation": "Founder & CEO",
                "company": "Be-Strategic Solutions",
                "image": require("../../images/speakers/DotanSagi_BeST.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Dotan Sagi is the founder and CEO of Be Strategic Solutions ??? a disruptive technology that has already begun to revolutionize the crisis management world by digitally transforming the world of War-Gaming and Table-Top exercises.

                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "Data privacy and security in global education technology",
            "abstract": <>
                Overview of how data privacy and security practices have evolved as education technology plays a broader role in student and faculty life.  Topics include data locality, data security practices, security around emerging use-cases such as student ID verification and remote test monitoring.

            </>,
            "speaker": {
                "name": "Chris Caren",
                "designation": "CEO",
                "company": "Turnitin",
                "image": require("../../images/speakers/Chris-Caren.jpeg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Chris Caren joined Turnitin in 2009 as Chief Executive Officer. Chris led the transition of Turnitin from a company focused on plagiarism prevention to one that provides solutions that promote academic integrity, streamline grading and feedback, and improve outcomes across educational levels and content areas. Chris previously worked for Microsoft Corporation as GM of Microsoft Business Solutions. Although his career has focused on software businesses, he comes from a family of scientists and educators. He holds an MBA with distinction from Kellogg School of Management and a bachelor of science in Engineering from Stanford University.
                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "Critical  Competencies Organisations Need to Succeed in Cyber Defence- A View from the Trenches",
            "abstract": <>
                Cyber security has emerged as a critical part of the threat landscape, and organisations across the world are scrambling to prepare themselves to react and respond to this very real threat. As technology evolves even faster, experts expect this threat will be very ???real??? for a long time to come. What are the competencies that organizations need to have a successful cyber defence strategy? While some of the hard technical skills are better known, there is a growing realization that it is not enough. This session will throw a different and interesting perspectives on how a multi-disciplinary approach is proving to be more impactful and how you should think differently about your role in the cyber-security team.

            </>,
            "speaker": {
                "name": "Suvabrata Sinha",
                "designation": "Chief Information Security Officer",
                "company": "NXP Semiconductors",
                "image": require("../../images/speakers/Suvabrata-Sinha.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Suvabrata Sinha is the Chief Information Security Officer of NXP Semiconductors ( www.nxp.com ), a leading multi-national semiconductor solutions company with presence in 30+ companies. NXP provides purpose-built semiconductor solutions in Automotive, Telecommunications, Smart Homes, Mobile, Industrial and Smart City segments. Suvabrata is based of India and leads a team across USA, Europe, India and Malaysia. Before NXP, he has played leadership roles in Microsoft, Bank of America and Big 4 consulting firms.
                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "Android Exploitation & Protection: A 1-Click Full-Chain View ",
            "abstract": <>
                In this talk, we will look at an Android Full Android Full Chain, with an objective to understand the key components (Remote Code Execution, Sandbox Escape & Local Privilege Escalation), mitigations and classes of vulnerabilities in such a chain.

                Understanding the Infection process gives an insight into the defensive challenges present at each stage, and why traditional protection mechanisms fail to stop such attacks at every step.

            </>,
            "speaker": {
                "name": "Atul Agarwal",
                "designation": "CEO",
                "company": "Secfence",
                "image": require("../../images/speakers/atul-agarwal.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    A technology enthusiast with over a decade of experience in building startups and nurturing talent. Atul is Founder of Secfence, multifold barrier breaking Cyber Security Organisation which is trusted by the top Government, Intelligence, Defence agencies, LEA's & Corporates.

                    As a High School Grad just out of school, Atul has previously co-founded a high growth cyber security training & Ad-Tech start-up.

                    Known for his technical prowess and country first approach, he's surely made a stamp in the InfoSec space and has helped client organisations to be result oriented and to make India a safer Cyber place to live in.
                </p>
            },
        },
        {
            "slug": "Inaugural Session",
            "title": "Operating Tier 1 SOC: Learnings and best practices",
            "abstract": <>
                Operating and working in a tier 1 SOC is infamous for its monotonous work and high attrition rate. However, being smart about investing in technology, process and employee success pays off in the long run. This talk will highlight some of the ways to do that.
            </>,
            "speaker": {
                "name": "Yogi Kapur",
                "designation": "Director, SOC",
                "company": "Salesforce",
                "image": require("../../images/speakers/YogiPhoto.jpg").default,
                "bio": <p>
                    Extensive operations background, widely regarded as thought leader within cyber security operations, technology integration and DevOps space.

                    Originally from a development background, I am constantly evolving to meet the needs of the business and currently responsible for the team that provides L1 support for Salesforce Security Operations. Essentially a thought leader, technologist, people-friendly manager and problem solver, who brings about sustainable order out of chaotic situations.
                </p>,
                
            },
        },
        {
            "slug": "Inaugural Session",
            "title": "Digital Trafficking of Children",
            "speaker": {
                "name": "Manoj Abraham IPS",
                "designation": "Additional Director General of Police",
                "company": "Kerala Police",
                "bio":<> <p>
                    Shri. Manoj Abraham IPS is currently the Additional Director General of Police of Thiruvanthapuram Range and the Head of Cyber Security, in Kerala State, India. He worked as Supdt. of Police in Pathanamthitta, Kollam and Kannur Districts  followed by a Seven year stint as Commissioner of Police of Cochin and Thiruvananthapuram Cities and a five year tenure as IGP Thiruvananthapuram Range. 
                    He has done a lot of work in the area of Community Policing including Maitri and Janamaitri. He has also co-authored a book called- Global Community Policing- Problems and Prospects, published by Taylor and Francis Publications. 
                </p>
                <p>
                In the area of cybercrimes, he is the Chief architect of the c0c0n conference held annually on the theme of public private partnership for enhancing cyber Security.   He is also the Architect of Cyber Dome- a centre for private public participation in cyber policing, which has become a model center for Cyber Security in the PPP domain. 

                </p>
                </>
                ,
                "image": require('../../images/speakers/Manoj-Abraham.jpeg').default
            },
        },
        {
            "slug": "threat-modeling",
            "title": "OWASP Security Code Review for Young Developers seeking Technology Careers - Backend Perspectives recommended for Java and other Cloud and Backend Engineer",
            "abstract": <>
                Jnana Marga develops new learning paradigms that develops eBooks into Courses. The system employs a patented Collaborative Learning Methodology. We showcase our IT Certificate that can help ready students for Careers in IT. We also introduce a way to learn Java Security using the Jnana Marga Platform and the freely available JSSEC book. The lecture will quickly introduce the first chapter of the JSSEC book and will help students learn about Java Security which is part of the second level Java Course.

            </>,
            "speaker": {
                "name": "Srinivas Bharadwaj",
                "designation": "Lead Founder",
                "company": "Jnana Marga Technologies",
                "image": require('../../images/speakers/srinivas-final.jpg').default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Srinivas Bharadwaj has been a Java Engineer since 1997. He also holds an MS in CS from Georgia Tech, an MBA, CFA and FRM. He also holds patents and is Lead Founder at Jnana Marga Technologies which builds an edTech platform for High Schoolers and College Students.
                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "Cyber Risk Management",
            "abstract": <>
                How can a company asses their cyber risk, think & organize diffrently, in an era of cyber everywhere and ever growing Advanced Persistent Threats (APT) attacks?

            </>,
            "speaker": {
                "name": "Dr. Amir Schreiber",
                "designation": "Senior Director",
                "company": "Bank Hapoalim",
                "image": require("../../images/speakers/amir.jpeg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Dr. Amir Schreiber is a senior director in ???Bank Hapoalim???, head of Cyber Risk Management, former Chief Information Security Officer (CISO) & Chief Cyber Defense Officer (CCDO) in ???Isracard Group??? (including MC and all subsidiaries). In addition to cyber security skills, Amir is an innovative social networks & Internet researcher, a keynote speaker in International & government conferences and directors programs. Previously, founder and director of the Internet & Mobile Department in Bank Hapoalim. Research domains: cyber risk, social networks, eye tracking, digital democracy, digital divide.
                </p>
            },
        },

        {
            "slug": "threat-modeling",
            "title": "Decadal Plan for Research in Security and Privacy",
            "abstract": <>
                The pace that today???s systems are increasing in intelligence and ubiquity is astounding, and yet these advances in capability must go hand-in-hand with advances in security and privacy of these systems. The production and collection of data to feed AI-based engines has become today???s archetypal design pattern for decision-making, analysis, actuation, prediction, and control. The scale and complexity of these data-based systems continues to grow, forcing hardware specialization and optimization to meet multiplying performance challenges. These systems have a plethora of new security and privacy demands, for instance, weaknesses in the machine-learning or conventional cryptography, privacy of personal data, and vulnerabilities in the supply-chain or hardware. This talk will discuss some of these challenges and outline research areas that address them.

            </>,
            "speaker": {
                "name": "Richard Chow",
                "designation": "University Research Manager and Scientist",
                "company": "Intel",
                "image": require("../../images/speakers/RichardChow.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Richard Chow is University Research Manager and Scientist in the University Research and Collaboration office within Intel Labs. He guides several of Intel???s academic research centers in the areas of security, networking, autonomous systems, and machine learning. In the past, Richard held positions as Research Scientist at PARC, Research Scientist at Samsung Electronics R&D, and Security Architect at Yahoo and Motorola. His work concentrates on privacy, big data, mobile, and machine learning. He has over 25 granted US patents and over 40 peer-reviewed conference papers, journals, and book chapters. He was awarded runner-up for the 2010 PET Award for Outstanding Research in Privacy Enhancing Technologies. He has given invited talks at academic conferences and industry venues such as the RSA Conference, BlackHat, and OWASP. Richard has a Ph.D. in mathematics from UCLA and a B.A. in mathematics from the University of Pennsylvania.
                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "The challenge of IOT Security",
            "abstract": <>
                Though IOT is everywhere, it is not well protected against numerous cyber attack scenarios.
                The lecture depicts some scenarios and potential implications, the concept of cyber risk management and principals of designing and implementing cyber security architectures in general and specifically in physical security and IOT environments.

            </>,
            "speaker": {
                "name": "Uri Shai",
                "designation": "",
                "company": "Independent Consultant",
                "image": require("../../images/speakers/Uri-Shai.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Independent consultant since 2014, specialized in IT and OT cyber security.
                    Between 2006 and 2014 held a variety of executive management positions in the IT industry.
                    Until 2006 served in the Israeli Defence Forces as an Information Technology and Cyber Security officer.

                    M.Sc. Telecommunications, 1996 (University of Colorado, Boulder, USA)
                    B.Sc. Electrical and Electronics Engineering, 1987 (Tel-Aviv University, Israel)
                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "Bypassing Windows Hello For Business & Pleasure",
            "abstract": <>
                Windows Hello is the most popular passwordless solution that includes authentication by either PIN code or biometric authentication. Windows Hello promises better security ??? but is it the truth? In this session, I'll discuss face recognition bypass vectors and introduce Cyberark Labs research that shows how an attacker can bypass Windows Hello without a camera.
            </>,
            "speaker": {
                "name": "Lavi Lazarovitz",
                "designation": " Head of Research",
                "company": "Cyberark",
                "image": require("../../images/speakers/Lazarovitz_CyberArk.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Lavi is the head of security research at CyberArk Labs. He and his team focus on offensive security and security innovation. They specialize in spotting security gaps in emerging technologies and developing innovative new security layers and effective mitigations to fill those gaps. Recent research vectors include acclaimed work on: cloud security, containers and Kubernetes security and authentication and identity security.

                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "5G IMSI catchers mirage",
            "abstract": <>
                IMSI catchers aka Stingrays aka fake base stations are well-known privacy threats to almost every mobile phone with SIM card connectivity (including iOS or Android-based) in the world. The cellular network generations such as 2G, 3G, and 4G are vulnerable to such almost undetectable and silent attacks. Finally, new security mechanisms in the next generation 5G networks have been added to address these types of issues.

                In this talk, we carefully investigate new security protection techniques in 5G and perform practical experiments using commercial 5G devices. Besides, we explain our failure and successful attempts at building 5G IMSI catchers for our research. Finally, we conclude with results explaining the impact of 5G IMSI catchers against 5G users without downgrading to legacy networks, guidelines for the cellular device vendors, operators, and end-users and directions towards fixing the problem in 6G networks.

            </>,
            "speaker": {
                "name": "Dr. Altaf Shaik",
                "designation": "Senior Researcher",
                "company": "Technical University of Berlin",
                "image": require("../../images/speakers/altafshaik.jpeg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Dr. Altaf Shaik is currently a senior researcher at the Technical University of Berlin in Germany. He conducts research in telecommunications, especially 5G radio access and core network security. He combines a professional background in programming, wireless communications, and offensive network security. His renowned research exposed several vulnerabilities in the commercial 4G and 5G specifications and commercial networks that allow attackers to perform powerful attacks affecting millions of base stations, handsets, M2M, and NB-IoT devices. Altaf is a frequent speaker at various prestigious international security conferences such as Black Hat USA & Europe, Troopers, T2, SECT, Nullcon, Hardware.io, HITB, and many others. His accomplishments landed him in the hall of fame of Google, Qualcomm, Huawei, and GSMA. He also trains various companies and organizations in exploit development and also building secure networks including their testing and security evaluation.
                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "Plugging into ICS Pentest",
            "abstract": <>
                In this overview session, participants will be presented with several "big picture" concepts of penetration testing industrial automation and control systems. This talk delves into the ICS cybersecurity myths and misconceptions. While there will always be difference between IT & OT cybersecurity, I can help you where to start learning for OT security. Explore attack for ICS (Industrial Control Systems).

            </>,
            "speaker": {
                "name": "Britto Sidhan",
                "designation": "General Manager ??? Global Security Lab",
                "company": "Schneider Electric",
                "image": require("../../images/speakers/britto.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Britto Sidhan leads the Global Security Lab at Schneider Electric. He is responsible for Penetration Testing, ICS Security, and Red Teaming for product and systems offers. For more than a decade, he has worked extensively with telecommunications security, cloud and virtualization security, and vulnerability researcher.

                    An expert in offensive security techniques, and has been involved in developing research skills for professional security teams. He has a team of highly skilled security professionals that focuses on critical infrastructure domain.
                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "Dynamic Instrumentation 101",
            "abstract": <>
                Hooking into dynamically loaded classes has proven to be useful in investigating potential types of vulnerabilities, along with understanding a software's internals and discovering private APIs.
                In this session, we'll leverage Frida to probe around in Windows registry entries, drivers, and APIs to assist fuzzing and how we could use this information to design more exploits. We can even leverage the framework to deobfuscate the data. We will see how fast and flexible this framework is.
                We will present basic examples and sample programs of how to use dynamic instrumentation to a treasure ton of information on absolutely any platform and process in this lecture, which is ideal for beginners.

            </>,
            "speaker": {
                "name": "Nishaanth G, Akshay Jain",
                "designation": "Security Researcher",
                "company": "MDSec & PhonePe",
                "image": require("../../images/speakers/NishaanthSmall.jpg").default,
                "image1": require("../../images/speakers/AkshyJainSmall.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <><p>
                    Nishaanth has been working as a security researcher in the application security industry for the last 5 years. He has reported vulnerabilities in Apple, AT&T, Microsoft, Dell, JUUL with CVEs and 0-days. He is interested in mobile application security, exploit development and red teaming. Speaker at PHDays 2021.

                </p>
                    <p>
                        Akshay Jain is a Security researcher, who has been working in the cybersecurity industry for the last few years and is interested in application security and reverse engineering. He has found multiple vulnerabilities and reported responsibly to Adobe, Apple, HP, Google, with multiple CVEs and acknowledgements. Speaker at Phdays 2021
                    </p>
                </>
            },
        },
        // {
        //     "slug": "threat-modeling",
        //     "title": "Dynamic Instrumentation 101",
        //     "abstract": <>
        //         Hooking into dynamically loaded classes has proven to be useful in investigating potential types of vulnerabilities, along with understanding a software's internals and discovering private APIs.
        //         In this session, we'll leverage Frida to probe around in Windows registry entries, drivers, and APIs to assist fuzzing and how we could use this information to design more exploits. We can even leverage the framework to deobfuscate the data. We will see how fast and flexible this framework is.
        //         We will present basic examples and sample programs of how to use dynamic instrumentation to a treasure ton of information on absolutely any platform and process in this lecture, which is ideal for beginners.

        //     </>,
        //     "speaker": {
        //         "name": "Akshay Jain",
        //         "designation": "Security Researcher",
        //         "company": "PhonePe",
        //         "image": require("../../images/speakers/AkshyJain.png").default,
        //         "links": {
        //             "linkedin": "",
        //         },
        //         "bio": <p>
        //         Security researcher, who has been working in the cybersecurity industry for the last few years and is interested in application security and reverse engineering. He has found multiple vulnerabilities and reported responsibly to Adobe, Apple, HP, Google, with multiple CVEs and acknowledgements. Speaker at Phdays 2021
        //         </p>
        //     },
        // },
        {
            "slug": "threat-modeling",
            "title": "Getting started with IR/Blue Teaming",
            "abstract": <>
                Finishing university and moving to into the workplace can be daunting, especially if you're unsure about where you'd like to take your next step.
                One way to help with this is speaking to people within the industry and getting some more information about their role and what they do. This talk will provide an introduction to working within Incident Response from an experienced consultant's perspective.
                We will be covering the process and lifecycle of handling an incident, as well as how the role fits within defensive security as a whole.
                We'll also take a look at some of the common tasks and tools you will encounter during log analysis, imaging acquisition and disk triaging.
                The talk will be aimed at beginners, students and anyone interested in starting a role within Incident Response or a similar position.

            </>,
            "speaker": {
                "name": "Sam Paterson",
                "designation": "IR Analyst",
                "company": "MDSec",
                "image": require("../../images/speakers/sam.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Sam has been working as an Incident Response Consultant for 2 years, after completing his BSc and Post Graduate Diploma in Cyber Security at Staffordshire University.
                    He has assisted in several incidents, ranging from ransomware to web attacks.
                    He has a keen interest in both offensive and defensive security, and also enjoys learning about hardware hacking in his own time.
                </p>
            },
        },

        {
            "slug": "threat-modeling",
            "title": "End to End Device Security - Enhanced by Hardware",
            "abstract": <>
                An embedded device goes through multiple stages in its lifecycle from manufacturing to retirement. They face various security challenges targeted at the underlying firmware and hardware.

                Irrespective of the security robustness of software, if the underlying hardware is lacking, the device will be vulnerable to attacks. On-chip security features such as Hardware Root of Trust, Trusted Execution Environment, Trusted Storage, Key generation, Device Identity can provide a foundation on which other security functions can be created. This session discusses the hardware supported features to enhance security across the life cycle of the device.

            </>,
            "speaker": {
                "name": "Mini TT",
                "designation": "Security Technologist",
                "company": "Dell",
                "image": require("../../images/speakers/Mini-TT.jpeg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Mini TT works with Dell Technologies, Bangalore in the domain of embedded system security. Prior to this, she has worked in research and development with Philips and ABB producing innovating products, publications, and patents. She has experience in defence, semiconductors, consumer electronics, substation automation and industrial measurements. She had started her career with Bharat Electronics developing command and control systems for Indian Defence. Her specialization is in cybersecurity, embedded systems, and system architecture. She holds an MTech in Embedded Systems from BITS Pilani, and a degree in Computer Science and Engineering from the University of Kerala.
                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "Introduction to Containers and Kubernetes",
            "abstract": <>
                Now days we are moving from hosted infrastructure to cloud with cloud native infrastructure. But why containers and Kubernetes, because these provides essential solution to scalability and orchestration. Also shift left approach, by tools like docker, for building environment to run apps has made CI-CD much easier and smooth.
                We will dive deep into these with very basic examples from day to day life
            </>,
            "speaker": {
                "name": "Ramesh Kumar",
                "designation": "Senior Engineer",
                "company": "CrowdStrike",
                "image": require("../../images/speakers/Ramesh-kumar.jpeg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Ramesh is working in cyber security domain for about 5 years now, with specialisation in container and cloud security. Before this he wrote vrest, a Rest API validation tool. He also wrote few other open source tools, allrounder, templist and more. If not working, you may find him playing ukulele in one of the mountains.
                </p>
            },
        },

        // {
        //     "slug": "threat-modeling",
        //     "title": "Cyber Risk Management",
        //     "abstract": <>
        //         How can a company asses their cyber risk, think & organize diffrently, in an era of cyber everywhere and ever growing Advanced Persistent Threats (APT) attacks?
        //     </>,
        //     "speaker": {
        //         "name": "Dr. Amir Schreiber",
        //         "designation": "CEO",
        //         "company": "Turnitin",
        //         "image": require("../../images/speakers/Chris-Caren.jpeg").default,
        //         "links": {
        //             "linkedin": "",
        //         },
        //         "bio": <p>
        //             Dr. Amir Schreiber is a senior director in ???Bank Hapoalim???, head of Cyber Risk Management, former Chief Information Security Officer (CISO) & Chief Cyber Defense Officer (CCDO) in ???Isracard Group??? (including MC and all subsidiaries). In addition to cyber security skills, Amir is an innovative social networks & Internet researcher, a keynote speaker in International & government conferences and directors programs. Previously, founder and director of the Internet & Mobile Department in Bank Hapoalim. Research domains: cyber risk, social networks, eye tracking, digital democracy, digital divide.
        //         </p>
        //     },
        // },
        // {
        //     "slug": "inaugural-ceremony",
        //     "title": "Inaugural Ceremony",
        //     "speaker": {
        //         "name": "Swamini Krishnamrita Prana",
        //         "designation": "",
        //         "company": "Mata Amritanandamayi Math",
        //         "image": require("../../images/sponsor/crowdstrike.png").default,
        //         "links": {
        //             "linkedin": "https://twitter.com/amritapuri"
        //         },
        //         "bio": <p>
        //             Swamini Krishnamrita Prana is a senior most disciple of world renowned humanitarian, <a href="https://amma.org">Mata
        //                 Amritanandamayi Devi</a>. Swamini plays an integral role in several humanitarian initiatives of the Mata
        //             Amritanandamayi Math. She is the author of several books(some of which can be found <a href="https://theammashop.org/search?type=products&q=swamini%20krishnamrita%20prana*">here</a>),
        //             and a speaker at several international conferences.
        //         </p>
        //     }
        // },
        //         {
        //             "slug": "inaugural-ceremony",
        //             "title": "Inaugural Ceremony",
        //             "speaker": {
        //                 "name": "Eric Falt",
        //                 "designation": "Director & UNESCO Representative",
        //                 "company": "Bhutan, India, Maldives and Sri Lanka",
        //                 "image": require('../../../images/speakers/ericfalt.jpeg'),
        //                 "links": {
        //                     "linkedin": "https://www.linkedin.com/in/eric-falt-8185ba18"
        //                 },
        //                 "bio": <p>
        //                     Since May 2018, Mr. Eric Falt has served as the Director and UNESCO Representative for the 
        //                     UNESCO New Delhi Office, which covers Bangladesh, Bhutan, India, Nepal, the Maldives and 
        //                     Sri Lanka. Mr. Falt previously served as Assistant Director-General for External Relations 
        //                     and Public Information at the Paris Headquarters of UNESCO, with the rank of Assistant 
        //                     Secretary-General of the UN.  He oversaw the work of the organization in the political 
        //                     field and guided UNESCO???s communications and public information efforts.  Prior to this, 
        //                     he served as Director of the Outreach Division at the United Nations Department of Public 
        //                     Information in New York, and as the Director of Communications for the United Nations Environment 
        //                     Programme (UNEP), at its headquarters in Nairobi. In the past, Mr. Falt was also posted for the 
        //                     United Nations in Pakistan, Iraq, Haiti and Cambodia. 
        //                 </p>
        //             }
        //         },
        //         {
        //             "slug": "Keynote",
        //             "title": "Keynote",
        //             "speaker": {
        //                 "name": "Neeta Verma",
        //                 "designation": "Director General",
        //                 "company": "National Informatics Centre",
        //                 "image": require('../../../images/speakers/neetavarma.jpeg'),
        //                 "bio": <p>
        //                     Dr. Neeta Verma is the Director General of National Informatics Centre, a premier 
        //                     Technology organization of the Government of India. With a career spanning over three 
        //                     and a half decades, she has been instrumental in implementing high impact digital 
        //                     initiatives across the country. In her current role as DG NIC, she is spearheading the Digital Transformation agenda of the government through development of Digital Platforms for various initiatives of the Government in different sectors of development.
        //                 </p>
        //             }
        //         },
        //         {
        //             "slug": "Keynote",
        //             "title": "Keynote", 
        //             "speaker": {
        //                 "name": "Ratnaboli Ghorai Dinda",
        //                 "designation": "Deputy Director General(Scientist-G)",
        //                 "company": "National Informatics Centre",
        //                 "bio": <p>
        //                     Ms. Ratnaboli Ghorai Dinda, has spent more than 30 years in Information Technology and 
        //                     more than 15 years in Cybersecurity. She has played a key role in provisioning Cyber 
        //                     Security for the National Informatics Centre or NIC, a premier institution of the 
        //                     Government of India, providing infrastructure and technology support to enable the 
        //                     delivery of government IT services. She specializes in Application Security and is 
        //                     currently Deputy Director General and CISO of the National Informatics Centre.
        //                 </p>,
        //                 "image": require('../../../images/speakers/ratnaboli.jpeg'),
        //             },
        //         },
        //         {
        //             "slug": "Panel Discussion: Cybercrime and Pathways Ahead",
        //             "title": "Panel Discussion: Cybercrime and Pathways Ahead",

        //             "speaker": {
        //                 "name": "Dave Chatterjee",
        //                 "designation": "Associate Professor",
        //                 "company": "The University of Georgia",
        //                 "image": require('../../../images/speakers/davechatterjee.jpg'),
        //                 "bio": <p>
        //                    Dr. Chatterjee???s interest and expertise lies in the various facets of information technology 
        //                    management, with current focus on cybersecurity and enterprise digitization. He delivers 
        //                    talks around the world, conduct webinars and workshops, give expert interviews, and moderate 
        //                    CXO panels on cybersecurity, emerging technology trends, and other enterprise IT governance 
        //                    and value management issues. It is a passion and mission of mine to connect with all types of 
        //                    audience and engage in a thought-provoking and reflective discussion.
        //                 </p>,
        //             },
        //         },
        //         {
        //             "slug": "keynote",
        //             "title": "Keynote",
        //             "speaker": {
        //                 "name": "Rinki Sethi",
        //                 "designation": "Vice President & CISO",
        //                 "company": "Twitter",
        //                 "image": require('../../../images/speakers/rinki_sethi.jpg'),
        //                 "links": {
        //                     "twitter": "https://twitter.com/rinkisethi",
        //                     "linkedin": "https://www.linkedin.com/in/rinkisethi"
        //                 },
        //                 "bio": <p>
        //                     Rinki Sethi is a vice president and the Chief Information Security Officer at Twitter Inc.
        //                     She was earlier a Information Security Executive at IBM from 2018 to 2019. She has also
        //                     worked with companies like Walmart, Intuit, Ebay and others as a CISO and security expert. She
        //                     also serves as an advisor to several startups, including LevelOps, Authomize, and Cybersecurity
        //                     organizations, like Women in Cybersecurity. She was recognized by CSO Magazine & Executive Women's
        //                     Forum with the "One to Watch" award, and in 2010, lead a team at eBay to receive the
        //                     "Information Security Team of the Year" by SC Magazine.
        //                 </p>
        //             }
        //         },
        //         {
        //             "slug": "from-technologist-to-board-room",
        //             "title": "From Technologist to Board Room: A cybersecurity journey",
        //             "abstract": <>
        //                 In her session, Sanju will review her 25 year long career path along with a few stories. 
        //                 She hopes to leave you with her learnings and open up the conversation to your questions.
        //             </>,
        //             "speaker": {
        //                 "name": "Sanju Misra",
        //                 "designation": "VP & CISO",
        //                 "company": "Alnylam Pharmaceuticals",
        //                 "image": require('../../../images/speakers/sanju_misra.jpg'),
        //                 "links": {
        //                     "linkedin": "https://www.linkedin.com/in/sanjumisra/"
        //                 },
        //                 "bio": <p>
        //                     Sanju fell into the cybersecurity field 25 years ago. Her subject matter expertise in 
        //                     security engineering, security analysis then team leader helped to launch her into chief
        //                     information security officer roles at General Electric Treasury, Praxair and Linde.
        //                     The skills she gained as a technologist aren???t the same skills required to
        //                     present to board rooms and have a seat at the table with business leaders. 
        //                 </p>
        //             },
        //         },
        {
            "slug": "threat-modeling",
            "title": "Protecting containers and the ship throughout their journey",
            "abstract": <>
                Container orchestration platforms have revolutionised application delivery with agile deployment, high speed iteration, auto scaling and transparent fault tolerance. This new application deployment stack has brought new security challenges with it which warrant fresh approach, tools and best practices. In this session, we???ll cover how security outlook differs for container workloads from traditional ones. We???ll go over new approach, tools and best practices for the new stack which provide comprehensive security without slowing down the application delivery
            </>,
            "speaker": {
                "name": "Ajit Dhumale",
                "designation": "Senior Engineer",
                "company": "CrowdStrike",
                "image": require("../../images/speakers/AjitDhumale-Saurabh-Gawas.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <p>
                    Ajit Dhumale is a software security enthusiast with over 25 years of experience in software product development. He works on cloud workload protection products at CrowdStrike. Previously he led blackbox web application security scanner and signature development team. He holds multiple patents in data protection area. He has been a chapter co-leader and an active speaker at OWASP Pune chapter. Ajit holds a BE degree in Computer Science from Mumbai University.
                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "DevSecOps ??? Putting security in DevOps",
            "abstract": <>
                As fast-paced agile project delivery has become the norm for today???s business, ensuring security in software solutions are becoming increasingly challenging for the teams. Most of the time security is prioritized at the very end of the product cycle. Raphael da la Vienne and Prajeesh Prathap demonstrates how DevSecOps integrates security with the agile processes and DevOps pipeline to shorten the time to market.

                This session will shed light on the vital role security plays in the overall DevOps life cycle, by highlighting the difference between DevOps & DevSecOps, the impacts of not considering security when setting up DevOps practices, and the different perspectives of implementing a proper DevSecOps practice.

                Led by Prajeesh Prathap (Head of Platform team - IT&Care) & Raphael de la Veinne (Technical Security Officer) you'll hear about:

                <li>1. What DevSecOps is and how it is different from DevOps</li>
                <li>2. How DevSecOps has helped IT&Care increase their service delivery agility</li>
                <li>3. Best practices when implementing DevSecOps</li>

            </>,
            "speaker": {
                "name": "Prajeesh Prathap, Raphael de la Vienne",
                "designation": "",
                "company": "IT&Care",
                "image": require("../../images/speakers/prajeesh-Prathap.jpg").default,
                "image1": require("../../images/speakers/Raphael.jpg").default,
                "links": {
                    "linkedin": "",
                },
                "bio": <><p>
                    Prajeesh Prathap is an experienced technologist specializing in building web scale, cloud native applications with special interest in event-driven, distributed systems. Prajeesh currently works for IT&Care in the Netherlands as the head of platform and operations teams specializing in setting up the containerized environments, CI/CD using Azure DevOps, observability platforms etc.
                </p>
                    <p>
                        Raphael is a very experienced security expert (and former red-teamer) who has been interested in all facets of the IT world from an early age. It started innocently with guessing a lost password, all the way to the "dark" corners of the internet. He specializes in Web Security, and reverse engineering and is one of the better known hackers and researchers in the world
                    </p>
                </>
            },
        },
        
        // {
        //     "slug": "threat-modeling",
        //     "title": "DevSecOps ??? Putting security in DevOps",
        //     "abstract": <>
        //         As fast-paced agile project delivery has become the norm for today???s business, ensuring security in software solutions are becoming increasingly challenging for the teams. Most of the time security is prioritized at the very end of the product cycle. Raphael da la Vienne and Prajeesh Prathap demonstrates how DevSecOps integrates security with the agile processes and DevOps pipeline to shorten the time to market.

        //     This session will shed light on the vital role security plays in the overall DevOps life cycle, by highlighting the difference between DevOps & DevSecOps, the impacts of not considering security when setting up DevOps practices, and the different perspectives of implementing a proper DevSecOps practice.

        //     Led by Prajeesh Prathap (Head of Platform team - IT&Care) & Rapahel de la Veinne (Technical Security Officer) you'll hear about:

        //     <li>1. What DevSecOps is and how it is different from DevOps</li>
        //     <li>2. How DevSecOps has helped IT&Care increase their service delivery agility</li>
        //     <li>3. Best practices when implementing DevSecOps</li>

        //     </>,
        //     "speaker": {
        //         "name": "Raphael de la Vienne",
        //         "designation": "Technical Security Officer",
        //         "company": "IT&Care",
        //         "image": require("../../images/speakers/Raphael.jpg").default,
        //         "links": {
        //             "linkedin": "",
        //         },
        //         "bio": <p>
        //             Raphael is a very experienced security expert (and former red-teamer) who has been interested in all facets of the IT world from an early age. It started innocently with guessing a lost password, all the way to the "dark" corners of the internet. He specializes in Web Security, and reverse engineering and is one of the better known hackers and researchers in the world. In addition to carrying out very specific assignments, Raphael is an enthusiastic lead trainer and developer of course materials, an expert at Computable for the topic Security and a lecturer at various universities. In addition, Raphael works as a Technical Security Officer at IT&Care and ensures that both policy and technical security are in good working order, with the aim of increasing digital resilience.
        //         </p>
        //     },
        // },
        //         {
        //             "slug": "Inaugural Session",
        //             "title": "Inaugural Session", 
        //             "speaker": {
        //                 "name": "Krishnashree Achuthan",
        //                 "designation": "Dean PG Programs",
        //                 "company": "Amrita University",
        //                 "bio": <p>
        //                     Dr. Krishnashree is an ardent researcher with multi-disciplinary interests, and holds a PhD degree 
        //                     from Clarkson University, NY, USA. Her areas of interest in  Cybersecurity & governance, Mathematical 
        //                     Modeling of Systems, Cybersecurity policy, IoT Security, Public Safety, Innovation, Educational 
        //                     Technologies & Entrepreneurship. She also leads research teams focused on enhancement of laboratory 
        //                     education through virtual laboratories. She holds 33 US patents, and has published over 50 publications 
        //                     in Journals & Conferences. She has played an active role in several strategic initiatives for Government 
        //                     of India and served as the Principal Investigator.
        //                 </p>,
        //                 "image": require('../../../images/speakers/dr_krishnasree.jpg'),
        //             },
        //         },
        //         {
        //             "slug": "panel-discussion",
        //             "title": "Panel Discussion: Cybercrime and Pathways Ahead", 
        //             "speaker": {
        //                 "name": "Anyesh Roy",
        //                 "designation": "DCP/Cyber Crime, Delhi Police",
        //                 "company": "Ministry of Home Affairs",
        //                 "image": require('../../../images/speakers/anyeshroy.jpeg'),
        //                 "bio": <p>
        //                     Anyesh Roy has worked for 13 years in the field of law enforcement in Delhi Police and Andaman & Nicobar 
        //                     Police. He heads the Cyber Crime Unit(CyPAD) of Delhi Police. He also handles the functioning of National Cyber 
        //                     Forensic Lab as part of Indian Cybercrime Coordination Centre. He has undertaken various initiatives for:
        //                     <ul>
        //                         <li>Detection and prevention of cyber offences in the jurisdiction of Delhi.</li>
        //                         <li>Training and capacity building of the Investigating Officers of Delhi Police in the field of cyber investigation.</li>
        //                         <li>Intensive cyber safety awareness campaigns among the common public, esp. among the vulnerable sections.</li>
        //                     </ul>
        //                 </p>
        //             },
        //         },
        //         {
        //             "slug": "ctfs-and-cybersecurity-research",
        //             "title": "CTFs and cybersecurity research",
        //             "abstract": <>
        //                 In this talk, Tiffany Bao will share her experience of CTF and introduce the CTF-related
        //                 research, cyber autonomy in software security. The idea of cyber autonomy emerges due to
        //                 the large scale of software programs in daily practice. While security researchers have 
        //                 been pursuing automated vulnerability detection and remediation techniques to scale beyond 
        //                 the limitations of human hackers, the human bottleneck (and human fallibility) remains in 
        //                 the higher-level strategy of what to do with automatically identified vulnerabilities, 
        //                 automatically created exploits, and automatically generated patches.

        //                 Removing the bottlenecks requires not only automatic techniques but also intelligent decision 
        //                 makings, which we call autonomy, a further step of automation in software security. In this 
        //                 talk, I will delve into the challenges in cyber autonomy, introducing our recent work and 
        //                 discussing the future steps that mature cyber autonomy into real-world practice.
        //             </>,
        //             "speaker": {
        //                 "name": "Tiffany Bao",
        //                 "designation": "Assistant Professor",
        //                 "company": "Arizona State University",
        //                 "image": require('../../../images/speakers/tiffany.jpg'),
        //                 "bio": <p>
        //                     Tiffany Bao is an Assistant Professor at Arizona State University. Her research interests 
        //                     are aspects of software security, including techniques, measurements, and strategies to discover, 
        //                     assess, and defend software vulnerabilities. Tiffany Bao received her Ph.D. at Carnegie Mellon 
        //                     University advised by Prof. David Brumley.
        //                 </p>

        //             },
        //         },
        //         {
        //             "slug": "cyber-event-how-to-treat-it-right",
        //             "title": "Cyber Event - How to treat it right?", 
        //             "abstract": <>
        //                 We will talk about how  to treat cyber event from the view of SOC and Digital Forensics Investigators team. 
        //                 What do we investigate? How to react when we know it???s not false positive event? What evidences do we have 
        //                 and what do we want to investigate? 
        //             </>, 
        //             "speaker": {
        //                 "name": "Liora Itkin",
        //                 "designation": "Head of Cybersecurity Department (of SOC and DFIR teams)",
        //                 "company": "Israel Ministry of Defense",
        //                 "bio": <p>
        //                     Leading a Cybersecurity Defense Department: <br />
        //                     ?????? SOC team<br />
        //                     ?????? Digital Forensics Investigators and Incident Response team<br />
        //                     Skilled in the areas of in cyber attacks, malware analysis, threat hunting, cyber analysis, networking and system. <br />
        //                 </p>,
        //                 "image": require('../../../images/speakers/lioraitkin.jpeg'),
        //             },
        //         },
        //         {
        //             "slug": "Panel Discussion: Cybercrime and Pathways Ahead",
        //             "title": "Panel Discussion: Cybercrime and Pathways Ahead", 
        //             "speaker": {
        //                 "name": "Evelyn Kilel",
        //                 "designation": "Co-Founder",
        //                 "company": "SheHacksKe",
        //                 "bio": <p>
        //                     Evelyn Kilel, a computer scientist and cybersecurity analyst at Ernst and Young is one of the 
        //                     co-founders of Shehacks KE. She Hacks Kenya is an all-female community that was founded in 2016, 
        //                     through the efforts of Patricia Rotich with the assistance of Safaricom???s women in technology. 
        //                 </p>,
        //                 "image": require('../../../images/speakers/evelynkilel.jpeg'),
        //             },
        //         },
        //         {
        //             "slug": "secure-software",
        //             "title": "Secure Software", 
        //             "abstract": <>
        //                 Secure Software is software which continues to work as intended by the developer, even in the presence 
        //                 of an adversary. Software Security is still not a mature field worldwide though significant efforts 
        //                 have been made in this direction in the last one decade. Software developers as well as testers are 
        //                 applying piecemeal solutions to achieve security but they are definitely not sufficient. 
        //                 <br />
        //                 Developers apply various measures in the software to provide Confidentiality, Integrity, Authentication 
        //                 and other security services.  Any compromise to these makes the software insecure. Software Security 
        //                 Assessment at its most basic level analyzes the applied security measures for their sufficiency, 
        //                 correctness and non-bypassability. It tries to identify presence of any malicious functionality 
        //                 in the software. It also checks for the presence of vulnerabilities which an adversary might be able 
        //                 to exploit. 
        //                 <br />
        //                 In this talk, a glimpse of holistic view towards Software Security Assessment would be presented. 
        //                 Further, additional challenges in evaluating AI-based solutions would be enumerated. 
        //             </>,
        //             "speaker": {
        //                 "name": "Sarvjeet Kaur",
        //                 "designation": "Sc'G'",
        //                 "company": "Defence Research and Development Organization (DRDO)",
        //                 "bio": <p>
        //                     Ms Sarvjeet Kaur is heading the Software Security Testing Lab of Scientific Analysis Group(SAG), 
        //                     DRDO, a premier research organization for Defence in the country. She has been working in the area 
        //                     Cybersecurity for last 8 years.

        //                 </p>,
        //                 "image": require('../../../images/speakers/sarvajeetkaur.jpeg'),
        //             },
        //         },
        //         {
        //             "slug": "quantum-safe-solutions-for-cybersecurity",
        //             "title": "Quantum safe solutions for cybersecurity", 
        //             "speaker": {
        //                 "name": "Anindita Banerjee",
        //                 "designation": "Quantum Research Head and VP",
        //                 "company": "QuNu Labs Pvt Ltd.",
        //                 "image": require('../../../images/speakers/aninditha.jpeg'),
        //                 "bio": <p>
        //                     Dr Anindita Banerjee received her PhD from Jaypee Institute of Information Technology (JIIT), Noida. 
        //                     During her PhD, she was visiting scholar at University of Calgary and University of Brunswick Canada. 
        //                     She was Assistant Prof. in Women College of Engineering, Durgapur. Later she joined as Research Associate 
        //                     in Bose Institute, Kolkata, where she spearheaded the group leading to successful demonstration of single 
        //                     photon experiment in 2016. She was awarded CSIR Pool Officer in 2016. She has published about 20 Journal 
        //                     publications. She has co-authored a book on Optical quantum computation and quantum communication published 
        //                     in SPIE Spotlight Series. At present she is working as Quantum Research Head and VP at QuNu Labs Pvt Ltd. 
        //                     <br />
        //                     The company focuses on quantum safe solutions for cybersecurity. She is associated with QNU from 2017. 
        //                     She has led the scientific R&D at Qnu Labs and demonstrated fibre based DPS Quantum Key Distribution  
        //                     in 2019. She has contributed in developing India???s first Quantum Technology Product in Quantum Key 
        //                     Distribution  and Quantum random number generator. She and her team has demonstrated India???s first Quantum 
        //                     secure communication and data transfer using DPS QKD at 50 km distance using underground fiber. 
        //                     <br />
        //                     Apart from her academics she is Alankar in Indian Classical Dance and performed nationally and 
        //                     internationally under Kadamb production of Padmashree Kumudini Lakhia.

        //                 </p>,

        //             },
        //         },
        //         {
        //             "slug": "cybersecurity-in-the-ot-enviroment",
        //             "title": "Cybersecurity in the OT enviroment",
        //             "abstract": <>
        //                 In this talk, Luisa Montealegre will share her career path and how she, as a female mechanical engineer from Costa Rica, 
        //                 ended up being a cybersecurity specialist in Europe. She will also share her experience in the Operational Technology(OT) 
        //                 environment and the challenges of cybersecurity in this field. 
        //             </>, 
        //             "speaker": {
        //                 "name": "Luisa Montealegre",
        //                 "designation": "OT Cybersecurity Specialist",
        //                 "company": "Siemens",
        //                 "image": require('../../../images/speakers/luisa.jpeg'),
        //                 "links": {
        //                     "linkedin": "https://www.linkedin.com/in/luisa-montealegre-8a491287/",
        //                 },
        //                 "bio": <p>
        //                     Luisa Montealegre is an OT Cybersecurity Specialist at Siemens. With Mechanical engineering as a background 
        //                     and international experience working in cybersecurity in the USA, Latin America, and Europe, she works developing 
        //                     the OT cybersecurity services for Siemens factories around the world. Her main goal is to achieve secure and 
        //                     certification ready factories with resilient environments. She holds a master???s degree in cybersecurity systems 
        //                     from Lleida University. 
        //                 </p>,
        //             },
        //         },
        //         {
        //             "slug": "Keynote",
        //             "title": "Keynote", 
        //             "speaker": {
        //                 "name": "Marion Marschalek",
        //                 "designation": "Senior Security Engineer, Founder",
        //                 "company": "BlackHoodie",
        //                 "bio": <p>
        //                     Marion Marschalek is a Cyphort researcher and one of the top reverse engineers of government malware around. 
        //                     Recently uncovered French government surveillance malware.
        //                 </p>,
        //                 "image": require('../../../images/speakers/marion.jpeg'),
        //             },
        //         },
        //         {
        //             "slug": "preventing-cyber-attacks-together-the-power-of-collaboration ",
        //             "title": "Preventing cyber attacks together - The Power of Collaboration ", 
        //             "abstract": <>
        //                 Cybersecurity is a global issue which demands a global approach and international collaboration. Cyber threat actors 
        //                 operate across national borders, and in the past few years, targeted public & private sectors worldwide. During this 
        //                 session we will see how global partnerships were crucial in preventing fraud and cyber incidents, why sharing_is_caring 
        //                 and how a small network of women can make a big impact. 
        //             </>, 
        //             "speaker": {
        //                 "name": "Karine Ben-Simhon",
        //                 "designation": "VP, Cyber Intelligence Center and TLV Innovation",
        //                 "company": "Citi, Israel",
        //                 "bio": <p>
        //                     Mrs. Ben-Simhon is currently leading the Intelligence partnerships and Innovation at Citi Bank's Cyber Intelligence 
        //                     Center and TLV Innovation lab. Karine is a senior cybersecurity manager, with vast experience and understanding of 
        //                     the cyber warfare ecosystem at corporate and National levels.  Before joining Citi, Karine established and managed 
        //                     the Operational Cooperation unit of the Israel National Cyber Directorate. She began her career at the Israel Security 
        //                     agency as a threat intelligence analyst, and continued her journey working for both private and public sector dealing 
        //                     with various activities related to homeland security. Karine is an 8200 Intelligence Unit veteran and holds a M.A in 
        //                     Defense & Intelligence studies from the Bar-Ilan University, and a Political Sciences B.A diploma from the Tel-Aviv University. 
        //                 </p>,
        //                 "image": require('../../../images/speakers/karinebensimhon.jpeg'),
        //             },
        //         },
        //         {
        //             "slug": "Kick-start to Secure Software Development ",
        //             "title": "Kick-start to Secure Software Development ",
        //             "abstract": <>
        //                We read, write and understand Code!<br/>
        //                There is a popular misconception that anyone who code can develop a secure and reliable software. 
        //                Developers can build a working software, but not always secured, reliable and an efficient one. 
        //                Who would buy that? If someone does, for how long would it serve! <br />
        //                <br />
        //                This talk would focus on Secure Software Development. Take you through the overall software development architecture, an active 
        //                check on the frequent mistakes and regular misunderstandings in software development, followed 
        //                by an in-depth understanding of each stage with a quick glance into the adversary entry points. 
        //                Finally, introducing secure coding a vast domain which plays an important role in Secure Software 
        //                Development.<br />
        //                <br />
        //                This session might provide a better perspective to the Developers, Testers and Security enthusiasts about the systems and techniques in place as well their relevance.
        //             </>,
        //             "speaker": {
        //                 "name": "Arya M Sankar ",
        //                 "designation": "Security Researcher",
        //                 "company": " Siemens",
        //                 "image": require('../../../images/speakers/arya.JPG'),

        //                 "bio": <p>
        //                     As a Security Researcher at Siemens she is currently into Secure Software Development 
        //                     (R&D) and Cybersecurity Analyst roles. She is focusing on Application security with 
        //                     keen interest in Secure Software Development and Secure Coding. She has prior experience 
        //                     in Penetration Testing, Malware Analysis and Vulnerability Assessments. Pursued Masters 
        //                     in Cybersecurity Systems & Networks with Bachelors in Computer Science Engineering.
        //                 </p>
        //             },
        //         },
        //         {
        //             "slug": "Closing Ceremony",
        //             "title": "Closing Ceremony", 
        //             "speaker": {
        //                 "name": "Micha Weis",
        //                 "designation": "CyberSecurity advisor",
        //                 "company": "Ministry of Finance",
        //                 "bio": <p>
        //                    Micha Weis has vast experience in cybersecurity and Information Security, FinTech, innovation, and regulation. All in the
        // military, finance and government sectors
        // - Integrating cybersecurity technologies, innovation, and FinTech on a national level
        // - Managing the Israeli National Financial CERT ??? the Cyber and Finance Continuity Center
        // - Supply chain guidance on cybersecurity, business continuity, risk management, and cyber resilience
        // - Coordination with the National Cyber Directorate, financial sector regulators and business continuity instructors (in the energy, communication, transportation, and civil defense sectors)
        // - Strategizing and defining the Cybersecurity architecture perception, cloud services, policies, and guidance for enterprise organizations, while supporting the implementation of decision-makers
        // - Developing risk assessment processes, sectorial situation reports, cross-sectoral information sharing infrastructure methods and more
        //                 </p>,
        //                 "image": require('../../../images/speakers/michaweis.jpeg'),
        //             },
        //         },
        //         {
        //             "slug": "privacy-preserving-data-analysis",
        //             "title": "Privacy Preserving Data Analysis",
        //             "abstract": <>
        //                 Information sharing brings mutual benefit for governments, military services, corporates, financial
        //                 organizations,  health centers,  individuals, and even competitors. This benefit is resulted from
        //                 the additional intelligence that is inferred through collaborative data analysis. Such an intelligence
        //                 can be used to improve revenues, e.g. through best practice sharing, market basket analysis,
        //                 preventing loss coming from brand-new potential cyber-threats, analysis of medical data. Independently
        //                 from the final goal,   information sharing brings issues and drawbacks related to information privacy.
        //                 Shared information might be sensitive, potentially harming the privacy of physical persons, such as
        //                 employee records for business applications, or patient records for medical ones. In this talk, we
        //                 discuss the privacy issues in data sharing and we present the solutions for some specific scenarios
        //                 in this regard.
        //             </>,
        //             "speaker": {
        //                 "name": "Mina Sheikhalishahi",
        //                 "designation": "Security Researcher",
        //                 "company": " Eindhoven University of Technology",
        //                 "image": require('../../../images/speakers/mina_sheikhalishahi.jpg'),
        //                 "links": {
        //                     "linkedin": "https://linkedin.com/in/mina-sheikhalishahi-3184757a",
        //                 },
        //                 "bio": <p>
        //                     Mina Sheikhalishahireceived her Ph.D. in Computer Science at Laval University, Canada,
        //                     in 2016,with a Ph.D. thesis on "Spam Campaign Detection, Analysis and Formalization". She
        //                     joined the "Security Group" at Institute forInformatics and Telematics of CNR, Italy as postdoc
        //                     in 2016. She visited the Security Group at Delft University in 2018. Currently, she is a
        //                     post-doc researcher in the Security Group at Eindhoven University of Technology. Her research
        //                     is mainly focused on privacy preserving data analysis.
        //                 </p>
        //             },
        //         },
        //         {
        //             "slug": "techniques-and-tooling-with-flare-on-20",
        //             "title": "Techniques and Tooling with Flare-on'20",
        //             "abstract": <>
        //                 Flare-on is famous CTF style challenge conducted by FireEye where the main focus 
        //                 is on reverse engineering variety of formats including windows and Linux.  In this 
        //                 talk, we will discuss how to approach flare-on, what all are the tools and techniques 
        //                 that will help in understanding and solving the challenges and walkthrough of some of 
        //                 the interesting challenges of flare-on 2020.
        //             </>,
        //             "speaker": {
        //                 "name": "Sreelakshmi Panangatt",
        //                 "designation": "Security Engineer",
        //                 "company": "VMware",
        //                 "image": require('../../../images/speakers/sreelakshmi.JPG'),
        //                 "links": {
        //                     "linkedin": "https://www.linkedin.com/in/sreelakshmi-panangatt-b67b58105/"
        //                 },
        //                 "bio": <p>
        //                     Sreelakshmi is a security Engineer working for VMware product security team. 
        //                     Her responsibilities include vulnerability assessment and attack surface analysis. 
        //                     She is one of the winners of flare-on 2020. She holds a master???s degree in cybersecurity 
        //                     systems from Amrita University and Vrije University, Amsterdam. More about her works can 
        //                     be found at <a href="https://sreelakshmip.wordpress.com/">https://sreelakshmip.wordpress.com</a>. 
        //                 </p>
        //             },
        //         },
        //         {
        //             "slug": "welcome-note",
        //             "title": "Welcome Note",
        //             "abstract": <>
        //                 Sreepriya will deliver the welcome note for ShaktiCon. She will provide a glimpse into
        //                 how the idea of ShaktiCon came about, what has been achieved so far and what our goals 
        //                 and aspirations are. 
        //             </>,
        //             "speaker": {
        //                 "name": "Sreepriya Chalakkal",
        //                 "designation": "Security Analyst",
        //                 "company": "Siemens ProductCERT",
        //                 "image": require('../../../images/crew/sreepriya.jpg'),
        //                 "links": {
        //                     "linkedin": "https://www.linkedin.com/in/sreepriyac/",
        //                     "twitter": "https://twitter.com/priyachalakkal"
        //                 },
        //                 "bio": <p>
        //                     Sreepriya is a Security Analyst at Siemens ProductCERT, where she focuses on vulnerability 
        //                     handling and incident response. Previously she worked as a pentester at Ernw GmbH, Germany, 
        //                     in the mobile security team. She enjoys playing with security challenges in applications, 
        //                     networks and binaries. She is mentor of TeamShakti, a women CTF team from India. Also, core 
        //                     organiser of <a href="https://shakticon.com">ShaktiCon</a>, a women only security conference. Also serves 
        //                     as a board member of <a href="https://blackhoodie.re">BlackHoodie</a>. Completed masters from Technical 
        //                     University of Berlin and University of Trento with major Computer Security and Privacy in March 2017.
        //                 </p>
        //             },
        //         },
        //         {
        //             "slug": "introduction-to-fuzzing",
        //             "title": "Introduction to Fuzzing",
        //             "speaker": {
        //                 "name": "Allison Marie Naaktgeboren",
        //                 "isTrainer": true,
        //                 "designation": "Researcher",
        //                 "company": "Portland State University",
        //                 "image": require('../../../images/speakers/allison.jpg'),
        //                 "links": {
        //                     "linkedin": "https://www.linkedin.com/in/a-m-naaktgeboren/"
        //                 },
        //                 "bio": <p>
        //                     Allison Marie Naaktgeboren is a cybersecurity doctoral researcher (fancyspeak for PhD student) and
        //                     a semi-retired senior software engineer. Her current research focuses on fuzzing. She has a
        //                     Bachelor???s Degree in Computer Science from Carnegie Mellon University. She has previously written
        //                     (and regretted) code at Signal Sciences, Mozilla, Amazon, Cisco, FactSet Research Systems, and the
        //                     Biorobotics Laboratory. She run the Portland State Security Club & CTF team and an all women???s CTF
        //                     team in Portland. She is part of the WomenWhoCode PDX and OWASP PDX leadership teams.
        //                 </p>
        //             },
        //         },
        //         {
        //             "slug": "machines-learning-for-security",
        //             "title": "So you want to try your hand at machine learning for security???",
        //             "abstract": <>
        //                 Security expertise is scarce. Machine learning and AI can help defenders scale and provide protection
        //                 from attackers. This talk will cover real case studies of what applications of ML in security look
        //                 like and the major challenges in implementing them. We will discuss the challenges of translating
        //                 cutting edge ML research into different aspects of security (AV, IDS, TI etc). If you are interested
        //                 in dipping your toes in this powerful domain, we will share tools and resources to get started.
        //             </>,          
        //             "speaker": {
        //                 "name": "Bhavna Soman",
        //                 "designation": "ML Security Researcher",
        //                 "company": "Microsoft",
        //                 "image": require('../../../images/speakers/bhavana.JPG'),
        //                 "links": {
        //                     "twitter": "https://twitter.com/bsoman3",
        //                 },
        //                 "bio": <p>
        //                     Bhavna Soman is a Senior Security Research Lead working for the Microsoft Defender Research Team.
        //                     In her day job, she develops Machine Learning models to classify malware in real time. In the past
        //                     she worked in the field of Threat Intelligence and loves to play with Natural Language processing
        //                     algorithms. Bhavna holds a master's degree in Computer Security from Georgia Tech and is also a
        //                     trainer for Malware Reverse Engineering with Blackhoodie.
        //                 </p>
        //             },
        //         },

        //         {
        //             "slug": "software-security-pragmatic-approach",
        //             "title": "A pragmatic approach on software security",
        //             "speaker": {
        //                 "name": "Priti Shrivastav",
        //                 "designation": "Former General Manager Software Security",
        //                 "company": "Intel Corporation",
        //                 "image": require('../../../images/speakers/priti.jpeg'),
        //                 "links": {
        //                     "linkedin": "http://linkedin.com/in/priti-shrivastav-59878a2"
        //                 },
        //                 "bio": <p>
        //                     Former General Manager Software Security at Intel corporation. Nine years managed security of all 
        //                     the software products in the area of operating systems, cloud services, developers tools, 
        //                     performance libraries, AI SDKs,  graphics software, compilers, and many security solutions at Intel. 
        //                     Prior to working on security Priti Shrivastav managed various products like compilers, binary translation software, 
        //                     parallel advisor and other important products and services at Intel. She has MS in Computer Science from 
        //                     Ohio University, US and MS in Math/CS from IIT Delhi, India. She is passionate about promoting women in 
        //                     cybersecurity to reach their professional goals.
        //                 </p>
        //             }
        //         },

        //         {
        //             "slug": "internet-of-drones-security",
        //             "title": "Internet of Drones Security",
        //             "abstract": <>
        //                 With an increased data rate, lower latency and high reliability, 5G network is becoming the key technology 
        //                 serving Internet of Things (IoT) and subsequently Internet of Drones (IoD) connectivity. Connected Unmanned 
        //                 Aerial Vehicles (UAVs) or drones would be widely deployed by government entities as well private enterprises 
        //                 for various applications namely smart city, transportation, industry and digital health. Some of these 
        //                 applications carry critical missions such as military, public safety, mobility, energy and emergency services, 
        //                 where an anomaly in the original function means the difference between life and death. Therefore, a secure 
        //                 architecture and communication is a major consideration for the entities that provide mentioned services.
        //             </>,
        //             "speaker": {
        //                 "name": "Mehrnoosh Monshizadeh",
        //                 "designation": "Cybersecurity Specialist",
        //                 "company": "Nokia Bell Labs",
        //                 "image": require('../../../images/speakers/mehrnoosh.jpeg'),
        //                 "bio": <p>
        //                     Mehrnoosh is working at Nokia Bell Labs research department as Cybersecurity Specialist. 
        //                     Her research area includes utilizing and optimizing artificial intelligence for IoT security, 
        //                     Drone/Robot security, Digital Health security and cloud security (SDN/NFV). She has been working 
        //                     previously on development of LTE core network and Lawful Interception.
        //                 </p>
        //             }
        //         },
        //         {
        //             "slug": "firmware-security-an-introduction",
        //             "title": "Firmware Security - An Introduction",
        //             "abstract": <>
        //                 This talk will be centered around firmware security. We will look at the attacks on firmware, 
        //                 and the need for firmware security. We will also look at first steps in implementing firmware 
        //                 security and AMI's contributions towards firmware security solutions.
        //             </>,
        //             "speaker": {
        //                 "name": "Priyadharshini Krishnan",
        //                 "designation": "Engineering Manager",
        //                 "company": "American Megatrends International LLC",
        //                 "image": require('../../../images/speakers/priyadharshini.jpg'),
        //                 "bio": <p>
        //                     Priyadharshini is an Engineering manager working for AMI???s Security Services and Solutions 
        //                     group. She currently leads a team that mainly focuses on software and firmware security 
        //                     solutions. Prior to this, she has been working on developing tools and applications that 
        //                     enable firmware development and debugging. She holds a bachelor???s degree in Computer Science 
        //                     and Engineering from Madras university.
        //                 </p>
        //             },
        //         },
        //         {
        //             "slug": "recon-to-software-supply-chain-attack",
        //             "title": "Recon to Software Supply Chain Attack",
        //             "abstract": <>
        //                 As our society is becoming more and more technologically reliant, the importance of cybersecurity 
        //                 is on rise. A single cyber-attack can cause heavy damages to businesses. Organisations today face 
        //                 unprecedented number of attacks that begin even before any software is ever made. Supply chain 
        //                 attacks can damage organisations, individual departments, or entire industries by targeting and 
        //                 attacking insecure elements of the software supply chain. A software supply chain attack infiltrates 
        //                 software life cycle by leveraging open source components to inject malicious code in order to 
        //                 compromise software systems further down the chain. <br />
        //                 <br />
        //                 The presentation will discuss how simple recon techniques like JavaScript recon, GitHub recon, 
        //                 social engineering can lead to highly damaging software supply chain attacks and measures to 
        //                 protect against them. <br />
        //                 <br />
        //                 The target audience for this talk would be anybody who is currently working or who has just 
        //                 started in cybersecurity field or anybody who wants to learn something new.
        //             </>,
        //             "speaker": {
        //                 "name": "Komal Armarkar",
        //                 "designation": "Security Analyst",
        //                 "company": "CrowdStrike",
        //                 "image": require('../../../images/speakers/komal.jpeg'),
        //                 "bio": <p>
        //                     Komal Armarkar is currently working as Security Analyst in Spotlight vulnerability management 
        //                     team at CrowdStrike. In her overall experience of 7 years, she has worked in various fields 
        //                     like policy compliance, Linux system administration and application security. She has a keen 
        //                     interest in vulnerability analysis and research, application security.
        //                 </p>
        //             },
        //         },
        //         {
        //             "slug": "evolution-of-endpoint-detection-and-response",
        //             "title": " Evolution of Endpoint Detection and Response(EDR)",
        //             "abstract": <>
        //                 In this talk, Aarti looks at the evolution of EDR technology over the years and how the cloud has 
        //                 been leveraged to improve upon the fidelity of traditional EDR systems.
        //             </>,
        //             "speaker": {
        //                 "name": "Aarti Gupta",
        //                 "designation": "Director Engineering",
        //                 "company": "CrowdStrike",
        //                 "image": require('../../../images/speakers/aartigupta.png'),
        //                 "bio": <p>
        //                     Aarti is a Director of Engineering at CrowdStrike, she is currently working on a next-gen 
        //                     cloud-based security product. Previously, she was Director of Engineering at Qualys and was 
        //                     responsible for building out Qualys???s Security Analytics platform. Aarti has extensive experience 
        //                     with building web scale systems, having previously worked for Amazon and Hotstar.
        //                 </p>
        //             },
        //         },
        //         {
        //             "slug": "panel-discussion-cybercrime-and-pathways",
        //             "title": "Panel Discussion: Cybercrime and Pathways",
        //             "abstract": <>
        //                 The panel discussion will be about the most prevalent cyber crime today in India, and the policies that 
        //                 are being designed to tackle them. Sundari will moderate the panel discussion. She will be joined by other 
        //                 esteemed guests. 
        //             </>,
        //             "speaker": {
        //                 "name": "Sundari Nanda",
        //                 "designation": "CVO & Special Commissioner(Vigilance)",
        //                 "company": "Delhi Police",
        //                 "image": require('../../../images/speakers/sundarinanda.jpeg'),
        //                 "bio": <p>
        //                     Sundari Nanda has served with Delhi, Goa and Arunachal Pradesh Police. she has been on deputation with 
        //                     the Central Bureau of Investigation for seven years and also served as Commandant, 2nd Battalion of 
        //                     Arunachal Armed Police, deployed along with the terrorist infested border of Assam. <br />
        //                     <br /> 
        //                     Cyber Initiatives launched:<br />
        //                     <ul>
        //                         <li>She established the Cyber Crime Investigation Cell of CBI in the year 2000, which was the first 
        //                             in India</li>
        //                         <li>As DCP (Crime against Women) Cell of the Delhi Police for a short stint in 1995, she registered the first 
        //                             case in India on incest, which brought this hitherto cupboard issue into the open.</li>
        //                         <li>As the Secretary of the Delhi Police Recruitment Board during 1997, she was the first to completely 
        //                             computerize the recruitment.</li>
        //                     </ul>
        //                 </p>
        //             },
        //         },
        //         {
        //             "slug": "cyber-security-of-embedded-networks-in-heavy-vehicles",
        //             "title": "Cybersecurity of Embedded Networks in Heavy Vehicles", 
        //             "abstract": <>
        //                 Trucks play a very role important role in driving the nation's economy, moving more than 70% of all the freights 
        //                 transported in the US by weight. Any event that grounds all trucks even for a few days, have severe consequences, 
        //                 including food shortages, hospitals exhausting their oxygen supplies, and gas stations running out of fuel. While 
        //                 we have not yet faced such a situation, the way modern heavy vehicles are designed, this increasingly looks like 
        //                 a distinct possibility. Modern day trucks are equipped with numerous sensors, embedded controllers, communication 
        //                 networks, and electro-mechanical systems that work in tandem to improve their performance, efficiency, safety, 
        //                 connectivity, and user-experience. However, they also bring up serious cyber threats to the truck's operation. <br />
        //                 <br />
        //                 In this talk, we discuss cybersecurity in the context of modern day trucks and heavy vehicles. We discuss 
        //                 vulnerabilities our group has identified that span across all modern day heavy vehicles and allow a hacker to 
        //                 access the embedded controller network of a truck to cause different types of attacks including ones that cause 
        //                 a truck to not be able to start or stop.  We present some approaches for detecting attacks in real-time and show 
        //                 how we can distinguish them from  safety-critical events. We have developed reporting tools and techniques that 
        //                 can aid the heavy vehicle drivers in near real-time to make informed decisions in the event of a cyber attack. 
        //                 We conclude  by discussing some of our future research directions in heavy vehicle security.
        //             </>, 
        //             "speaker": {
        //                 "name": "Indrakshi Ray",
        //                 "designation": "Professor, Computer Science Department",
        //                 "company": "Colorado State University", 
        //                 "image": require('../../../images/speakers/indrakshiray.jpeg'),
        //                 "bio": <p>
        //                     Dr. Indrakshi Ray is a Professor in the Computer Science Department at Colorado State University. She is the 
        //                     Director of Colorado Center for Cybersecurity at Colorado State University. She is also the Site Director of 
        //                     NSF IUCRC Center for Cybersecurity Analytics and Automation. Dr. Ray  has been a visiting faculty at Air Force 
        //                     Research Laboratory, Naval Research Laboratory, and at INRIA, Rocquencourt, France. She obtained her Ph.D. in 
        //                     Information Technology from George Mason University. <br />
        //                     <br />
        //                     Dr. Ray's research interests include  software assurance, data analytics and security. She has published 
        //                     almost two hundred technical papers in refereed journals and conference proceedings with the support from agencies 
        //                     including Air Force Research Laboratory, Air Force Office of Scientific Research, National Institute of Health, 
        //                     National Institute of Standards and Technology, National Science Foundation, the United States Department of 
        //                     Agriculture, and industries from the US, Norway, and Japan. <br />
        //                     <br /> 
        //                     Dr. Ray is on the editorial board of IEEE Transactions on Services Computing, International Journal of Information 
        //                     Security, Computer Standards and Interfaces, and Associate Editor of IEEE Security & Privacy. She was a member 
        //                     of the editorial board of IEEE Transactions on Dependable and Secure Computing. She serves on the program committees 
        //                     of various prestigious conferences and has chaired many of them. Dr. Ray  is a senior member of the IEEE and a senior 
        //                     member of the ACM. Dr. Ray is also active in endeavors trying to increase minority participation in Computer Science.
        //                 </p>,
        //             },

        //         },
        //         {
        //             "slug": "understanding-bluetooth-security",
        //             "title": "Understanding Bluetooth security.",
        //             "speaker": {
        //                 "name": "Renu D S",
        //                 "designation": "Penetration Test Engineer",
        //                 "company": "Schneider-Electric",
        //                 "image": require('../../../images/speakers/renuds.png'),
        //                 "links": {
        //                     "linkedin": "http://linkedin.com/in/priti-shrivastav-59878a2"
        //                 },
        //                 "bio": <>
        //                      Renu D S is a Penetration Test Engineer at Schneider-Electric with an overall experience of 2.5 years 
        //                      mainly focusing on embedded, wireless and web security.",
        //                 </>
        //             }
        //         },
        //         {
        //             "slug": "decoding-the-cybersecurity-career-path",
        //             "title": "Decoding the Cybersecurity Career Path",
        //             "abstract": <>
        //                 The cybersecurity skill shortage is getting worse and the industry is in huge demand for skilled cybersecurity 
        //                 professionals. But on the other hand industries still find it challenging to recruit right talents for their 
        //                 open position due to shortage of skilled professionals for a particular job profile. One of the reason for 
        //                 this is that cybersecurity aspirants and graduates are not sure on how to start their career in this industry. 
        //                 These young aspirants are so overwhelmed with lot of resources, online courses and blogs, that they feel lack 
        //                 of focus or clarity in their career goals. Many kinds of job roles are available within cybersecurity and many 
        //                 aspirants don't have a visibility on what these roles are all about and hence not able to judge whether a particular 
        //                 role is right fit for them or not. This talk covers an overview on how to start a career in cybersecurity, 
        //                 different roles and career option available in cybersecurity . This talk would also cover on certain aspects on 
        //                 how to advance in this career from Entry level to Senior Level.
        //             </>, 
        //             "speaker": {
        //                 "name": "Sabna Sainudeen",
        //                 "designation": "President",
        //                 "company": "(Women in CyberSecurity) WiCyS India ",
        //                 "bio": <p>
        //                     Sabna Sainudeen is a Senior cybersecurity professional with exceptional skills and experience into mobile, 
        //                     cloud and IoT security. She is currently associated with Schneider Electric and is responsible for addressing 
        //                     security of IoT products including Industrial Control Systems and Home automation products. She is an Edison 
        //                     Expert @ Schneider Electric (Title given to selected senior level experts for their outstanding contribution 
        //                     in area of expertise).   Sabna is the President of Women in Cybersecurity (WiCyS) India and through leading 
        //                     this community, she thrives to bid the gender gap that exist in Cybersecurity, with a mission to recruit, 
        //                     retain, and promote women in cybersecurity in India. Sabna is also a core member of WISE(Women in Schneider 
        //                     Electric).She is part of various communities and initiatives within and outside her organization.
        //                 </p>,
        //                 "image": require('../../../images/speakers/sabna.JPG'),
        //             },
        //         },
        //         {
        //             "slug": "achieving-excellence-in-cybersecurity",
        //             "title": "Achieving Excellence in Cybersecurity",
        //             "abstract": <>
        //                 In her talk, Asha will shed light on the different kinds of profiles in the field of cybersecurity, what type 
        //                 of skills are required for them, and how to develop these skills. 
        //             </>, 
        //             "speaker": {
        //                 "name": "Asha Poluru",
        //                 "designation": "Head HR",
        //                 "company": "Sophos, India",
        //                 "image": require('../../../images/speakers/ashap.jpeg'),
        //                 "links": {
        //                     "linkedin": "https://www.linkedin.com/in/asha-poluru-a5509854/",
        //                 },
        //                 "bio": <p>
        //                     Asha Poluru is a seasoned HR leader at Sophos, India with 20+ years of expertise in the industry. 
        //                 </p>,
        //             },
        //         },
        //         {
        //             "slug": "a-few-thoughts-on-authenticated-encryption",
        //             "title": "A Few Thoughts on Authenticated Encryption",
        //             "abstract": <>
        //                 In this talk we discuss about the need for authenticated encryption and the current state of art in 
        //                 the design and analysis of AE Schemes.
        //             </>, 
        //             "speaker": {
        //                 "name": "Lakshmy K.V.",
        //                 "designation": "Assistant Professor",
        //                 "company": "Amrita University",
        //                 "image": require('../../../images/speakers/kvlakshmy.jpeg'),
        //                 "bio": <p>
        //                     Dr. Lakshmy K. V. obtained her PhD (Cryptographic Boolean fuinctions) from Amrita Vishwa Vidyapeetham. 
        //                     Currently, She is working as Assistant Professor at TIFAC-CORE in Cybersecurity,  Amrita Vishwa Vidyapeetham, 
        //                     Coimbatore. Her research interests are Cryptography, Cryptanalysis, Cryptogaphic Protocols and Abstract algebra. 
        //                 </p>,
        //             },
        //         },
        //         {
        //             "slug": "covert-delivery-mechanisms",
        //             "title": "Covert delivery mechanisms",
        //             "abstract": <>
        //                 Secure communication methods using steganography, watermarking and also network protocols for covert 
        //                 communication will be discussed in this talk. Obfuscation is a defense against various reverse engineering 
        //                 techniques. Software obfuscation translates software into a semantically equivalent one that is hard for 
        //                 attackers to analyze. Some obfuscation techniques will be introduced in this talk.                  
        //             </>, 
        //             "speaker": {
        //                 "name": "Amritha P.P.",
        //                 "designation": "Assistant Professor",
        //                 "company": "Amrita University",
        //                 "image": require('../../../images/speakers/ppamritha.jpeg'),
        //                 "bio": <p>
        //                     Dr. Amritha P.P obtained her Ph.D (Steganalysis) from Amrita Vishwa Vidyapeetham. Currently, She is an Assistant 
        //                     Professor at TIFAC-CORE in Cybersecurity, Amrita Vishwa Vidyapeetham, Coimbatore. Her research interests are 
        //                     Steganography, Steganalysis, Watermarking, Software obfuscation and machine learning in cybersecurity.  
        //                 </p>,
        //             },
        //         },
    ]

    const main_speaker = [
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
    ]
    return <div>
        <SpeakersContainer id="speakers">
            <div className="container">
                <div className="row mx-0">
                    <div className="col-12 px-2 py-3 text-center"><br /><br /> <br />
                        {/* <Fade left> */}
                        {!hideTitle && <h2>Distinguished Speakers</h2>}
                        {/* </Fade> */}
                    </div>

                    {main_speaker.map((s, index) =>
                        <div key={shortid.generate()} className="col-xl-3 col-lg-3 col-md-4 col-12 p-2">
                            <SpeakerCardMain isTrainer={s.isTrainer}><br /><br />
                                <div>
                                    {/* {s.isTrainer ?
                                    <div className="trainer-badge">{s.speakType}</div>
                                    : <div className="speaker-badge">Speaker</div>
                                } */}
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
                            </SpeakerCardMain><br /><br />
                        </div>
                    )}
                </div>
            </div>
        </SpeakersContainer>
        <TrainingModuleWrap id="conference-speakers">
            <div className="container">

                <div className="py-4 px-2">
                    {SpeakersList.map((s) =>
                        <Fade key={s.slug}>
                            <div className="mb-4">
                                <SpeakerCard  {...s} />
                            </div>
                        </Fade>
                    )}
                </div>
            </div>
            <div className="container"><br /><br /> <br />
                {!hideTitle && <h2>Pre-Conference Speakers</h2>}
                <div className="py-4 px-2">
                    {PreConfList.map((s) =>
                        <Fade key={s.slug}>
                            <div className="mb-4">
                                <SpeakerCard  {...s} />
                            </div>
                        </Fade>
                    )}
                </div>
            </div>

        </TrainingModuleWrap>
    </div>

};

export default ConSpeakers;
