import React, { useState } from 'react'
import './Abhinad.css'

const Accordion = ({ title, content, items }) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div style={{color:'white'}}>
            <button className="accordion" onClick={() => setOpen(!isOpen)}>
                {title}
            </button>
            {isOpen && (<div className="newone">
                {items.map((i) =>
                
                    <li class="one">{i}</li>
                )}
            </div>)}
        </div>
    )
}

export default Accordion