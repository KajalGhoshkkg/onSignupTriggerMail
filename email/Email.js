const nodemailer = require('nodemailer')

const sendEmail = async options =>{
const transport = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.EMAIL_PORT,
    auth:{
        user:process.env.USER,
        pass:process.env.PASSWORD
    }
})

const mailOption = {
    from:'KAJAL GHOSH <smtp.mailtrap.io>',
    to:options.email,
    subject:options.subject,
    text:options.message
}

await transport.sendMail(mailOption)
}

module.exports = sendEmail
