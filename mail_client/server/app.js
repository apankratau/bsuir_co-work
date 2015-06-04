var express = require('express');
var path = require('path');

var app = express();


app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.get('/api', function (req, res) {
  res.send('Mail Service');
});

app.get('/api/inbox/:topic', function(req, res) {
     // res.send(404, 'No data here');
	//res.send({ "some": "json" });
 	res.send({ 
 		req.params[0];
    });
 });

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});