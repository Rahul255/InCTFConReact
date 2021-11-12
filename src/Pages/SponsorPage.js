import React from 'react'
import LandingSponsorship from '../Components/Sponsor/Sponsors'
import Topbar from '../Components/Bars/Topbar'
import Organizers from '../Components/Organizers/Organizers'
import Footer from '../Components/Footer/Footer'

function SponsorPage() {
    return (
        <div>
            <Topbar />
            <LandingSponsorship />
            <Organizers />
            <Footer />
        </div>
    )
}

export default SponsorPage
