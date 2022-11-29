import React,{useState} from 'react'
import './NavbarMobileView.css'
import {GiHamburgerMenu} from 'react-icons/gi'

import Switch from 'react-switch'

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
import {Link} from 'react-scroll'
const NavbarMobileView = ({theme, changeTheme}) => {

    const [open, setOpen] = useState(false);

    const handleClick = () =>{
        setOpen(!open)
    }
    
    return (
    <div className='mobile-view-navbar'>
        <div className='navbar-header'>
            <p><GiHamburgerMenu size={25} onClick={handleClick}/></p>
        </div>

        {open? (
            <div className='mobile-nav'>

            <ul>
                    <li className='nav-item-mobileview'>
                        <Link to='home'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}>
                            <FcHome size={25}/>Home
                        </Link>
                        
                    </li>
                    <li className='nav-item-mobileview'>
                        <Link to='about'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}>
                            <FcNightPortrait size={25}/>About
                        </Link>
                    </li>
    
                    <li className='nav-item-mobileview'>
                        <Link to='work-experience'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}>
                        <FcFactory size={25}/>Work Experience
                        </Link>
                        
                    </li>
    
                    <li className='nav-item-mobileview'>
                        <Link to='tech-stack'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}>
                        <MdBiotech size={25} color='orange'/>Tech Stack
                        </Link>
                        
                    </li>
    
                  
    
                    <li className='nav-item-mobileview'>
                        <Link to='projects' 
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}>
                        <FcTodoList size={25}/>Projects
                        </Link>
                        
                    </li>
                    
                    
    
                    <li className='nav-item-mobileview'>
                        <Link to='education'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}>
                        <MdCastForEducation size={25} color='yellow'/>Education
                        </Link>
                        
                    </li>
                    
                    <li className='nav-item-mobileview'>
                        <Link to='testimonial'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}>
                        <FcSalesPerformance size={25}/>Testimonial
                        </Link>
                        
                    </li>
                    <li className='nav-item-mobileview'>
                        <Link to='contact'
                        spy={true}
                        smooth={true}>
                        <FcContacts size={25}/>Contact
                        </Link>
                        
                    </li>

                    <li className='nav-item-mobileview'>
                        <Switch onChange={changeTheme} checked={theme==='lightTheme'}/>

                    </li>
                   </ul>
    
            </div>
        ):null}
        

    </div>
  )
}

export default NavbarMobileView