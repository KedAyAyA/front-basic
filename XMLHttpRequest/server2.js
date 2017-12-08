var express = require('express')
var fs = require("fs");
var app = express()

app.use(express.static('public'));

app.options('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:10888");
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.send(200)
})

// 
app.get('/crossdomain.html', function (req, res) {
  var data = fs.readFileSync('./public/server2/crossdomain.html')
  res.set('Content-Type', 'text/html')
  res.cookie('name', 'kedaya', { expires: new Date(Date.now() + 900000) });
  res.send(new Buffer(data))
})

// 
app.get('/getUser', function (req, res) {
  if (req.query.callback) {
    res.cookie('jsonp', 'kedaya', { expires: new Date(Date.now() + 900000) });
    res.send(req.query.callback + '(' + JSON.stringify({
      server: 10889,
      name: 'kedaya',
      age: 'forever 18'
    }) + ')')
  } else {
    res.send({
      server: 10889,
      name: 'kedaya',
      age: 'forever 18'
    })
  }
})


app.get('/corscookie', function (req, res) {
  // with cookie * is not allowed
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:10888");
  res.header("Access-Control-Allow-Credentials", true)
  // res.header("Access-Control-Allow-Headers", 'X-Requested-With')
  res.cookie('name', 'kedaya', { expires: new Date(Date.now() + 900000) });
  res.send({
    server: 10889,
    name: 'kedaya',
    age: 'forever 18',
    xhr: req.xhr
  })
})


var server = app.listen(10889, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})