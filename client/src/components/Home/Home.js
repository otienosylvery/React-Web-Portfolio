import React from 'react';
import './Home.css'

import Typewriter from 'typewriter-effect';
import MyCv from './my_cv.pdf'
import {BsFillMoonStarsFill, BsSun} from 'react-icons/bs'
import {IoSunny} from 'react-icons/io5'




const Home = ({theme, changeTheme}) => {
  return (
    <div  className='container-fluid home' id='home'>

      <div className='themeChange' onClick={changeTheme}>

        {theme === 'lightTheme' ? (<p><BsFillMoonStarsFill size={40}/></p>):(<p className='light-them-icon'><IoSunny size={40}/></p>)}


      </div>

      <div className='container home-content'>

        <h1>Hi I'm a</h1>
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

        <div className='action-button'>

          <div className='hire-me-button'>
            Hire Me
          </div>

          <div className='get-resume-button'>
            <a href={MyCv} download='Sylvery Otieno Resume.pdf'>Get Resume</a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home