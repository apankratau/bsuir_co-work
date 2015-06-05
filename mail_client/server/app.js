var express = require('express');
var path = require('path');

var app = express();


app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.get('/api', function (req, res) {
  res.send('Mail Service');
});

app.get('/api/inbox/:topic', function(req, res) {
    res.send({
        "registration":"2015-01-29",
        "status": "online",
        "latestActivity":"2015-01-29"
    });
 });

app.get('/api/newletter', function(req, res) {
 	res.send({
 		"letter" : req.params[0]
    });
 });


app.get('/api/inbox', function(req, res) {
 	res.send({ 
 		//Array Message
    });
 });

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});