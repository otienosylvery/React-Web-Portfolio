import React from 'react'
import './About.css'
import ProfilePic from '../../Image/profile.JPG'
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
                    <img src={ProfilePic} alt='Profile Picture'/>
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

                    Contrary to popular belief, Lorem Ipsum is n
                    ot simply 
                    random 
                    text. It has roots in
                     a piece of class
                     ical Latin literature from
                      45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consect


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