// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.sendBasicEmail = function(address, firstName, secondName, thirdName, fourthName, fifthName, firstLink, secondLink, thirdLink, fourthLink, fifthLink){
  const msg = {
    to: 'cjben2002@gmail.com', // Change to your recipient
    from: 'studentorgs@depaul.edu', // Change to your verified sender
    subject: 'OSI Involvement Calculator Results',
    text: 'Thank you for using the OSI Involvement Calculator! Your top five recommended groups were: ',
    html: 'Thank you for using the OSI Involvement Calculator! <br><br>Your top five recommended groups were: <br><br>',
  }
  

  msg.to = address;
  msg.text += firstName + secondName + thirdName + fourthName + fifthName;
  msg.html += '<a href="' + firstLink + '">' + firstName + '</a><br>' +
              '<a href="' + secondLink + '">' + secondName + '</a><br>' +
              '<a href="' + thirdLink + '">' + thirdName + '</a><br>' +
              '<a href="' + fourthLink + '">' + fourthName + '</a><br>' +
              '<a href="' + fifthLink + '">' + fifthName + '</a>';

  sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}