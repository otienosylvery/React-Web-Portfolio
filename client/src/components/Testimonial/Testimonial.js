import React from 'react'
import './Testimonial.css'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const Testimonial = () => {

    const data =[
        {
            name:'~Kenny',
            position:'Manager',
            testimony:'Great team player. Delivers on time and wihtin scope. Always exceeding expectation',
            profileImage:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='
        },
        {
            name:'~Jacob',
            position:'Project Manager',
            testimony:'Great team player. Delivers on time and wihtin scope. Always exceeding expectation',
            profileImage:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='
        },
        {
            name:'~Brenda',
            position:'Senior Developer',
            testimony:'Great team player. Delivers on time and wihtin scope. Always exceeding expectation',
            profileImage:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='
        },
        {
            name:'~Sekina',
            position:'Full Stack Developer',
            testimony:'Great team player. Delivers on time and wihtin scope. Always exceeding expectation',
            profileImage:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='
        },
        {
            name:'~Brian',
            position:'Supervisor',
            testimony:'Great team player. Delivers on time and wihtin scope. Always exceeding expectation',
            profileImage:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='
        },
        {
            name:'~Abdi',
            position:'Developer',
            testimony:'Great team player. Delivers on time and wihtin scope. Always exceeding expectation',
            profileImage:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='
        },
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='container testimonial-section'>
        
        <div className='section-title'>

            <h5>Testimonial</h5>

            <span className='line'></span>
            
        </div>

        <div className='testimonial-slider'>
            <Slider {...settings}>
                {data.map((item, index)=>(
                <div className='testimonial-slider-main'>
                     <div className='content-slider' key={index}>

                        <img src={item.profileImage} alt='profile image' className='center-image'/>
                        <p>"{item.testimony}"</p>
                        <p>{item.name}</p>
                        <p>{item.position}</p>

                      </div>
                </div>
                   
                ))}

            </Slider>
        </div>


    </div>
  )
}

export default Testimonial