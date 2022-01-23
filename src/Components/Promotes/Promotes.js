import React from 'react';
import './Promotes.css';
import image from '../../images/inctfconposter.jpg'
// import TweetEmbed from 'react-tweet-embed';

function Promotes() {
    const imageslink = [
        {
            "image": require('../../images/posters/yogi.jpeg').default
        },
        {
            "image": require('../../images/posters/Suvabrata.jpeg').default
        },
        
        {
            "image": require('../../images/posters/Uri.jpeg').default
        },
        {
            "image": require('../../images/posters/Lavi.jpeg').default
        },
        {
            "image": require('../../images/posters/Srinivas.jpeg').default
        },
        {
            "image": require('../../images/posters/Britto.jpeg').default
        },
        {
            "image": require('../../images/posters/vipin.jpeg').default
        },
        {
            "image": require('../../images/posters/Panel-1.jpeg').default
        },
        {
            "image": require('../../images/posters/Amir.jpeg').default
        },
        
        {
            "image": require('../../images/posters/Ajith.jpeg').default
        },
       

    ]
    return (
        <div className="promote" style={{ backgroundColor: 'white' }}>
            <section id="organize">
                <div className="container zindex">
                    <div className="section_title">
                        <h3 className="title" style={{ color: 'tomato' }}>
                            Promote
                        </h3>
                    </div>
                </div>
            </section>
            
            <section id="register">
                <div className="container zindex">
                    <div className="row register-pa">
                        <div className="col-lg-12">
                            <div className="register-box">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 r-b-color">
                                        <img style={{ maxHeight: '100%', maxWidth: '100%' }} draggable="false" src={image} alt="INCTF participant" />
                                    </div><br/>
                                    <div className="col-lg-7 col-md-7">
                                        <div className="purchase-box">
                                            <h3 style={{ color: 'tomato' }}>Poster content</h3> <br />
                                            
                                                <p className="">We are extremely excited to invite you to join the 11th edition of International Cyber Security Conference – <b>InCTFCon</b>. InCTFCon, will feature 3 days of inspiring sessions on both core and emerging areas of cybersecurity, privacy, and digital safety.
                                                    Prize pool of 3 lakhs, placement and internship opportunity from our
                                                    <br/>
                                                    Our mission is to educate and promote a culture of online and technology safety and security. We want to empower those that are technologically savvy to take up the cybersecurity mantle in order to find a fulfilling career in cyberspace while serving those in need. 
                                                    <br/>
                                                    InCTFCon is jointly organized by Team bi0s, Amrita Centre for Cyber Security, and Traboda Cyberlabs. It will take place <b>Jan 21st - 23rd</b>, online. 
                                                    <br/><br/>
                                                    <b>Participation is free.</b><br/><br/>

                                                    To attend the conference - <a href="https://inctf.in/join" style={{textDecoration:'none'}} >https://inctf.in/join</a> <br /><br />

                                                </p>
                                            
                                            <a href={image} download>
                                                <h4> Download The Poster</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
            <section>
                <div className="container">
                    <div className="row">
                        <h4 className="poster" style={{color: 'tomato',paddingLeft:'15px    '}}>Second Day Speakers</h4>
                    </div>
                    <div className="row">
                        {imageslink.map((s, index) =>
                            <div className="col-lg-4" style={{marginBottom:'20px'}}>
                                <a href={s.image} download><img src={s.image} alt="" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }} /> </a>
                                
                            </div>
                            
                        )}
                    </div>
                </div>
            </section>
            {/* <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className=" event-header text-center">
                                <h3 style={{ color: 'tomato' }}>Facebook Posts</h3>

                            </div>
                            <div >
                                <iframe title="new" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FInCTF%2Fposts%2F10158391652432503&show_text=true&width=500" width="500" height="697" style={{ border: "none", overflow: "hidden", color: "white" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                <br />
                            </div>
                            <div>
                                <iframe title="new"
                                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FInCTF%2Fposts%2F10158342523247503&show_text=true&width=500"
                                    width="500" height="531" style={{ border: "nameNodeMap", overflow: "hidden" }} scrolling="no" frameborder="0"
                                    allowfullscreen="true"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className=" event-header text-center">
                                <h3 style={{ color: 'tomato' }}>Tweets</h3>
                            </div>
                            <div>
                                <TweetEmbed id='1433360732461043716' options={{ cards: 'hidden' }} />
                            </div>
                            <br />
                            <div>
                                <TweetEmbed id='1423298024453804033' options={{ cards: 'hidden' }} />
                            </div>
                            <br />
                            <div>
                                <TweetEmbed id='1401859079249612800' options={{ cards: 'hidden' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <br /><br />
        </div>
    )
}

export default Promotes
