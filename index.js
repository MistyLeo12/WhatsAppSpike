var express = require('express');
var app = express();
var twilio = require('twilio');


app.get('/', function (req, res) {
  res.send('Node Testing');
});

const accountSid = 'AC9d3324ea00d6e7f91b38f5d28ceecb3b';
const authToken = '67bd5b8e9908e2556517f86bb040b7f6';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
        body: 'Hola {{1}}, tu cita meidca en la Clinica Esperanza es el {{2}} a las {{3}}.',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+12103816495'
      })
      .then(message => console.log(message.sid))
      .done();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});