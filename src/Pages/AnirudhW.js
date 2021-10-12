import React from 'react'
import Footer from '../Components/Footer/Footer'
import Organizers from '../Components/Organizers/Organizers'
import Topbar from '../Components/Bars/Topbar'
import AnirudhWeb from '../Components/Paid_Trainings/Anirudh-Web'

function AnirudhW() {
    return (
        <div>
            <Topbar />
            <AnirudhWeb />
            <Organizers />
            <Footer />
        </div>
    )
}

export default AnirudhW