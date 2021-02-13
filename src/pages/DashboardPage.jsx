import React from 'react';
var nodemailer = require ('nodemailer');

export default function DashboardPage () {
  const onClick = () => {
    console.log ('clicked');
    var transport = nodemailer.createTransport ({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'ecb5c1666eeb03',
        pass: '89db84bf7f9269',
      },
    });

    var mailOptions = {
      from: '"Example Team" <from@example.com>',
      to: 'bshara23@gmail.com',
      subject: 'Nice Nodemailer test',
      text: 'Hey there, it’s our first message sent with Nodemailer ',
      html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
    };

    transport.sendMail (mailOptions, (error, info) => {
      if (error) {
        return console.log (error);
      }
      console.log ('Message sent: %s', info.messageId);
    });
  };

  return (
    <div>
      This is the dashboard page
      {/* <input onClick={onClick}>Click me</input> */}
      <button onClick={onClick} type="button">Click Me!</button>

    </div>
  );
}
