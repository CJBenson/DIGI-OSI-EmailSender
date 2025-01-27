var http = require('http');
var url = require('url');
var emailSender = require('./sendgridEmailer')

const port = 3000;

const server = http.createServer((req, res)=> {
  console.log('creating server!');

    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "This is the example
    // of node.js web based application"
    res.end('This is the example of node.js web-based application \n');

    // Console will display the message

  res.statusCode = 200;
  var parsedURL = url.parse(req.url, true);
  var query = parsedURL.query;

  //Get all the relevant data from the query
  var addressToSend = query.address;

  var name0 = query.name0;
  var name1 = query.name1;
  var name2 = query.name2;
  var name3 = query.name3;
  var name4 = query.name4;

  var link0 = query.link0;
  var link1 = query.link1;
  var link2 = query.link2;
  var link3 = query.link3;
  var link4 = query.link4;

  emailSender.sendBasicEmail(addressToSend, name0, name1, name2, name3, name4, link0, link1, link2, link3, link4);
});

server.listen(port, () => {
  console.log('Server running at port 3000');
});