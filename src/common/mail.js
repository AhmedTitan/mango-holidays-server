const nodeMailer = require("nodemailer");

const properties = {
  mailer: {
    from: "temp@gmail.com", //Please add a working email address to test this
    pass: "temp@123",
  },
};

let mailer = nodeMailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: properties.mailer.from,
    pass: properties.mailer.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

exports.sendMailPromise = (mailOptions) => {
  return new Promise((resolve, reject) => {
    mailer.sendMail(mailOptions, (err, info) => {
      if (err) reject(err);
      else resolve(info);
    });
  });
};
