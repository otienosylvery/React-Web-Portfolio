import React from 'react'
import './About.css'
import ProfilePic from '../../Image/profile.jpg'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'

const About = () => {
  return (
    <div id='about'>
      <div className='container about-section'>
        <div className='row'>

          <Fade bottom>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

              <div className='about-image'>
                <img src={ProfilePic} alt='Profile Picture' />
              </div>
            </div>
          </Fade>

          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

            <div className='about-details'>

              <div className='about-title'>
                <Flip left>
                  <h5>About Me</h5>
                  <span className='line'></span>
                </Flip>

              </div>

              <Fade right>
                <p>
                  I am a dedicated Software Developer with a passion for creating innovative solutions that heavily impact in the digital world.
                  <br></br>
                  <br></br>
                  With an experience spanning over 4 years, I have gannered skills as a Fullstack Developer having worked on a wide range of products from Mobile Applications design and development to design and development of complex Web Applications both in front-end and back-end development. My expertise spans multiple programming languages and technologies including Java, Kotlin, JavaScript, TypeScript, HTML, CSS, Spring and MySQL.
                </p>
              </Fade>
            </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default About