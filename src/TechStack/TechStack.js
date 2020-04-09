import React from 'react'
import './TechStack.css'
import Highlight from 'react-highlight';
import './tomorrow-night-bright.css';
import Navbar from '../Navbar/Navbar.js';




function TechStack() {
    return (
<section className='about-section'>
  <Navbar />
      <div className='section-wrapper'>
        {/* <p>I spend my time building new websites and tools while simultaneously willing quirky side-projects into existence. I also have an unhealthy obsession with Elon Musk, I tend to impulsively learn new things for no apparent reason, and I think Indie music is pretty cool.</p> */}
        <p className='underline'><br></br>Tech.json:</p>
        {/* <WordList words={['HTML5', 'CSS3', 'Javascript', 'jQuery', 'React', 'Git', 'AJAX', 'Node', 'Postgres', 'Python']} /> */}
        <div className='my-code'>
          <Highlight className="json">
            {`{
  "Tech Stack": [
    "HTML5",
    "CSS3",
    "Javascript",
    "jQuery",
    "React",
    "Git",
    "AJAX",
    "Node",
    "Postgres",
    `}
            "<span className="blinking-cursor">|</span>"
  {`
  ]
}` }
          </Highlight>
        </div>
        <p>I also speak English and Arabic.</p>
      </div>
    </section>
  );
}

export default TechStack;
