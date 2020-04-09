import React from 'react';
import './App.css';
import About from './About/About.js'
import Footer from './Footer/Footer.js'
import TechStack from './TechStack/TechStack.js'
import Projects from './Projects/Projects.js'
import Contact from './Contact/Contact.js'
import PageNotFound from './PageNotFound/PageNoteFound';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
   <Switch>
   <Route exact path='/' component={About} />
   <Route path='/Projects' component={Projects} />
   <Route path='/Footer' component={Footer} />
   <Route path='/TechStack' component={TechStack} />
   <Route path='/Contact' component={Contact} /> 
   <Route component={PageNotFound} />
  </Switch>
    </div>
  );
}

export default App;
