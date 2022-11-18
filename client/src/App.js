import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects'
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Testimonial from './components/Testimonial/Testimonial';

const App = ()=>{
  return(
    <>
    <Sidebar/>
    <About/>
    <TechStack/>
    <Projects/>
    <WorkExperience/>
    <Education/>
    <Testimonial/>
    </>
  );
}
export default App;