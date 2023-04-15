var nodemailer = require('nodemailer');
//const SendmailTransport = require('nodemailer/lib/sendmail-transport');

exports.sendMail = async (message) => {
    var transporter =  nodemailer.createTransport({
                        host: "xyopst.com",
                        port: 465,
                        secure: true, // use TLS
                        auth: {
                            user: "noreply@xyopst.com",
                            pass: "NRamil@Xy23!",
                        },
                        tls: {
                        // do not fail on invalid certs
                        rejectUnauthorized: false,
                        },
                    });


      var mailOptions = {
        from: 'noreply@xyopst.com',
        to: message.to,
        subject: message.subject,
        text: message.content
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

//pass- NRamil@Xy23!