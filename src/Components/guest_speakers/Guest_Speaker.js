import React from "react";
import "./Guest_Speaker.css";

function Guest_Speaker() {
  const inCTFSpeakers = [
    {
      name: "Sagar Gulhane",
      position: "Sr. Threat Research Engineer",
      topic: "Evolution of eCrimes",
      date: "28th December, 2021",
      time: "6.00 pm to 7.00 pm",
      image: require("../../images/sponsor/salesforce.png").default,
      abstract: "Today eCrimes are weaponised by Cyber criminals using their sophistic toolkits. These toolkits are much evolved and release updated binaries daily to evade malware detection, and that then are delivered through botnets. These binaries become distributors for other malware too. CrowdStrike uses various technologies to tackle these malware and keep customers safe.",
      bio:
        "Sagar has 11 years of experience in Malware analysis field, worked for legacy as well as Next-Gen security product. Currently he is a Senior Threat Researcher at CrowdStrike in the Malware Research Centre. Sagar holds a Bachelor of Engineering in Information Technology. Sagar has over decade of experience in Cybersecurity with focus on Reverse Engineering malware binaries. He has worked on both legacy Antivirus as well as on next-Gen EDR products where he has been contributing by adding detections for latest threats and working on new features to counter latest threat vectors. His expertise lies in analysing File Infectors and creating repair routines. In his free time he likes to keep track of the evolving Threat Landscape and its impact.",
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
    <div>
      <section class="special-guest spad">
        <div class="container p-3">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Special Guests</h2>
              </div>
            </div>
          </div>
          {inCTFSpeakers.map((s,index) => (
            <div
            class="row newone p-2 pt-2 pb-2 m-2"
            style={{ border: "1px solid white", borderRadius: "10px" }}
          >
            
            <div class="col-xl-4 col-lg-5 p-4">
              <div class="guest-img">
                <img src={s.image} alt="" />
              </div>
            </div>
            <div class="col-xl-8 col-lg-7 p-4">
              <div class="guest-info">
                <h2>
                  {s.name} <span>{s.position}</span>
                </h2>
                <h3>About the topic</h3>
                <p class="long-text">{s.abstract}
                </p>
                <h3>About the Speaker</h3>
                <p>{s.bio}
                </p>
                <div class="guest-links">
                  <a href="https://twitter.com/inctf">
                    <i class="fab fa-dribbble"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="behance">
                    <i class="fab fa-behance"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="linkedin">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          ))}
          
          <div
            class="row newone p-2 pt-2 pb-2 m-2"
            style={{ border: "1px solid white", borderRadius: "10px" }}
          >
            <div class="col-xl-4 col-lg-5 p-4">
              <div class="guest-img ">
                <img
                  src={require("../../images/rahul.jpg").default}
                  alt=""
                  data-pagespeed-url-hash="2156928296"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
            </div>
            <div class="col-xl-8 col-lg-7 p-4">
              <div class="guest-info">
                <h2 className="">
                  Rahul Manneri <span>Former CISO</span>
                </h2>
                <p class="long-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  erat dui, tincidunt vitae tortor at, ultrices faucibus mauris.
                  Vestibulum quis auctor risus. Donec fringilla faucibus eros,
                  ut suscipit risus accumsan eu. Sed aliquam, mi in fermentum
                  aliquam, sem lectus fringilla felis, et faucibus felis turpis
                  ut turpis.{" "}
                </p>
                <p>
                  Fusce quis arcu aliquet, egestas nunc et, maximus tortor. In
                  fermentum pellentesque justo, at sollicitudin felis commodo
                  sed. Integer tempus lorem sem, vitae euismod felis sodales
                  non.
                </p>
                <div class="guest-links">
                  <a href="https://twitter.com/inctf">
                    <i class="fab fa-dribbble"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="behance">
                    <i class="fab fa-behance"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="linkedin">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/inctf" class="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Guest_Speaker;
