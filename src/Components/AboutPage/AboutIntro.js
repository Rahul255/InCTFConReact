import React from "react";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const IntroSectionWrap = styled.section`
  background: ${({ bg }) => (bg ? `url(${bg})` : "#333")};
  @media (max-width: 768px) {
    background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(46, 0, 37, 0.8) 37%,
        rgba(254, 0, 100, 0.4) 51%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      linear-gradient(
        51deg,
        rgba(82, 55, 15, 1) 0%,
        rgba(71, 83, 0, 1) 40%,
        rgba(0, 50, 124, 1) 100%
      );
  }
  background-size: cover;
  color: #eee;
  margin-top: 50px;
  h4 {
    font-weight: 900;
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.5);
    font-size: calc(1.8rem + 1.2vw);
  }
  h1 {
    font-weight: 900;
    font-size: calc(2rem + 1.2vw);
    text-transform: uppercase;
    text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    padding: 5vh 1rem;
    min-height: 80vh;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.35) 20%,
      rgba(0, 0, 0, 0.85)
    );
  }
  p {
    color: white;
    font-size: 20px;
    max-width: 900px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    b {
      font-weight: 600;
      color: yellow;
    }
  }
`;

const AboutIntro = () => {
  return (
    <IntroSectionWrap bg={require("../../images/com.jpg").default}>
      <div className="wrapper d-md-flex align-items-center justify-content-end">
        <div style={{ maxWidth: "1000px" }}>
          <Fade>
            <h4 style={{color:"tomato"}}>What is InCTFCon?</h4>
          </Fade>
          <Fade delay={200}>
            <h1>Inspiring & Empowering Youth in CyberSecurity</h1>
          </Fade>
          <div>
            <Fade delay={350}>
              <p style={{color:""}}>
                InCTFCon is a global conference aimed at training, encouraging
                and educating young people to pursue, espouse and embrace
                cybersecurity.
              </p>
            </Fade>
            <Fade delay={500}>
              <p style={{color:""}}>
                InCTFCOn offers contests, programs and world-class workshops
                along with the pre-conference event InCTF, which is one of the
                biggest cybersecurity contests in India. 
              </p>
            </Fade>
            <Fade delay={650}>
              <p>
              Over the years,
                InCTFCon has created a unique, ever-growing community with
                people from academia and the industry, ready to empower young
                people for years to come.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </IntroSectionWrap>
  );
};

export default AboutIntro;
