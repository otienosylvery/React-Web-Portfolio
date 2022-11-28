import React from 'react'
import ProjectList from './ProjectList';
import './Project.css';

const Projects = () => {

    const data = [
        {
            name:"Full Stack Job Portal",
            des:"Contrary to popular belief, Lorem Ipsum is n ot simply random text. It has roots in a piece of class ical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consect",
            projectLink: "https://www.udemy.com/course/react-responsive-portfolio-website-complete-react-project/learn/lecture/33140086#content",
            techUsed:[
                {
                    techName:"Node js"
                },
                {
                    techName:"Express js"
                },
                {
                    techName:"Next js"
                },
            ]
        },

        {
            name:"Mobile Development Portal",
            des:"Contrary to popular belief, Lorem Ipsum is n ot simply random text. It has roots in a piece of class ical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consect",
            projectLink: "https://www.udemy.com/course/react-responsive-portfolio-website-complete-react-project/learn/lecture/33140086#content",
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
            ]
        },

        {
            name:"Web Development Portal",
            des:"Contrary to popular belief, Lorem Ipsum is n ot simply random text. It has roots in a piece of class ical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consect",
            projectLink: "https://www.udemy.com/course/react-responsive-portfolio-website-complete-react-project/learn/lecture/33140086#content",
            techUsed:[
                {
                    techName:"HTML"
                },
                {
                    techName:"CSS"
                },
                {
                    techName:"React js"
                },
            ]
        },

        {
            name:"Online Learning Platform",
            des:"Contrary to popular belief, Lorem Ipsum is n ot simply random text. It has roots in a piece of class ical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consect",
            projectLink: "https://www.udemy.com/course/react-responsive-portfolio-website-complete-react-project/learn/lecture/33140086#content",
            techUsed:[
                {
                    techName:"Node js"
                },
                {
                    techName:"Express js"
                },
                {
                    techName:"Next js"
                },
            ]
        },

        {
            name:"E-Commerce App",
            des:"Contrary to popular belief, Lorem Ipsum is n ot simply random text. It has roots in a piece of class ical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consect",
            projectLink: "https://www.udemy.com/course/react-responsive-portfolio-website-complete-react-project/learn/lecture/33140086#content",
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
            ]
        },

        {
            name:"Full Stack Job Portal",
            des:"Contrary to popular belief, Lorem Ipsum is n ot simply random text. It has roots in a piece of class ical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consect",
            projectLink: "https://www.udemy.com/course/react-responsive-portfolio-website-complete-react-project/learn/lecture/33140086#content",
            techUsed:[
                {
                    techName:"Node js"
                },
                {
                    techName:"Express js"
                },
                {
                    techName:"Next js"
                },
            ]
        },
    ];

  return (
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
  )
}

export default Projects