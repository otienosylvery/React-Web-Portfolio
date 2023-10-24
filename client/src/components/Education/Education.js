import React from 'react'
import './Education.css'

import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { MdCastForEducation } from 'react-icons/md'

const Education = () => {

    const data =[
        // {
        //     institutionName: 'Jomo Kenyatta University of Agriculture & Technology',
        //     qualification:'Msc. Information Technology',
        //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        //     year:'2020 - Present'
        // },
        {
            institutionName: 'Jomo Kenyatta University of Agriculture & Technology',
            qualification:'Bachelor of Business Information Technology',
            description:'Second Class Upper Honors Graduate',
            year: '2014 - 2018'
        },
        // {
        //     institutionName: 'St. Joseph\'s School Rapogi',
        //     qualification:'KCSE Certificate',
        //     description:'Mean Grade: A',
        //     year: '2010 - 2013'
        // }
    ]

    const colors = [
        "#402e47",
        "#6c876d",
        "#5cab5f"
    ]
  return (
    <div className='container education-section' id='education'>
        <div className='section-title'>

            <h5>Education</h5>

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
        icon={<MdCastForEducation />}>

    <h3 className="vertical-timeline-element-title">{item.institutionName}</h3>
    
    <h5 className="vertical-timeline-element-subtitle">{item.qualification}</h5>

    <p>{item.description}</p>

        </VerticalTimelineElement>

        ))}

        </VerticalTimeline>
    </div>
    </div>
  )
}

export default Education