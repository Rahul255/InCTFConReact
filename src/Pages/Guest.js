import React from 'react'
import Footer from '../Components/Footer/Footer'
import Organizers from '../Components/Organizers/Organizers'
import Topbar from '../Components/Bars/Topbar'
import Guests from '../Components/guest_speakers/Guest_Speaker'

function Guest() {
    return (
        <div>
            <Topbar />
            <Guests />
            <Organizers/>
            <Footer />
        </div>
    )
}

export default Guest
