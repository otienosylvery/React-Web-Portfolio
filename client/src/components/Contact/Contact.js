import React from 'react'
import './Contact.css'


import { RiSendPlaneFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className='container contact-section' id='contact'>
        <div className='row'>

            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                <div className='contact-form-image'>
                    <img src='https://media.istockphoto.com/id/1322304331/photo/shot-of-two-work-colleagues-using-a-digital-tablet-during-a-business-meeting-at-work.jpg?b=1&s=170667a&w=0&k=20&c=XLniMjrIOrf0bHlijT60oRgxh6bTfASloglZFiwYvWk=' alt='contact us'/>
                </div>
            </div>

            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7 contact-form-input-area'>
                <div className='contact-form-design'>
                    <div className='text-center'>
                        <h5>Contact Me</h5>
                    </div>

                    <form>
                        <div className='contact-form'>
                            <label className='form-label'>Name</label>
                            <input type='text' className='form-control'/>
                        </div>

                        <div className='contact-form'>
                            <label className='form-label'>E-mail</label>
                            <input type='email' className='form-control'/>
                        </div>

                        <div className='contact-form'>
                            <label className='form-label'>Job Status</label>
                            <select className='job-status-select'>
                                <option>Full-time</option>
                                <option>Working Student</option>
                                <option>Part-time</option>
                                <option>Contract</option>
                            </select>
                        </div>

                        <div className='contact-form'>
                            <label className='form-label'>Message</label>
                            <textarea name="Message" id="message" cols="30" rows="4"></textarea>
                        </div>

                        <div className='submit-button'>
                            <p>Send <RiSendPlaneFill size={20}/></p>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact