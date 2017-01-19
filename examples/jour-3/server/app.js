var bodyParser = require('body-parser')
var express = require('express')
var app = express()


app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, AccessToken")
	if (req.method == 'OPTIONS')
		return res.sendStatus(200)
	return next()
})

var miniAPI = require('./mini-api.js').init(app)

var port = 1338
console.log('listen', port)
app.listen(port)