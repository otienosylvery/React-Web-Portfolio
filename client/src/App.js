import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects'
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import './App.css';

import ScrollToTop from 'react-scroll-to-top'

const App = ()=>{
  return(
    <>
    <Sidebar/>
    <About/>
    <WorkExperience/>
    <TechStack/>
    <Projects/>
    <Education/>
    <Testimonial/>
    <Contact/>
    <ScrollToTop smooth ={true}
    color='white'
    height='20'
    width='20'
      style={{borderRadius:'90px', backgroundColor:'rgb(59, 52, 52)' }}
    />
    </>
  );
}
export default App;