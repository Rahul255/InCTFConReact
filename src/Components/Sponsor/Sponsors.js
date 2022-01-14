import React from "react";
// import styled from "@emotion/styled";
// import Fade from "react-reveal/Fade";
import "./Sponsors.css";

const LandingSponsorship = () => {
  // const inCTFSponsors = [
  //   {
  //     name: "Salesforce",
  //     image: require("../../images/sponsor/salesforce.png").default,
  //     desg: "Event Sponsor",
  //     details:
  //       "Salesforce, the Customer Success Platform and world’s #1 CRM, empowers companies to connect with their customers in a whole new way. The company was founded on three disruptive ideas: a new technology model in cloud computing, a pay-as-you-go business model, and a new integrated corporate philanthropy model. These founding principles have taken our company to great heights, including being named one of Forbes’s “World’s Most Innovative Company” five years in a row and one of Fortune’s “100 Best Companies to Work For” eight years in a row. We are the fastest growing of the top 10 enterprise software companies, and this level of growth equals incredible opportunities to grow a career at Salesforce.",
  //   },
  //   {
  //     name: "Zoho",
  //     image:
  //       require("../../images/sponsor/zoho-1e78182f2870ef5f7277b10047c556e1.png")
  //         .default,
  //     desg: "Diamond Sponsor",
  //     details:
  //       "At ZOHO Security team, we do a lot of exciting stuff including Security Source code Analysis, Intrusion Detection System, WAF and whatnot. The cool part is most of the security tools we use here are in-house tools built by our awesome team from scratch. We do have our internal red team who simulates a lot of offensive operations like Social Engineering, Application Hacking, Hijacking security cameras and simply compromise whatever is vulnerable from machines to humans. We have got a quite balance of red and blue team. Would you like to join our team ZHIELD? (Oh yea, That's how we call ourselves!) , Send your resume to security@zohocorp.com",
  //   },
  //   {
  //     name: "Crowdstrike",
  //     image: require("../../images/sponsor/crowdstrike.png").default,
  //     desg: "Platinum Sponsor",
  //     details:
  //       "CrowdStrike is a leading cybersecurity company protecting customers from all cyber threats by leveraging its Security Cloud to stop breaches. From its inception in 2011, CrowdStrike was created as a different kind of cybersecurity company. Cloud-native, CrowdStrike immediately brought a threat perspective, effectiveness, scalability, and flexibility never seen before in the industry – seamlessly aligning People, Technology, and Processes. And it doesn’t stop there. At CrowdStrike we’re on a mission - to stop breaches. Our ground breaking technology, services delivery, and intelligence gathering together with our innovations in machine learning and behavioural-based detection, allow our customers to not only defend themselves, but do so in a future-proof manner. Because of that we’ve earned numerous honours and top rankings for our technology, organization and talent. Our culture was purpose-built to be remote first, and we offer flexible work arrangements to help our people manage their personal and professional lives in a way that works for them. If you’re ready to work on unrivalled technology with a team that makes a difference every day, let’s talk",
  //   },
  // ];

  return (
    <div className="sponsors pt-5">
      <div className="container p-5 pt-5" style={{ backgroundColor: "white" }}>
        <div className="text-center">
          <h1 className="text-center" style={{ color: "tomato",fontWeight:"bold" }}>
            InCTF 2021 Sponsors
          </h1>
        </div>
        <div>
          <p
            className="text-center "
            style={{
              fontSize: "20px",
              paddingBottom: "10px",
              lineHeight: 1.4,
            }}
          >
            We thank these organizations for investing in the CyberSecurity
            Workforce of Tomorrow.
          </p>
        </div>
        {/* {inCTFSponsors.map((s, index) => (
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
        ))} */}
        <div>
          <h1 className="text-center p-3" style={{color:"tomato"}}>Event Sponsor</h1>
          <div
            className="row "
            style={{ border: "2px solid black", borderRadius: "10px" }}
          >
            <div className=" col-md-5 p-3"><br/><br/>
              <img src={require("../../images/sponsor/salesforce.png").default} draggable="false" alt="" style={{ width: "100%" }}></img>
            </div>
            <div className=" col-md-7 p-3">
              <h1 className="text-center p-1" style={{fontWeight:"bold", fontSize:"2rem"}}>Salesforce</h1>
              <h3 className="text-center p-1">Company Overview</h3>
              <p>Salesforce, the Customer Success Platform and world’s #1 CRM, empowers companies to connect with their customers in a whole new way. The company was founded on three disruptive ideas: a new technology model in cloud computing, a pay-as-you-go business model, and a new integrated corporate philanthropy model. These founding principles have taken our company to great heights, including being named one of Forbes’s “World’s Most Innovative Company” five years in a row and one of Fortune’s “100 Best Companies to Work For” eight years in a row. We are the fastest growing of the top 10 enterprise software companies, and this level of growth equals incredible opportunities to grow a career at Salesforce.</p>
              <h3 className="text-center p-1">Security Overview</h3>
              <p>Salesforce has one of the best Information Security teams in the world and growing this piece of the business in India is a top priority! Our Information Security teams work hand in hand with the business to ensure the highest security around all of our applications. For example, the Detection & Response function is responsible for 24x7x365 security monitoring and rapid incident response across all Salesforce environments. The Salesforce Security Engineering team provides the fundamental building blocks to improve and preserve customer trust in Salesforce’s products across multiple public cloud substrates and our own network infrastructure. Similarly, we have teams that oversee our network security, identity and access management, threat & vulnerability management, system security, security GRC, compliance etc. all working towards the common goal of upholding our foundational values of Trust and Customer Success.</p>
              <p>We are always looking out for talent, reach out to us on <a style={{textDecoration:"none"}} href="https://www.salesforce.com/company/careers/university-recruiting/">India Cyber Security Careers</a></p>
              <p>To know more visit  <a style={{textDecoration:"none"}} href="https://salesforce.wd2.myworkdayjobs-impl.com/External_Career_Site/job/India---Hyderabad/Intern-Security-Event-Analyst_JR117289-2">Salesforce India University Recruiting</a></p>
              <p><a href="https://trailhead.salesforce.com/cybersecurity/" style={{textDecoration:"none"}}>Learn in-demand cybersecurity skills </a></p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center p-3" style={{color:"tomato"}}>Diamond Sponsor</h1>
          <div
            className="row "
            style={{ border: "2px solid black", borderRadius: "10px" }}
          >
            <div className=" col-md-5 p-3">
              <img src={require("../../images/sponsor/zoho-1e78182f2870ef5f7277b10047c556e1.png").default} draggable="false" alt="" style={{ width: "100%" }}></img>
            </div>
            <div className=" col-md-7 p-3">
              <h1 className="text-center p-1" style={{fontWeight:"bold", fontSize:"2rem"}}>Zoho</h1>
              <p>At ZOHO Security team, we do a lot of exciting stuff including Security Source code Analysis, Intrusion Detection System, WAF and whatnot. The cool part is most of the security tools we use here are in-house tools built by our awesome team from scratch. We do have our internal red team who simulates a lot of offensive operations like Social Engineering, Application Hacking, Hijacking security cameras and simply compromise whatever is vulnerable from machines to humans. We have got a quite balance of red and blue team. Would you like to join our team ZHIELD? (Oh yea, That's how we call ourselves!) , Send your resume to <span style={{textDecoration:"none", color:"#007bff"}}>zhield-hiring@zohocorp.com </span></p>
              
            </div>
          </div>
        </div><br/>
        <div>
          {/* <h1 className="text-center p-5" style={{color:"tomato"}}></h1> */}
          <div
            className="row "
            style={{ border: "2px solid black", borderRadius: "10px" }}
          >
            <div className=" col-md-5 p-3"><br/><br/>
              <img src={require("../../images/sponsor/vmware-54e2f942b7201762830671db2d5b73ae.png").default} draggable="false" alt="" style={{ width: "100%" }}></img>
            </div>
            <div className=" col-md-7 p-3">
              <h1 className="text-center p-1" style={{fontWeight:"bold", fontSize:"2rem"}}>VMware</h1>
              <h3 className="text-center p-1">Why will you enjoy joining us?</h3>
              <p>The world is changing fast, and the security engineering space is changing even faster! Corporations, governments, schools, hospitals are in desperate need for digital transformation at a rapid space. VMware is driving this transformation for 350,000 customers (which includes 98% of Fortune 500). You won’t find another company that offers the breadth of innovative technology. Now imagine the opportunity to work on securing the products and services which VMware creates on cutting edge technologies. You would be exposed to the broad technology stack which you can break / hack into and help secure. This opportunity provides an endless possibility to learn, grow and flourish as a product security engineer.</p>
              <h3 className="text-center p-1">Security @VMware</h3>
              <p>Security at VMware is primarily driven by S.C.O.P.E, which expands to Security, Compliance, and Privacy Engineering. vSECR, which is widely known, is part of this organization. This organization is responsible for the complete security state of all the Products and SaaS offerings from VMware. The exciting part is you would be exposed to all phases of Security Development Lifecycle(SDL), and hence the opportunity to collaborate with security architects, development teams across VMware, and other security engineers in the team. If you have the drive to work on securing the next big thing, we would love to talk!</p>
              <h3 className="text-center p-1">Why would we love to have you at VMware?</h3>
              <p>The team is distributed across the globe, and has a diverse, inclusive and open culture. We believe fresh talent from universities drives innovation and helps build a world-class security team. The team consists of majorly security engineers with experience ranging from less than a year to more than 10 years. We also have a good presence of technical product managers, full stack developers, and security architects. We encourage continuous learning, sharing of ideas and thoughts, and growing together as a team. The team is built on trust and empathy, and we celebrate each other’s successes. We would love to have you as part of VMware family</p>
              
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center p-3" style={{color:"tomato"}}>Platinum Sponsor</h1>
          <div
            className="row "
            style={{ border: "2px solid black", borderRadius: "10px" }}
          >
            <div className=" col-md-5 p-3"><br/><br/>
              <img src={require("../../images/sponsor/crowdstrike.png").default} draggable="false" alt="" style={{ width: "100%" }}></img>
            </div>
            <div className=" col-md-7 p-3">
              <h1 className="text-center p-1" style={{fontWeight:"bold", fontSize:"2rem"}}>CrowdStrike</h1>
              <p>CrowdStrike is a leading cybersecurity company protecting customers from all cyber threats by leveraging its Security Cloud to stop breaches. From its inception in 2011, CrowdStrike was created as a different kind of cybersecurity company. Cloud-native, CrowdStrike immediately brought a threat perspective, effectiveness, scalability, and flexibility never seen before in the industry – seamlessly aligning People, Technology, and Processes. And it doesn’t stop there. At CrowdStrike we’re on a mission - to stop breaches. Our ground breaking technology, services delivery, and intelligence gathering together with our innovations in machine learning and behavioural-based detection, allow our customers to not only defend themselves, but do so in a future-proof manner. Because of that we’ve earned numerous honours and top rankings for our technology, organization and talent. Our culture was purpose-built to be remote first, and we offer flexible work arrangements to help our people manage their personal and professional lives in a way that works for them. If you’re ready to work on unrivalled technology with a team that makes a difference every day, let’s talk</p>
              
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center p-3" style={{color:"tomato"}}>Gold Sponsor</h1>
          <div
            className="row "
            style={{ border: "2px solid black", borderRadius: "10px" }}
          >
            <div className=" col-md-5 p-3"><br/><br/>
              <img src={require("../../images/sponsor/social-cred.png").default} draggable="false" alt="" style={{ width: "100%" }}></img>
            </div>
            <div className=" col-md-7 p-3">
              <h1 className="text-center p-1" style={{fontWeight:"bold", fontSize:"2rem"}}>CRED</h1>
              <p>CRED is a high-trust, low-friction platform that enables the most creditworthy Indians to improve their lives and lifestyles by managing money better. CRED incentivizes responsible financial behaviour and financial literacy with rewarding products, services and experiences from leading brands and institutions. Over 7.5 million individuals are part of CRED, which is accessible to anyone with a credit score of over 750. CRED processes 25% of credit card bill payments in India and the community includes over 35% of premium credit card-holders.</p>
              
              <p>For individuals: With its empathetic approach to design, CRED makes decisions visible, delightful, and rewarding. CRED nudges positive actions with tools for members to minimize losses, manage credit well, build wealth, spend wisely, and contribute to the community. These benefits have led to over 375,000 individuals on its waitlist at any point in time, 15% of whom work to improve their scores and become members.</p>
              <p>For financial institutions: CRED offers a low-risk environment for financial institutions to craft and offer new products to members, increase credit utilization, and expand consumption. Current offerings include CRED Cash- an instant, three-step personal credit line; CRED Max- which allows members to pay monthly rent or education EMIs on their credit card for a small transaction fee, and CRED Mint -an easy-to-use, low-risk investment product that lets members put idle money to work. CRED is working to make more transactions friction-less, and to partner with more financial institutions for new products.</p>
              <p>For brands and merchants: The CRED Commerce offering - CRED Store, Rewards, and CRED Pay - is a meaningful channel for young, independent consumer brands to be discovered by and engage with potential customers on CRED and their own platforms. Over 2000 brands have participated in CRED Commerce, which has emerged as a medium for young Indian consumer startups to build their brand. On CRED, these brands are positioned alongside aspirational global brands and can build traction with taste-making consumers.</p>
              
            </div>
          </div>
        </div><br/>
        <div>
          {/* <h1 className="text-center p-5" style={{color:"tomato"}}></h1> */}
          <div
            className="row "
            style={{ border: "2px solid black", borderRadius: "10px" }}
          >
            <div className=" col-md-5 p-3"><br/><br/>
              <img src={require("../../images/sponsor/logo-dark.png").default} draggable="false" alt="" style={{ width: "100%" }}></img>
            </div>
            <div className=" col-md-7 p-3">
              <h1 className="text-center p-1" style={{fontWeight:"bold", fontSize:"2rem"}}>Secfence</h1>
              <p>Secfence has been the pioneer of Defensive & Offensive Security in India for over a decade. We are a research-based organization focusing on Vulnerability Research & Exploit Development. Along with our in-house research teams, we have formed global alliances to bring the state-of-the-art capabilities to our clients. We take pride in working with Governments, Law Enforcement & Intelligence Agencies to help their homeland security.</p>
              <p>We are always looking out for talent, reach out to us on contact@secfence.com (PGP: 0x1A3AB75C08723D81)</p>
              <p>To know more visit  <a href="https://www.secfence.com/" style={{textDecoration:"none"}}>www.secfence.com</a></p>
            </div>
          </div>
        </div> <br/>
        <div>
          {/* <h1 className="text-center p-5" style={{color:"tomato"}}></h1> */}
          <div
            className="row "
            style={{ border: "2px solid black", borderRadius: "10px" }}
          >
            <div className=" col-md-5 p-3"><br/><br/>
              <img src={require("../../images/sponsor/SchneiderGreen.png").default} draggable="false" alt="" style={{ width: "100%" }}></img>
            </div>
            <div className=" col-md-7 p-3">
              <h1 className="text-center p-1" style={{fontWeight:"bold", fontSize:"2rem"}}>Schneider Electric</h1>
              <p>Schneider’s purpose­ is to empower all to make the most of our energy and resources, bridging progress and sustainability for all. We call this Life Is On. Our mission is to be your digital partner for Sustainability and Efficiency. We drive digital transformation by integrating world-leading process and energy technologies, endpoint to cloud connecting products, controls, software, and services, across the entire lifecycle, enabling integrated company management, for homes, buildings, data centres, infrastructure, and industries. We are the most local of global companies. We are advocates of open standards and partnership ecosystems that are passionate about our shared Meaningful Purpose, Inclusive, and Empowered values.</p>
              
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center p-3" style={{color:"tomato"}}>Silver Sponsor</h1>
          <div
            className="row "
            style={{ border: "2px solid black", borderRadius: "10px" }}
          >
            <div className=" col-md-5 p-3"><br/><br/>
              <img src={require("../../images/sponsor/h&rblock-4ae0508ccf57e1083a8885e5952fb16d.png").default} draggable="false" alt="" style={{ width: "100%" }}></img>
            </div>
            <div className=" col-md-7 p-3">
              <h1 className="text-center p-1" style={{fontWeight:"bold", fontSize:"2rem"}}>H&R BLOCK</h1>
              <p>H&R Block <a href="https://www.hrblock.com/" style={{textDecoration:"none"}}>(www.hrblock.com)</a> is a 3 billion dollar company headquartered in Kansas City, MO, and is the world’s largest assisted tax preparation company with Operations in the US, Australia, Canada and India. H&R Block provides Digital tax services and Retail tax services through more than 12,000 retail offices. H&R Block’s Trivandrum Technopark location serves as the Global Technology Center of H&R Block and consists of approximately 700 full time associates at Trivandrum.</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSponsorship;
