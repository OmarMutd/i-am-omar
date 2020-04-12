import React from 'react';
import './App.css';
import About from './About/About.js'
import Footer from './Footer/Footer.js'
import TechStack from './TechStack/TechStack.js'
import Projects from './Projects/Projects.js'
import Contact from './Contact/Contact.js'


function App() {
  return (
    <div className="App">
  <About/>
  <TechStack/>
  <Projects/>
  <Contact/>
  <Footer/>
    </div>
  );
}

export default App;
