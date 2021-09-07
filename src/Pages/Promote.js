import React from 'react';
import Footer from '../Components/Footer/Footer'
import Topbar from '../Components/Bars/Topbar'
import Organizers from '../Components/Organizers/Organizers'
import Promotes from '../Components/Promotes/Promotes';






function Promote() {
    return (
        <div>
            <Topbar />
            <Promotes />
            <Organizers />
            <Footer />
        </div>
    )
}

export default Promote
