const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'yahoo', // Use a service like 'hotmail', 'yahoo', etc.
  auth: {
    user: 'biradaradinath2gmail.com',  // Your email address
    pass: 'amqnfyifcxmzadbc'    // Your email password or app-specific password
  }
});

// Email options
const mailOptions = {
  from: 'biradaradinath2@gmail.com',
  to: 'biradaradinath3@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent using Nodemailer.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
