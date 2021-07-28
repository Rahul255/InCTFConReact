import React from 'react'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Goals from '../Components/Goal/Goals'
import Footer from '../Components/Footer/Footer'
import EndProgram from '../Components/EndProgram/EndProgram'
import Sponsor from '../Components/Sponsor/Sponsor'
import Organizers from '../Components/Organizers/Organizers'
import Topbar from '../Components/Bars/Topbar'

function Home() {
    return (
        <div>
            <Topbar />  
            <Banner />
            <About />
            <EndProgram />
            <Goals />
            <Sponsor />
            <Organizers/>
            <Footer />
        </div>
    )
}

export default Home
