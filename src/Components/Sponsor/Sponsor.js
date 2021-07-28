import React from 'react'
import './Sponsor.css'
import brand1 from '../../images/brand/brand1.png'
import brand2 from '../../images/brand/brand2.png'
import brand3 from '../../images/brand/brand3.png'
import brand4 from '../../images/brand/brand4.png'
import brand5 from '../../images/brand/brand5.png'
import brand6 from '../../images/brand/brand6.png'

function Sponsor() {
    return (
        <div className="sponsor">
            <div class="container">
                <div class="section_title">
                    <h3 class="title">
                        Our Partners
                    </h3>
                </div>
                <div class="row">

                    <div class="col-lg-5 event-header brand-m-p">

                        <h3>Brands and companies trust us<b>.</b> </h3>
                        <p>Here is the beginning of a great season. Thanks again for your generous sponsorship. We hope to live up to
                            our achievements of previous years. We promise to keep you updated on our progress.</p>

                    </div>
                    <div class="col-lg-2"></div>
                    <div class="col-lg-5 col-md-7 m-md-auto">
                        <div class="row brand_1">
                            <div class="col-lg-3 col-md-3 col-3 text-center">
                                <img draggable="false" src={brand1} alt="brand-img" class="img-fluid" />
                            </div>
                            <div class="col-lg-1 col-1 col-md-1"></div>
                            <div class="col-lg-3 col-3 col-md-3 text-center">
                                <img draggable="false" src={brand2} alt="brand-img" class="img-fluid" />
                            </div>
                            <div class="col-lg-1 col-1 col-md-1"></div>
                            <div class="col-lg-3 col-3 col-md-3 text-center">
                                <img draggable="false" src={brand3} alt="brand-img" class="img-fluid" />
                            </div>
                        </div>
                        <br /><br />
                        <div class="row brand_2">
                            <div class="col-lg-3 col-3 col-md-3 text-center">
                                <img draggable="false" src={brand4} alt="brand-img" class="img-fluid" />
                            </div>
                            <div class="col-lg-1 col-1 col-md-1"></div>
                            <div class="col-lg-3 col-3 col-md-3 text-center">
                                <img draggable="false" src={brand5} alt="brand-img" class="img-fluid" />
                            </div>
                            <div class="col-lg-1 col-1 col-md-1"></div>
                            <div class="col-lg-3 col-3 col-md-3 text-center">
                                <img draggable="false" src={brand6} alt="brand-img" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsor
