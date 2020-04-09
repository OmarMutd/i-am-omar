import React from 'react';
import './App.css';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import Intro from './Intro/Intro.js'
import Projects from './Projects/Projects.js'
import Contact from './Contact/Contact.js'
import PageNotFound from './PageNotFound/PageNoteFound';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
   <Switch>
   <Route exact path='/' component={Header} />
   <Route path='/Projects' component={Projects} />
   <Route path='/Footer' component={Footer} />
   <Route path='/Intro' component={Intro} />
   <Route path='/Contact' component={Contact} /> 
   <Route component={PageNotFound} />
  </Switch>
    </div>
  );
}

export default App;
