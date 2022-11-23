import React from 'react'
import './SidebarList.css'
import profilepic from '../../Image/profile.JPG'

import { 
    FcHome,
    FcNightPortrait,
    FcTodoList,
    FcContacts,
    FcFactory,
    FcSalesPerformance,
} from "react-icons/fc";

import {MdBiotech} from "react-icons/md"
import { MdCastForEducation } from 'react-icons/md';
import * as Scroll from 'react-scroll'
import {Link} from 'react-scroll'


const SidebarList = ({expandSidebar}) => {
  return (
    <React.Fragment>

        {expandSidebar ? (

            <div className='navbar-items'>

               <div className='sidebar-profile-pic'>
                   <img src={profilepic} alt='profile picture'/>
               </div>

               <ul>
                <li className='nav-item'>
                    <Link to='home'>
                        <FcHome size={25}/>Home
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to='about'>
                        <FcNightPortrait size={25}/>About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='work-experience'>
                    <FcFactory size={25}/>Work Experience
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to='tech-stack'>
                    <MdBiotech size={25} color='orange'/>Tech Stack
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to='education'>
                    <MdCastForEducation size={25} color='yellow'/>Education
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to='projects'>
                    <FcTodoList size={25}/>Projects
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to='testimonial'>
                    <FcSalesPerformance size={25}/>Testimonial
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to='contact'>
                    <FcContacts size={25}/>Contact
                    </Link>
                    
                </li>
               </ul>

           </div>

        ):(
            <div className='icon-only-navbar-items'>
                <ul>
                <li className='nav-item'>
                    <FcHome size={25}/>
                </li>
                <li className='nav-item'>
                    <FcNightPortrait size={25}/>
                </li>
                <li className='nav-item'>
                    <FcFactory size={25}/>
                </li>
                <li className='nav-item'>
                    <MdBiotech size={25} color='orange'/>
                </li>
                <li className='nav-item'>
                    <MdCastForEducation size={25} color='yellow'/>
                </li>
                <li className='nav-item'>
                    <FcTodoList size={25}/>
                </li>
                <li className='nav-item'>
                    <FcSalesPerformance size={25}/>
                </li>
                <li className='nav-item'>
                    <FcContacts size={25}/>
                </li>
               </ul>
            </div>
        )}
    </React.Fragment>
  )
}

export default SidebarList