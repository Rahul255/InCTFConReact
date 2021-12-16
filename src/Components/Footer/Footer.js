import React from 'react'
import './Footer.css'

function Footer() {

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div></div>
                <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="middle">
                            <h2>Get In Touch</h2>
                            <a className="btn facebook" href="https://www.facebook.com/InCTF/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn twitter" href="https://twitter.com/InCTF">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn instagram" href="https://www.instagram.com/inctf">
                                <i className="fab fa-instagram"></i>
                            </a>

                        </div>
                    </div>
                </div>
                <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="copyright">© InCTF 2021 - 2022. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
