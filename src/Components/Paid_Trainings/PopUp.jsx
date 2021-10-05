import React from 'react'
import Modal from 'react-modal';
import Abhinand from './Abhinad';
import './PopUp.css'


export const PopUp = ({ 
    children, 
    isOpen = false, 
    onClose = () => {} 
}) => {
    return (
        <div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={onClose}
                    portalClassName="pop"
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(3.5px)',
                            zIndex:'9000'
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            maxHeight: '75vh',
                            maxWidth:'100vw',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            background: '#111'
                        },
                    }}
                >

                        <button className="pop_button" onClick={onClose}>
                            x
                        </button>
                        {children}
                        
                        
                </Modal>
        </div>
    )
}
