var express = require('express')
var path = require('path')

var app = express()


app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.get('/api', function (req, res) {
  res.send('Users service')
})

app.get('/api/users', function(req, res) {
     // res.send(404, 'No data here');
	//res.send({ "some": "json" });
 	res.send({ "page": 1, 
		  "users": [
		    {"name":"Ivan Ivanov",
		     "id":"123",
		     "registration":"2015-01-29",
             "status": "online",
             "latestActivity":"2015-01-29"
            },
            {"name":"Masha Ivanova",
		     "id":"133",
		     "registration":"2015-01-29",
             "status": "online",
             "latestActivity":"2015-01-29"
            }
          ]
        });
 });
app.get('/api/doctors', function(req, res) {
     // res.send(404, 'No data here');
  //res.send({ "some": "json" });
  res.send({ "page": 1, 
      "doctors": [
        {"name":"Ivan Hadorkin",
         "id":"123",
         "registration":"2015-01-29",
             "status": "online",
             "latestActivity":"2015-01-29"
            },
            {"name":"Masha Dsdgasdf",
         "id":"133",
         "registration":"2015-01-29",
             "status": "online",
             "latestActivity":"2015-01-29"
            }
          ]
        });
 });

app.get('/api/users/:user', function(req, res) {
	console.log(req.params.user);
    // res.send(404, 'No data here');
	//res.send({ "some": "json" });
 	res.send({  "name":"Ivan " + req.params.user,
		     "id":"123",
		     "registration":"2015-01-29",
             "status": "online",
             "latestActivity":"2015-01-29"
             
        });
});

app.get('/api/doctors/:doctors', function(req, res) {
  console.log(req.params.doctors);
    // res.send(404, 'No data here');
  //res.send({ "some": "json" });
  res.send({  "name":"Ivan " + req.params.doctors,
         "id":"123",
         "registration":"2015-01-29",
             "status": "online",
             "latestActivity":"2015-01-29"
             
        });
});




var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
