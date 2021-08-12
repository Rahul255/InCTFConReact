import React from 'react'
import './EndProgram.css'
import hack from '../../images/endprogram/hack1.png'
import conf from '../../images/endprogram/conf1.png'
import team from '../../images/endprogram/team4.png'

function EndProgram() {
    return (
        <div className="endprogram">
            <div className="container">
            <br/><br/>
                <div className="section_title">
                    <h3 className="title_program" >
                        End to End Program
                    </h3>
                </div>
                <br/><br/><br/>
                <div className="card-container">
                    <div className="card" id="card-1" style={{ padding: '5px' }}>
                        <div className="card__img">
                            <img draggable="false" src={team} alt="brand-img" className="img-fluid" />
                        </div>
                        <h3 className="card__heading">Trainings Programmes</h3>
                        <p className="card__description">Exciting training sessions and workshops to recognize and nurture talents in the field of cyber-security and empowering them to take it up in their career paths.</p>
                    </div>
                    <div className="card" id="card-2" style={{ padding: '5px' }}>
                        <div className="card__img">
                            <img draggable="false" src={conf} alt="brand-img" className="img-fluid" />
                        </div>
                        <h3 className="card__heading">CyberSecurity Conference</h3>
                        <p className="card__description">Talks, Panel Discussions and insightful Keynote sessions on cybersecurity by top global experts in the field. </p>
                    </div>
                    <div className="card" id="card-3" style={{ padding: '5px' }}>
                        <div className="card__img">
                            <img draggable="false" src={hack} alt="brand-img" className="img-fluid" />
                        </div>
                        <h3 className="card__heading">CTF Hacking Conference</h3>
                        <p className="card__description">A PAN India CTF final round, which is a centre stage that showcases the best talent in cybersecurity, with the winners getting cool rewards and scholarships.</p>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        </div>
    )
}

export default EndProgram
