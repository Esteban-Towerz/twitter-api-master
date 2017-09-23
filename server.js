"use strict";

const express = require('express');
const jade = require('jade');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const app = express();

// Serve static file
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// must use cookieParser before expressSession
app.use(cookieParser());

// View Engine setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

// Handle route
app.use('/', router);

// Assign port
app.set('port', process.env.PORT || 3000);

// Listen port
app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' + app.get('port') +
		'; press Ctrl-C to terminate');
});
