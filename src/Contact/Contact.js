import React from 'react'
import './Contact.css'


function Contact() {
    return (
        <div>
            <ul className='contact-info'>
          <li>
            <a 
              
              href='https://github.com/OmarMutd'
              target='_blank'
              rel="noopener noreferrer">Github</a>
          </li>
          <li>
            <a 
              
              href='https://www.linkedin.com/in/omar-muhanna-profile/'
              target='_blank'
              rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a 

              href="mailto:omarmuhomar@hotmail.com?subject=Hey there!&body="
              target='_blank'
              rel="noopener noreferrer">Email</a>
          </li>
        </ul>
        </div>
    )
}

export default Contact;
