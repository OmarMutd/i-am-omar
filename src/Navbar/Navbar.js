import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <div id='cssmenu'>
        <ul>
           <li class='active'>About</li>
           <li><Link to='/Projects'>Projects</Link></li>
           <li>Tech Stack</li>
           <li>Contact</li>
        </ul>
        </div>
    )
}
