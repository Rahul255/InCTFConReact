import React from "react";
// import styled from "@emotion/styled";
// import Fade from "react-reveal/Fade";
import "./Sponsors.css";

const LandingSponsorship = () => {
  const inCTFSponsors = [
    {
      name: "Salesforce",
      image: require("../../images/sponsor/salesforce.png").default,
      desg: "Event Sponsor",
      details:
        "Salesforce, the Customer Success Platform and world’s #1 CRM, empowers companies to connect with their customers in a whole new way. The company was founded on three disruptive ideas: a new technology model in cloud computing, a pay-as-you-go business model, and a new integrated corporate philanthropy model. These founding principles have taken our company to great heights, including being named one of Forbes’s “World’s Most Innovative Company” five years in a row and one of Fortune’s “100 Best Companies to Work For” eight years in a row. We are the fastest growing of the top 10 enterprise software companies, and this level of growth equals incredible opportunities to grow a career at Salesforce.",
    },
    {
      name: "Zoho",
      image:
        require("../../images/sponsor/zoho-1e78182f2870ef5f7277b10047c556e1.png")
          .default,
      desg: "Diamond Sponsor",
      details:
        "At ZOHO Security team, we do a lot of exciting stuff including Security Source code Analysis, Intrusion Detection System, WAF and whatnot. The cool part is most of the security tools we use here are in-house tools built by our awesome team from scratch. We do have our internal red team who simulates a lot of offensive operations like Social Engineering, Application Hacking, Hijacking security cameras and simply compromise whatever is vulnerable from machines to humans. We have got a quite balance of red and blue team. Would you like to join our team ZHIELD? (Oh yea, That's how we call ourselves!) , Send your resume to security@zohocorp.com",
    },
    {
      name: "Crowdstrike",
      image: require("../../images/sponsor/crowdstrike.png").default,
      desg: "Platinum Sponsor",
      details:
        "CrowdStrike is a leading cybersecurity company protecting customers from all cyber threats by leveraging its Security Cloud to stop breaches. From its inception in 2011, CrowdStrike was created as a different kind of cybersecurity company. Cloud-native, CrowdStrike immediately brought a threat perspective, effectiveness, scalability, and flexibility never seen before in the industry – seamlessly aligning People, Technology, and Processes. And it doesn’t stop there. At CrowdStrike we’re on a mission - to stop breaches. Our ground breaking technology, services delivery, and intelligence gathering together with our innovations in machine learning and behavioural-based detection, allow our customers to not only defend themselves, but do so in a future-proof manner. Because of that we’ve earned numerous honours and top rankings for our technology, organization and talent. Our culture was purpose-built to be remote first, and we offer flexible work arrangements to help our people manage their personal and professional lives in a way that works for them. If you’re ready to work on unrivalled technology with a team that makes a difference every day, let’s talk",
    },
  ];

  return (
    <div className="sponsors pt-5">
      <div className="container p-5 pt-5" style={{ backgroundColor: "white" }}>
        <div className="text-center">
          <h1 className="text-center" style={{ color: "red" }}>
            InCTF 2021 Sponsors
          </h1>
        </div>
        <div>
          <p
            className="text-center "
            style={{
              fontSize: "95%",
              lineHeight: 1.4,
            }}
          >
            We thank these organizations for investing in the CyberSecurity
            Workforce of Tomorrow.
          </p>
        </div>
        {inCTFSponsors.map((s, index) => (
          <div>
            <h1 className="text-center p-5">{s.desg}</h1>
            <div
              className="row "
              style={{ border: "1px solid black", borderRadius: "10px" }}
            >
              <div className=" col-md-5 p-3">
                <img src={s.image} draggable="false" alt="" style={{ width: "100%" }}></img>
              </div>
              <div className=" col-md-7 p-3">
                <h1 className="text-center p-1">{s.name}</h1>
                <p>{s.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingSponsorship;
