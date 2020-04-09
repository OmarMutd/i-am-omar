import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <div id='cssmenu'>
        <ul>
           <li class='active'><Link to='/'>About</Link></li>
           <li><Link to='/Projects'>Projects</Link></li>
           <li><Link to='/TechStack'>Tech Stack</Link></li>
           <li><Link to='/Contact'>Contact</Link></li>
        </ul>
        </div>
    )
}
