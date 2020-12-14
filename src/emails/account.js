const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jeff@altahost.com',
        subject: 'Welcome to my App',
        text: `Welcome to the app, ${name}. Thank you!`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jeff@altahost.com',
        subject: 'Sorry to see you go',
        text: `Sorry, ${name}. Thank you!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
