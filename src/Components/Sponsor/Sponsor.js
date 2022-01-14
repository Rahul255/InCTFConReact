import React from "react";
import "./Sponsor.css";
// import brand1 from "../../images/sponsor/salesforce.png";
// import brand2 from "../../images/sponsor/zoho-1e78182f2870ef5f7277b10047c556e1.png";
// import brand3 from "../../images/sponsor/vmware-54e2f942b7201762830671db2d5b73ae.png";
// import brand4 from "../../images/sponsor/crowdstrike.png";
// import brand5 from "../../images/sponsor/social-cred.png";
// import brand6 from "../../images/sponsor/hrblock.jpeg";

function Sponsor() {
  var data = [
    {
      image: require("../../images/sponsor/salesforce.png").default,
      description: "Event Sponsor",
      maxHeight: "220px",
    },
    {
      image:
        require("../../images/sponsor/zoho-1e78182f2870ef5f7277b10047c556e1.png")
          .default,
      description: "Diamond Sponsor",
      maxHeight: "220px",
    },
    {
      image:
        require("../../images/sponsor/vmware-54e2f942b7201762830671db2d5b73ae.png")
          .default,
      description: "Diamond Sponsor",
      maxHeight: "220px",
    },
    {
      image: require("../../images/sponsor/crowdstrike.png").default,
      description: "Platinum Sponsor",
      maxHeight: "180px",
    },
    {
      image: require("../../images/sponsor/social-cred.png").default,
      description: "Gold Sponsor",
      maxHeight: "220px",
    },
    {
      image: require("../../images/sponsor/secfence.jpg").default,
      description: "Gold Sponsor",
      maxHeight: "220px",
    },
    {
      image: require("../../images/sponsor/bugcrowd-122228569701528ab41479b9971fa337.png").default,
      description: "Gold Sponsor",
      maxHeight: "220px",
    },
    {
      image: require("../../images/sponsor/GreatLearning.png").default,
      description: "Gold sponsor",
      maxHeight: "220px",
    },
    {
      image: require("../../images/sponsor/SchneiderGreen.png").default,
      description: "Gold Sponsor",
      maxHeight: "220px",
    },
    {
      image: require("../../images/sponsor/h&rblock-4ae0508ccf57e1083a8885e5952fb16d.png").default,
      description: "Silver Sponsor",
      maxHeight: "220px",
    },
    {
      image: require("../../images/sponsor/Audius_Logo.png").default,
      description: "Prize Sponsor",
      maxHeight: "220px",
    },
  ];

  return (
    <div className="sponsor">
      <div class="container">
        <div class="section_title">
          <h3 class="title">Our Sponsors</h3>
        </div>
        <div className="row">
          <p
            className=" col-12 text-center opacity-8 mb-3 font-weight-bold"
            style={{
              maxWidth: "100%",
              fontSize: "95%",
              lineHeight: 1.4,
              width: "450px",
            }}
          >
            We thank these organizations for investing in the CyberSecurity
            Workforce of Tomorrow.
          </p>
        </div>
        <div class="row">
          {/* <div class="col-lg-5 event-header brand-m-p">

                        <h3>Brands and companies trust us<b>.</b> </h3>
                        <p>Here is the beginning of a great season. Thanks again for your generous sponsorship. We hope to live up to
                            our achievements of previous years. We promise to keep you updated on our progress.</p>

                    </div> */}
          {/* <div class="col-lg-2"></div> */}
          {data.map((s, index) => (
            <div
              className="col-12 col-lg-4 col-md-4 m-md-auto justify-center text-center items-end"
              key={index}
            >
              <div className="text-center">
                <img
                  style={{ maxHeight: s.maxHeight }}
                  draggable="false"
                  src={s.image}
                  alt="brand-img"
                  class="img-fluid p-2"
                />
                {s.description && (<div className="font-weight-bold mt-3 font-light">{s.description}</div>)}
              </div>
            </div>
          ))}
          {/* <div class="row brand_1">
                            <div class="col-lg-3 col-md-3 col-3 text-center">
                                <img draggable="false" src={brand1} alt="brand-img" class="img-fluid" />
                                <h5>Gold Sponsor</h5>
                            </div>
                            <div class="col-lg-1 col-1 col-md-1"></div>
                            <div class="col-lg-3 col-3 col-md-3 text-center">
                                <img draggable="false" src={brand2} alt="brand-img" class="img-fluid" />
                                <h5>Gold Sponsor</h5>
                            </div>
                            <div class="col-lg-1 col-1 col-md-1"></div>
                            <div class="col-lg-3 col-3 col-md-3 text-center">
                                <img draggable="false" src={brand3} alt="brand-img" class="img-fluid" />
                                <h5>Gold Sponsor</h5>
                            </div>
                        </div>
                        <br /><br /> */}
          {/* <div class="row brand_2">
                            <div class="col-lg-3 col-3 col-md-3 text-center">
                                <img draggable="false" src={brand4} alt="brand-img" class="img-fluid" />
                                <h5>Gold Sponsor</h5>
                            </div>
                            <div class="col-lg-1 col-1 col-md-1"></div>
                            <div class="col-lg-3 col-3 col-md-3 text-center">
                                <img draggable="false" src={brand5} alt="brand-img" class="img-fluid" />
                                <h5>Gold Sponsor</h5>
                            </div>
                            <div class="col-lg-1 col-1 col-md-1"></div>
                            <div class="col-lg-3 col-3 col-md-3 text-center">
                                <img draggable="false" src={brand6} alt="brand-img" class="img-fluid" />
                                <h5>Gold Sponsor</h5>
                            </div>
                        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
