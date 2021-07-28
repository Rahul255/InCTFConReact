import React from 'react'
import './EndProgram.css'
import hack from '../../images/endprogram/hack.png'
import conf from '../../images/endprogram/conf.png'
import team from '../../images/endprogram/team.png'

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
                        <p className="card__description">Workshops & training sessions organized aimed at scouting, nurturing & empowering young talents in the field of cyber-security.</p>
                    </div>
                    <div className="card" id="card-2" style={{ padding: '5px' }}>
                        <div className="card__img">
                            <img draggable="false" src={conf} alt="brand-img" className="img-fluid" />
                        </div>
                        <h3 className="card__heading">CyberSecurity Conference</h3>
                        <p className="card__description">Talks, panel discussions & keynotes by leading tech experts in cyber security</p>
                    </div>
                    <div className="card" id="card-3" style={{ padding: '5px' }}>
                        <div className="card__img">
                            <img draggable="false" src={hack} alt="brand-img" className="img-fluid" />
                        </div>
                        <h3 className="card__heading">CTF Hacking Conference</h3>
                        <p className="card__description">National level CTF finals for showcasing talent, and winning prizes & scholarship</p>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        </div>
    )
}

export default EndProgram
