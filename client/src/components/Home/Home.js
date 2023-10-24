import React from 'react';
import './Home.css'
// import Contact from "../components/Contact" implement
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom';

import Typewriter from 'typewriter-effect';
import MyCv from './my_cv.pdf'
import {BsFillMoonStarsFill, BsSun} from 'react-icons/bs'
import {IoSunny} from 'react-icons/io5'
import Fade from 'react-reveal/Fade'





const Home = ({theme, changeTheme}) => {
  return (
    <div  className='container-fluid home' id='home'>

      <div className='themeChange' onClick={changeTheme}>

        {theme === 'lightTheme' ? (<p><BsFillMoonStarsFill size={40}/></p>):(<p className='light-them-icon'><IoSunny size={40}/></p>)}


      </div>

      <div className='container home-content'>

        <Fade right>

        <h1>Hi I'm Sylvery Otieno</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                'Full Stack Software Developer',
                'Android Applications Developer', 
                'UI/UX Designer',
                'Systems Architect',
                'Project Manager',
                'Web Developer'
              ],
              autoStart: true,
              loop: true,
              delay:5
            }}
          />
        </h3>

        </Fade>

        <Fade bottom>
        {/* <BrowserRouter>
            <Routes>
              <Route path="/contacts" element={<Contact/>}></Route>
            </Routes>
            </BrowserRouter> */}
        <div className='action-button'>

          <div  className='hire-me-button'>
          Hire Me
            
            {/* <Link to="/contact">Hire Me</Link> */}
            {/* implement link to do */}
          </div>

          <div className='get-resume-button'>
            <a href={MyCv} download='Sylvery Otieno Resume.pdf'>Get Resume</a>
          </div>

        </div>
        </Fade>
      </div>

    </div>
  )
}

export default Home