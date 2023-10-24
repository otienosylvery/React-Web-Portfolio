import React from 'react'
import './WorkExperience.css'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { MdOutlineGroupWork } from "react-icons/md";


const WorkExperience = () => {

    const data =[
        {
            companyName: "Kenya Revenue Authority",
            position: 'Software Developer (M-Service)',
            role: 'As a software developer in the M-Service Section, I was invovled to a big part in designing, building, deploying and maintaining both mobile and robust system applications, developing new systems to automate business processes in conformity with design artefacts and system request chages (SRCs), collaborating with cross functional teams to analyse, design and ship new features as well as performing peer reviews and unit tests to guarantee quality before final submissions to Quality Management. Products developed include: KRA Staff App (Android) and KRA M-Service Application (Android).',
            year:'2021-2023',
            techSkills:[
                {
                    techName:'Android Studio'
                },
                {
                    techName:'Java'
                },
                {
                    techName:'Kotlin'
                },
                {
                    techName:'React JS'
                },
                {
                    techName:'SpringBoot'
                },
                {
                    techName:'Material UI'
                },
                
            ]
        },
        {
            companyName: "ICT Authority of Kenya",
            position: 'Software Developer',
            role:'I worked as a Software Developer for the ICT Authority stationed at the Kenya Revenue Authority HQ, I took part in designing, building, deploying and maintaining system as well as web applications, developing new systems to automate business processes in conformity with design artefacts and system request chages (SRCs), collaborating with cross functional teams to analyse, design and ship new features as well as performing peer reviews and unit tests to guarantee quality before final submissions to Quality Management. Products developed include: KESRA Website, KRA Website and KESRA Mobile Application (Android).',
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
            companyName: "Unicool International Ltd (Kenya)",
            position: 'ICT Officer',
            role:'As an ICT Officer at the organization, I was tasked with providing User support & helpdesk support, Installation and configuration of Operating Systems and Application Software, Setup of new computers and peripherals, User Active Directory Management, Network maintenance and troubleshooting as Unicool  website design and development.',
            year:'2018-2019',
            techSkills:[
                {
                    techName:'UAD'
                },
                {
                    techName:'Computer OS'
                },
                {
                    techName:'MySQL'
                },
                {
                    techName:'JavaScript'
                },
                {
                    techName:'HTML/CSS'
                },

                
            ]
        },
        {
            companyName: "Communications Authority of Kenya",
            position: 'ICT Student Intern',
            role:'As an ICT Student Intern at the organization, I was tasked with providing User support & helpdesk support, Installation and configuration of Operating Systems and Application Software, Setup of new computers and peripherals, User Active Directory Management and Network maintenance and troubleshooting.',
            year:'2016-2017',
            techSkills:[
                {
                    techName:'UAD'
                },
                {
                    techName:'Computer OS'
                },
                {
                    techName:'MySQL'
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