import React, {useState, createContext} from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects'
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import NavbarMobileView from './components/Sidebar/NavbarMobileView';
import './App.css';

import ScrollToTop from 'react-scroll-to-top'

// console.log(process.env.REACT_APP_API_SENDGRID)

export const ThemeContext = createContext(null);

const App = ()=>{

 const [theme, setTheme] = useState ('lightTheme');

 const changeTheme = () =>{
  setTheme((prev) => (prev === 'lightTheme' ? 'darkTheme': 'lightTheme'));
 }

  return(
    <ThemeContext.Provider value = {{theme,changeTheme}}>

      <div id={theme}>
        <NavbarMobileView changeTheme={changeTheme} theme={theme}/>

        <Sidebar changeTheme={changeTheme} theme={theme}/>
        <About/>
        <WorkExperience/>
        <TechStack/>
        <Projects/>
        <Education/>
        <Testimonial/>
        <Contact/>
      </div>
    
    <ScrollToTop smooth ={true}
    color='white'
    height='20'
    width='20'
      style={{borderRadius:'90px', backgroundColor:'rgb(59, 52, 52)' }}
    />
    </ThemeContext.Provider>
  );
}
export default App;