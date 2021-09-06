import React from 'react'
import Footer from '../Components/Footer/Footer'
import Topbar from '../Components/Bars/Topbar'
import Organizers from '../Components/Organizers/Organizers'
import Schedule from '../Components/schedule/Schedule'

function Schedules() {
    return (
        <div>
            <Topbar />
            <Schedule />
            <Organizers />
            <Footer />
        </div>
    )
}

export default Schedules
