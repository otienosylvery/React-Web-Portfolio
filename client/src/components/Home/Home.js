import React from 'react';
import './Home.css'
import Contact from "../Contact/Contact"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'

import Typewriter from 'typewriter-effect';
import MyCv from './my_cv.pdf'
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs'
import { IoSunny } from 'react-icons/io5'
import Fade from 'react-reveal/Fade'





const Home = ({ theme, changeTheme }) => {
  return (
    <div className='container-fluid home' id='home'>

      <div className='themeChange' onClick={changeTheme}>

        {theme === 'lightTheme' ? (<p><BsFillMoonStarsFill size={40} /></p>) : (<p className='light-them-icon'><IoSunny size={40} /></p>)}


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
                delay: 5
              }}
            />
          </h3>

        </Fade>

        <Fade bottom>

          <div className='action-button'>
            <BrowserRouter>

              <Link to="#contact" smooth={true} duration={100} style={{ textDecoration: 'none', color: 'black' }}><div className='hire-me-button'>
                Hire Me</div></Link>


            </BrowserRouter>


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