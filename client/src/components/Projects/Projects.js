import React from 'react'
import ProjectList from './ProjectList';
import './Project.css';
import Fade from 'react-reveal/Fade'

const Projects = () => {

    const data = [
        {
            name:"Web Portfolio Project",
            des:"This is a full stack Web Portfolio application where a potiential client/ employer can view my overall portfolio statiting my tech skills, years of experince as well listing those products that I have developed. It allows a client to initiate communication through a form implementation of the API endpoint for e-mail.",
            projectLink: "https://github.com/otienosylvery/React-Web-Portfolio",
            techUsed:[
                {
                    techName:"React JS"
                },
                {
                    techName:"MySQL"
                },
                {
                    techName:"CSS"
                },
                {
                    techName:"REST API"
                },
            ]
        },

        {
            name:"MiNews Android News App",
            des:"An Android News App that picks trending news from both random and user defined locations using the news endpoint.",
            projectLink: "https://github.com/otienosylvery/MiNews",
            techUsed:[
                {
                    techName:"REST API"
                },
                {
                    techName:"MVVM"
                },
                {
                    techName:"Kotlin"
                },
                {
                    techName:"Android Studio"
                },
            ]
        },

        {
            name:"MiWeather Weather App",
            des:"Android Weather App to provide current weather conditions as well as a 7-day weather focus implemented with Jetpack Compose.",
            projectLink: "https://github.com/otienosylvery/MiNews",
            techUsed:[
                {
                    techName:"Kotlin"
                },
                {
                    techName:"REST API"
                },
                {
                    techName:"Android Studio"
                },
                {
                    techName:"MVVM"
                },
            ]
        },
        {
            name:"E-Commerce App",
            des:"Fullstack E-Commerce site allowing a user to browse, add items to cart and complete purchase",
            projectLink: "https://github.com/otienosylvery/e-commerce",
            techUsed:[
                {
                    techName:"Angular"
                },
                {
                    techName:"Material UI"
                },
                {
                    techName:"Typescript"
                },
                {
                    techName:"MySQL"
                },
            ]
        },
    ];

  return (

    <Fade right>
    <div className='container' id='projects'>
        
        <div className='about-title'>

                      <h5>Projects</h5>
                      <span className='line'></span>

        </div>

        <div className='row'>

            {data.map((item, index)=>(
                
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>

                <ProjectList {...item}/>
               

            </div>

            ))}

        </div>
    </div>

    </Fade>
  )
}

export default Projects