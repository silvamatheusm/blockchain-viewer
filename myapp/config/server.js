var express 	 = require('express');
var bodyParser   = require('body-parser');
var load 		= require('express-load');
var app 		= express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));
// error handler

load('controllers')
	.then('routes')
	.into(app);

module.exports =app;