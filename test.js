const { info } = require('console');
const nodemailer = require('nodemailer');

const email = nodemailer.createTransport({
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "auth": {
        "user": "****",
        "pass": "****"
    },
    debug: true,
    logger: true
});


const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(info);
        return info.response;
    }
});
};

let email_data = {
    from: "****@gmail.com",
    to: "****@naver.com",
    subject: "test mail subject",
    text: "test mail text"
}



send(email_data);