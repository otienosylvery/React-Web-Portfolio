import React from 'react'
import './WorkExperience.css'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { MdOutlineGroupWork } from "react-icons/md";


const WorkExperience = () => {

    const data =[
        {
            companyName: "Communications Authority",
            position: 'Full Stack Developer',
            role: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...',
            year:'2021-2022',
            techSkills:[
                {
                    techName:'Node JS'
                },
                {
                    techName:'React JS'
                },
                {
                    techName:'Postgres SQL'
                },
                {
                    techName:'Material UI'
                },

                
            ]
        },
        {
            companyName: "Unicool International",
            position: 'Front End Developer',
            role:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...',
            year:'2020-2021',
            techSkills:[
                {
                    techName:'Node JS'
                },
                {
                    techName:'React JS'
                },
                {
                    techName:'Postgres SQL'
                },
                {
                    techName:'Material UI'
                },

                
            ]
        },
        {
            companyName: "Kenya Revenue Authority",
            position: 'Full Stack Developer',
            role:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...',
            year:'2019-2020',
            techSkills:[
                {
                    techName:'Node JS'
                },
                {
                    techName:'React JS'
                },
                {
                    techName:'Postgres SQL'
                },
                {
                    techName:'Material UI'
                },

                
            ]
        },
        {
            companyName: "ICT Authority",
            position: 'Full Stack Developer',
            year:'2018-2019',
            role:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...',
            techSkills:[
                {
                    techName:'Node JS'
                },
                {
                    techName:'React JS'
                },
                {
                    techName:'Postgres SQL'
                },
                {
                    techName:'Material UI'
                },

                
            ]
        },
        {
            companyName: "Google",
            position: 'Full Stack Developer',
            year:'2021',
            role:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...',
            techSkills:[
                {
                    techName:'Node JS'
                },
                {
                    techName:'React JS'
                },
                {
                    techName:'Postgres SQL'
                },
                {
                    techName:'Material UI'
                },

                
            ]
        },
        {
            companyName: "Microsoft",
            position: 'Full Stack Developer',
            year:'2021',
            role:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...',
            techSkills:[
                {
                    techName:'Node JS'
                },
                {
                    techName:'React JS'
                },
                {
                    techName:'Postgres SQL'
                },
                {
                    techName:'Material UI'
                },

                
            ]
        },

        {
            companyName: "Huawei",
            position: 'Full Stack Developer',
            year:'2021',
            role:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...',
            techSkills:[
                {
                    techName:'Node JS'
                },
                {
                    techName:'React JS'
                },
                {
                    techName:'Postgres SQL'
                },
                {
                    techName:'Material UI'
                },

                
            ]
        },
       
    ]

    const colors = [
        '#591310',
        '#ff8042',
        '#001cce',
        '#4b088a',
        '#3a5f99',
        '#9ae39c',
        '#116613'


    ]

  return (
    <div className='container work-experience-section' id='work-experience'>

        <div className='section-title'>

            <h5>Work Experience</h5>

            <span className='line'></span>

        </div>

    <div className='time-line'>
        <VerticalTimeline lineColor='tomato'>

        
        {data.map((item, index)=>(
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: colors[index], color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #591310' }}
        date={item.year}
        dateClassName='year-class'
        iconStyle={{ background: colors[index], color: '#fff' }}
        icon={<MdOutlineGroupWork />}>

    <h3 className="vertical-timeline-element-title">{item.companyName}</h3>
    
    <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>

    <div className='row'>
        {item.techSkills.map((tech, index)=>(
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                <div className='project-tech'>
                    <p>
                    {tech.techName}
                    </p>
                </div>
            </div>
        ))}
    </div>

    <div>
        <p>{item.role}</p>
    </div>

    
   
        </VerticalTimelineElement>

        ))}

        </VerticalTimeline>
    </div>
   




    </div>
  )
}

export default WorkExperience