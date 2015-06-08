var express = require('express');
var path = require('path');

var app = express();

var topic = {
"topic": [{
    "name": "Ivan Ivanov",
    "id": "12",
    "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
}, {
    "name": "Masha Ivanova",
    "id": "13",
    "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
}]
};


app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.get('/api', function (req, res) {
  res.send('Mail Service');
});

app.get('/api/inbox/:topic', function(req, res) {
    console.log(req.params.topic);
    // res.send(404, 'No data here');
    //res.send({ "some": "json" });

    for (var c in topic) {
        if (topic.id == req.params.topic) {
            res.send({
                "name": c.name,
                "id": c.id,
                "message": c.message
            });
        }
    }
});

app.get('/api/newletter', function(req, res) {
    res.send({
        //плдучаем письмо
    });
});


app.get('/api/inbox', function(req, res) {
    res.send({
        "topic": [{
            "name": "Ivan Ivanov",
            "id": "12",
            "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }, {
            "name": "Masha Ivanova",
            "id": "13",
            "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }]
    });
});
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});