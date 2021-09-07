import React from 'react';
import './Promotes.css';
import image from '../../images/inctfposter.jpg'

function Promotes() {
    return (
        <div className="promote">
            <section id="organize">
                <div className="container zindex">
                    <div className="section_title">
                        <h3 className="title" style={{ color: 'chocolate' }}>
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
                                    </div>
                                    <div className="col-lg-7 col-md-7">
                                        <div className="purchase-box">
                                            <h3>Poster content</h3> <br />
                                            <b>
                                                <p className="ptag">A noob looking to learn cybersec? Or a pro looking for a
                                                    refresh? Register now @ https://inctf.in/ <br />

                                                    Prize pool of 3 lakhs, placement and internship opportunity from our
                                                    sponsors awaits the participants <br />

                                                    The registrations for the flagship #cybersecurity event of India - Amrita
                                                    #InCTF 2021, has begun. <br />
                                                    Grab this opportunity to gear up your cyber-security skills. <br /><br />

                                                    Register now at https://inctf.in/ <br /><br />

                                                    For more updates follow us on<br />
                                                    Facebook - https://www.facebook.com/InCTF<br />
                                                    Twitter - https://twitter.com/inctf<br />
                                                    Instagram - https://www.instagram.com/inctf.in/<br />

                                                </p>
                                            </b>
                                            <a href={image} download>
                                                <h4>Click Here To Download The Poster</h4>
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
                        <div className="col-lg-6">
                            <div className=" event-header text-center">
                                <h3>Facebook post</h3>

                            </div>
                            <div className="row">
                                <iframe title="new"
                                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FInCTF%2Fposts%2F10158391652432503&show_text=true&width=500"
                                    width="500" height="697" style={{ border: "NamedNodeMap", overflow: "hidden" }} scrolling="no" frameborder="0"
                                    allowfullscreen="true"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>


                                <iframe title="new"
                                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FInCTF%2Fposts%2F10158342523247503&show_text=true&width=500"
                                    width="500" height="531" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0"
                                    allowfullscreen="true"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>


                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className=" event-header text-center">
                                <h3>Tweets</h3>

                            </div>
                            <div className="tweets-container">
                                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">A noob looking to learn cybersec? Or a pro looking for a refresh? <br /><br />Prize pool of 3 lakhs, placement and internship opportunity from our sponsors awaits the participants<br /><br />Register now at <a href="https://t.co/5r6XrZDbyq">https://t.co/5r6XrZDbyq</a><a href="https://twitter.com/hashtag/inctf?src=hash&amp;ref_src=twsrc%5Etfw">#inctf</a> <a href="https://twitter.com/hashtag/ctf?src=hash&amp;ref_src=twsrc%5Etfw">#ctf</a> <a href="https://twitter.com/hashtag/InCTF?src=hash&amp;ref_src=twsrc%5Etfw">#InCTF</a> <a href="https://twitter.com/hashtag/InCTF21?src=hash&amp;ref_src=twsrc%5Etfw">#InCTF21</a> <a href="https://t.co/hMg9dG4lQi">pic.twitter.com/hMg9dG4lQi</a></p>&mdash; Amrita InCTF (@InCTF) <a href="https://twitter.com/InCTF/status/1433360732461043716?ref_src=twsrc%5Etfw">September 2, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br />
        </div>
    )
}

export default Promotes
