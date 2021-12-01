import React from 'react'
import Footer from '../Components/Footer/Footer'
import Topbar from '../Components/Bars/Topbar'
import Organizers from '../Components/Organizers/Organizers'
import AboutIntro from '../Components/AboutPage/AboutIntro'
import CyberSecurityRelevance from '../Components/AboutPage/WhyInCTFCon'
import AmritaCenterForCyber from '../Components/AboutPage/AmritaCSN'

function AboutUs() {
    return (
        <div>
            <Topbar />
            <AboutIntro />
            <CyberSecurityRelevance />
            <AmritaCenterForCyber />
            <Organizers />
            <Footer />
        </div>
    )
}

export default AboutUs
