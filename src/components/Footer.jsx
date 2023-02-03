import React from 'react';
import '../styles/Footer.css'
import github from '../assets/github.svg'
export default function Footer(){

    return (
        <footer>
            <a href='https://github.com/natsurii'>
            <img src={github} alt='github icon logo'/>
            </a>
        </footer>
    )
}