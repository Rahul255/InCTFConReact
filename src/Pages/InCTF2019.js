import React from 'react'
import Topbar from '../Components/Bars/Topbar'
import Organizers from '../Components/Organizers/Organizers'
import Footer from '../Components/Footer/Footer'
import Details from '../Components/inct2019/Details'
import Inct2019Landing from '../Components/inct2019/Inct2019Landing'
import Images2019 from '../Components/inct2019/Images2019'
import MainSpeakers from '../Components/Speaker/mainSpeakers'

function InCTF2019() {
    return (
        <div>
            <Topbar />
            <Inct2019Landing />
            <Details />
            <Images2019 />
            <Organizers />
            <MainSpeakers />
            <Footer />
        </div>
    )
}

export default InCTF2019
