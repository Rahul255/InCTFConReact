import React from 'react'
import './Sponsor.css'
import brand1 from '../../images/sponsor/salesforce.png'
import brand2 from '../../images/sponsor/zoho-1e78182f2870ef5f7277b10047c556e1.png'
import brand3 from '../../images/sponsor/vmware-54e2f942b7201762830671db2d5b73ae.png'
import brand4 from '../../images/sponsor/crowdstrike.png'
import brand5 from '../../images/sponsor/social-cred.png'
import brand6 from '../../images/sponsor/hrblock.jpeg'

function Sponsor() {
    return (
        <div className="sponsor">
            <div class="container">
                <div class="section_title">
                    <h3 class="title">
                        Our Sponsor
                    </h3>
                </div>
                <div class="row">

                    {/* <div class="col-lg-5 event-header brand-m-p">

                        <h3>Brands and companies trust us<b>.</b> </h3>
                        <p>Here is the beginning of a great season. Thanks again for your generous sponsorship. We hope to live up to
                            our achievements of previous years. We promise to keep you updated on our progress.</p>

                    </div> */}
                    {/* <div class="col-lg-2"></div> */}
                    <div class="col-12 col-lg-12 col-md-12 m-md-auto">
                        <div class="row brand_1">
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
                        <br /><br />
                        <div class="row brand_2">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsor
