import React, {useState} from 'react'
import './TechStack.css'
import Fade from 'react-reveal/Fade'

const TechStack = () => {
    const data=[
        {
            name: 'Java'
        },
        {
            name: 'Kotlin'
        },
        {
            name: 'Spring'
        },
        {
            name: 'Android Studio'
        },
        {
            name: 'Javascript',
        },
        {
            name: 'React'
        },
        {
            name: 'Angular'
        },
        {
            name: 'CMS'
        },
        {
            name: 'HTM/CSS'
        },
        {
            name: 'MySQL'
        },
        {
            name: 'Material UI/ UX'
        },
    ]

    const colors = [
        "#f1c40f",
        "#eb4034",
        "#626d8c",
        "#898391",
        "#5b63b0",
        "#aab05b",
        "#a0c777",
        "#a5d1cb",
        "#445754",
        "#0d3b35",
        "#09272e",
        "#ad8b84",
        "#ad8b84",
        "#cb87e8",
        "#402e47",
        "#6c876d",
        "#5cab5f",
        "#5cab5f",
        "#0e4745",
        "#7a252c",

    ]
      
    const [showMoreTechStach, setShowMoreTechStack]= useState(9);

    const loadMore = ()=>{
        setShowMoreTechStack((previous)=>previous+3);
    }
    
  return (
    <Fade right>
    <div className='container techstack-section' id='tech-stack'>

        <div className='section-title'>

            <h5>Tech Stack</h5>

            <span className='line'></span>
            
        </div>

        <div className='row'>

            {data.slice(0, showMoreTechStach).map((item, index)=>(
                <div className='col-xl-4 col-lg-4 col-md-6 col-s,-12' key={index}>

                    <div className={index===0? 'tech-content-marked tech-content':'tech-content'}>

                        <span className='stack-number' style={{backgroundColor: colors[index]}}>
                            {index+1}
                        </span>
                    <p>{item.name}</p>

                    </div>
                    

                </div>
            ))}
        </div>

        {showMoreTechStach >= data.length ? null:(
        <span className='load-more-techstack-items' onClick={loadMore}>
            Load More
        </span>
        )}
        
    </div>
    </Fade>
  )
}

export default TechStack