import React from 'react'
import './EndProgram.css'
import hack from '../../images/endprogram/hack1.png'
import conf from '../../images/endprogram/conf1.png'
import team from '../../images/endprogram/team4.png'

function EndProgram() {
    return (
        <div className="endprogram">
            <div className="container" style={{ marginTop: "30px" }}>
                <div className="section_title"><br /><br /><br />
                    <h3 className="title_program" >
                        End to End Program
                    </h3>
                </div>
                <div className="container">
                    <main className="grid">
                        <article>
                            <img draggable="false" src={hack} alt="brand-img" className="img-fluid" />
                            <div className="text">
                                <h3 className="endhead">CTF Hacking Conference</h3>
                                <p className="enddet">A PAN India CTF final round, which is a centre stage that showcases the best talent in cybersecurity, with the winners getting cool rewards and scholarships.</p>
                            </div>
                        </article>
                        <article>
                            <img draggable="false" src={team} alt="brand-img" className="img-fluid" />
                            <div className="text">
                                <h3 className="endhead">Trainings Programmes</h3>
                                <p className="enddet">Exciting training sessions and workshops to recognize and nurture talents in the field of cyber-security and empowering them to take it up in their career paths.</p>
                            </div>
                        </article>
                        <article>
                            <img draggable="false" src={conf} alt="brand-img" className="img-fluid" />
                            <div className="text">
                                <h3 className="endhead">CyberSecurity Conference</h3>
                                <p className="enddet">Talks, Panel Discussions and insightful Keynote sessions on cybersecurity by top global experts in the field.</p>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default EndProgram
