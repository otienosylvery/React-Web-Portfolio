import React, {useState} from 'react';
import './Project.css';

import { FcCollapse, FcExpand } from "react-icons/fc";

const ProjectList = ({name, des, projectLink,techUsed}) => {

    const [showProjectDetails, setShowProjectDetails]=useState(false);

    const handleShowAndCollapse = ()=>{
        setShowProjectDetails(!showProjectDetails);
    }
    
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

    <div className={showProjectDetails ? 'project-list-opened project-list': 'project-list'} onClick={handleShowAndCollapse}
    
    onMouseEnter={()=>setShowProjectDetails(true)}
    onMouseLeave={()=>setShowProjectDetails(false)}
    >



        <div className='title-and-collapse-option'>
            <h5>{name}</h5>
            <p>{showProjectDetails ? <FcCollapse size={20}/>:<FcExpand size={20}/> }
                </p>
        </div>

        <div className='description'>
        {showProjectDetails ? (<p>{des}</p>):<p>{des.substring(0,150)}...<p style={{color:'green'}}>Read More.</p></p>}
        </div>

        

        

        <div className='row'>

            {techUsed && techUsed.map((tech, index)=>(
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
                    <div className='tech-used-in-project'>
                        <p style={{backgroundColor:colors[index]}}>{tech.techName}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className='live-demo-button'>
            <a target='_' href={projectLink}>Live Demo</a>
        </div>

    </div>
    
  )
}

export default ProjectList