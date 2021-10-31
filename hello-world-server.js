var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
	  user: 'shivamdwivedi24197@gmail.com.com',
      pass: 'zvyxjpanqkrnhvap',
	  //host: 'smtp.gmail.com',
	 // port: 587
//	  user: 'hitechclassroomapp@gmail.com',
//      pass: 'asdf@12345$'
  }
});

var mailOptions = {
  from: 'shivamdwivedi24197@gmail.com.com',
  to: 'ashushivamdwivedi24197@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 