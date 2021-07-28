import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Topbar from '../Components/Bars/Topbar'
import Organizers from '../Components/Organizers/Organizers'

function AboutUs() {
    return (
        <div>
            <Topbar />
            <About />
            <Organizers />
            <Footer />
        </div>
    )
}

export default AboutUs
