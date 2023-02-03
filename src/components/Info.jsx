import React from 'react';
import '../styles/Info.css'
import email from '../assets/email.svg'
import faceID from '../assets/40201730.png'

export default function Info(){

    return (
        <header>
            <img src={faceID} alt="Calling Card image" className='info--faceid'/>
            <h2 className='info--name'>Natsurii</h2>
            <p className='info--title'>Computer Engineer</p>
            <p className='info--website'>natsurii.live</p>
            <button className='info--email' href='mailto:natsurii@pm.me'>
                <img src={email} alt="Email button icon" />
                Email</button>
        </header>
         
    )
}