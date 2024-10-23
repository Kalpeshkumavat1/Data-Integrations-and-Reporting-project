require('dotenv').config();
const mail=require('nodemailer')
const transporter=mail.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_APP_PASS
    }
})

module.exports=transporter