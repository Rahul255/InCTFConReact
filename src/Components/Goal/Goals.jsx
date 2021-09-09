import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import ScrollContainer from "react-indiana-drag-scroll";

const GoalsContainer = styled.div`
    background: #222;
    padding: 2vh 0;
    h2 {
        font-size: calc(1.5rem + 2vw);
        text-align: center;
        color: tomato;
        font-weight: 600;
        padding: 1.5rem 0;
        margin-bottom: 1rem;
    }
`;

const GoalCard = styled.div`
    img {
      max-width: 100%;
      border-radius: 15px;
      box-shadow: 2px 3px 8px rgba(0,0,0,0.35);
    }
    p {
      color: #AAA;
      text-align: center;
      margin-top: 13px;
      font-size: 14px;
    }
    transition: all 1s ease;
    &:hover {
        transform: translateY(-20px);
        transition: all 1s ease;
        p {
           color: white;
        }
    }
`;



const EventGoals = () => {

    const goals = [
        {
            "cover": require('../../images/covers/Data_security_01.jpg').default,
            "text": "There are a lot of untapped opportunities for people to take up the role of safeguarding a digital space.",
        },
        {
            "cover": require('../../images/covers/Data_security_02.jpg').default,
            "text": "There is a heavy global demand for cybersecurity professionals but there aren’t many skilled people out there. This job pays really well!"
        },
        {
            "cover": require('../../images/covers/Data_security_03.jpg').default,
            "text": "The projected growth of employment in cybersecurity is estimated to be around 3.5 million new job opportunities by 2022."
        },
        {
            "cover": require('../../images/covers/Data_security_04.jpg').default,
            "text": "The danger of a cyber pandemic is imminent and the world needs cybersecurity professionals to protect the world from such an attack – just like a superhero!"
        }
    ];

   

    return (<GoalsContainer>
        <div className="container" style={{ maxWidth: '1333px' }}>
            <h2>Why InCFTCon</h2>
            <ScrollContainer vertical={true} className="scroll-container py-2">
                <div className="d-flex p-3">
                    {goals.map((g, index) =>
                        <GoalCard className="col-9 col-md-6 col-lg-3 p-2">
                            <Fade up={index%2===0} down={index%2!==0} delay={index*350}>
                                <img alt="illustration" draggable="false" src={g.cover} />
                                <p>{g.text}</p>
                            </Fade>
                        </GoalCard>
                    )}
                </div>
            </ScrollContainer>
        </div>
    </GoalsContainer>
    );

};

export default EventGoals;