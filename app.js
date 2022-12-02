const express = require ('express')
const app = express()
const PORT = process.env.PORT || 8080
const bodyparser = require ('body-parser')
const cors = require ('cors')
const nodemailer = require ('nodemailer')
const sendgridtransporter = require ('nodemailer-sendgrid-transport')

require('dotenv').config()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))


const transporter = nodemailer.createTransport(
    sendgridtransporter({
        auth: {
            api_key: process.env.API_SENDGRID
        }
    })
)

app.post('/sendemail', (req, res)=>{
    const {name, email, jobtypes, messages} = req.body

    if (!name){
        return res.status(400).json({error: 'PLease your name'})
    }

    if (!email){
        return res.status(400).json({error: 'PLease add your E-mail Address'})
    }

    if (!jobtypes){
        return res.status(400).json({error: 'PLease select at least one job type'})
    }

    if (!messages){
        return res.status(400).json({error: 'PLease add your message'})
    }
    transporter.sendMail({
        to:'otienosylvery@gmail.com',
        from: 'otienosylvery@gmail.com',
        subject: 'Job Offers',
        html: `
            <h5>Details Information:</h5>

            <ul>
                <li><p>Name: ${name}</p></li>
                <li><p>E-mail: ${email}</p></li>
                <li><p>Job Types: ${jobtypes}</p></li>
                <li><p>Message: ${messages}</p></li>
            </ul>
        `,

    })

    res.json({success: 'E-mail sent successfully'})

})

app.listen (PORT , (req, res)=>{
    console.log('Server Connected')
})


