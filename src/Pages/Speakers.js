import React from 'react'
import Speaker from '../Components/Speaker/Speaker'
import Topbar from '../Components/Bars/Topbar'
import Organizers from '../Components/Organizers/Organizers'
import Footer from '../Components/Footer/Footer'

function Speakers() {
    return (
        <div>
            <Topbar />
            <Speaker />
            <Organizers />
            <Footer />
        </div>
    )
}

export default Speakers
