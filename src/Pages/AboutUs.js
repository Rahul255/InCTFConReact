import React from 'react'
import Footer from '../Components/Footer/Footer'
import Topbar from '../Components/Bars/Topbar'
import Organizers from '../Components/Organizers/Organizers'
import AboutIntro from '../Components/AboutPage/AboutIntro'

function AboutUs() {
    return (
        <div>
            <Topbar />
            <AboutIntro />
            <Organizers />
            <Footer />
        </div>
    )
}

export default AboutUs
