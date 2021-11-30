import React, { useState } from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const FAQContainer = styled.section`
      background: #222640;
      padding: 8vh 3vw;
      color: white;
      h3 {e
         font-size: calc(1.5rem + 1.5vw);
         font-weight: 600;
      }
`;

const FAQQuestionContainer = styled.div`
    button{
        background: none;
        border: none;
        display: block;
        color: #EEE;
        text-align: left;
        font-size: calc(1rem + 0.35vw);
        padding: 0.5rem;
        i {
          margin-right: 1rem;
        }
        &:focus {
          outline: none!important;
        }
    }
`;

const QuestionCard = ({ question, answer }) => {

    const [isOpen, setOpen] = useState(false);

    return <FAQQuestionContainer>
        <button onClick={() => setOpen(!isOpen)}>
            {!isOpen ? <i className="fa fa-chevron-down" /> : <i className="fa fa-chevron-up" />}
            {question}
        </button>
        {isOpen && <div className="px-4 pb-3">
            {answer}
        </div>}
    </FAQQuestionContainer>

}

const FAQSection = () => {

    const questions = [
        {
            "question": "Is this a quiz?",
            "answer": <>
                <p>
                    No. InCTF is a Capture The Flag Championship, which is a more practical hands-on computer security competition. Unlike quizzes, a participant will be working with actual tools & using problem solving skills to solve challenges and obtain a flag that earns them points.
                </p>
                {/* <p>
                    Trainings & Contests are only for women (including non-binary people identifying as women) participants.
                    If you are eligible for prizes in a contest (CTF), you will be contacted for identity
                    verification so that the game stays fair for all participants.
                </p>
                <p>
                    We welcome all women  who have the curiosity to try new things and interest in cybersecurity to
                    take part in this conference. No previous cybersecurity experience is needed.
                </p> */}
            </>
        },
        {
            "question": "What is a capture the flag competition?",
            "answer": <>
                <p>
                CTFs (Abbreviation for Capture The Flag) are a type of computer security competition. Contestants are presented with a set of challenges which test their creativity, technical (and googling) skills, and problem-solving ability. Challenges usually cover a number of categories, and when solved, each yields a string (called a flag) which is submitted to an online scoring service.
                </p>
                <p>
                CTFs are a great way to learn a wide array of computer security skills in a safe, legal environment, and are hosted and played by many security groups around the world for fun and practice.
                </p>
                {/* <p>
                    We welcome all women  who have the curiosity to try new things and interest in cybersecurity to
                    take part in this conference. No previous cybersecurity experience is needed.
                </p> */}
            </>
        },
        {
            "question": "How can you register?",
            "answer": <>
                Click the register button, and sign up in our dashboard. You will find more information about various
                upcoming events. Also please join our discord, if you want to get verified.
            </>
        },
        {
            "question": "How is the verification done?",
            "answer": <>
                As this conference aims at bridging the diversity gap in the field of cybersecurity, there will be a
                verification process on an individual basis to validate participant’s identity before being allowed
                to participate in InCTFCon trainings. You will get more details regarding this once you sign
                up for our events.
            </>
        },
        {
            "question": "I am totally new to cybersecurity, can I take part?",
            "answer": "YES, anyone who is new to cybersecurity can take part. No prior skills needed. You only need to come armed with curiosity, patience and enthusiasm to learn"
        },
        {
            "question": "How do I start learning?",
            "answer": <>
                You can start learning by going through the basics of each category given on bi0s wiki.
                Also, there are many video lectures you can watch explaining basic challenges on Amrita InCTF Junior .
                You can also practice challenges on bi0s-archive. Additionally, you can google and find many more
                resources on any individual topic you are interested in. We encourage lots of independent learning!
            </>
        },
        {
            "question": "Should I need Lap/Pc to particiapte?",
            "answer": <>
                Unfortunately, yes. You will need to have a laptop or a PC in-order to participate in InCTF. You would need use techniques and some tools that only are available on a PC/Laptop.
            </>
        },
        {
            "question": "where does this happen?",
            "answer": <>
                The Internet! The competition will be indefinitely available online at this website. As long as you have the ability to install software and have unfiltered Internet access, the participants can compete from anywhere in India.
            </>
        },
        {
            "question": "What are the topic included?",
            "answer": <>
                <li>Reverse engineering</li>
                <li>Binary exploitation</li>
                <li>Web exploitation</li>
                <li>Cryptography</li>
                <li>Forensics</li>
                <li>Trivia</li>
            </>
        },
        {
            "question": "Why should I participate in this?",
            "answer": <>
                <li>Develop hands on skills in cybersecurity.</li>
                <li>Meet like minded people around the world.</li>
                <li>Free workshops.</li>
                <li>Exciting prizes.</li>
                <li>Chance to interview with some of our sponsors for cybersecurity job roles.</li>
                <li>Attend the cybersecurity conference for free.</li>
            </>
        }
    ]

    return <FAQContainer id="faq">
        <div className="container p-2">
            <h2 style={{ fontWeight: "bold", fontSize: "2.5rem",color:"tomato" }}>Frequently Asked Questions</h2>
            <div style={{ maxWidth: '800px' }}>
                {questions.map((q, index) =>
                    <Fade up delay={index * 300}>
                        <QuestionCard {...q} />
                    </Fade>
                )}
            </div>
        </div>
    </FAQContainer>

};

export default FAQSection;