
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
var pg  = require('pg');
var conString   = process.env.DATABASE_URL;
var client = new pg.Client(conString);
client.connect();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/obtenerCategoria', function (req, res, next) {
	var results = {};
	results.Categorias = [];
		var query = client.query('SELECT * FROM CATEGORIAS');
	    query.on('row', function (row){
	      results.Categorias.push(row);
	    });
	    query.on('end', function (){
	      return res.json(results);
	    });
});

