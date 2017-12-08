var express = require('express')
var app = express()

app.use(express.static('public'));

app.get('/getUser', function (req, res) {
  res.send({
    server: 10888,
    name: 'kedaya',
    age: 'forever 18'
  })
})


var server = app.listen(10888, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})