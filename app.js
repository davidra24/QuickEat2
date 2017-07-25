
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

var models = require('./models/principal.js')
app.get('/obtenerCategoria', models.obtenerCategoria);
app.get('/obtenerCargos', models.obtenerCargos);
app.get('/obtenerClientes', models.obtenerClientes);
app.get('/obtenerCobroPedido', models.obtenerCobroPedido);
app.get('/obtenerComidaCantidad', models.obtenerComidaCantidad);
app.get('/obtenerComidas', models.obtenerComidas);
app.get('/obtenerEmpleados', models.obtenerEmpleados);
app.get('/obtenerIngredienteComida', models.obtenerIngredienteComida);
app.get('/obtenerIngredientes', models.obtenerIngredientes);
app.get('/obtenerPedidos', models.obtenerPedidos);
app.get('/obtenerPedidosComidaCantidad', models.obtenerPedidosComidaCantidad);
app.get('/obtenerPredidosRestaurantesClientes', models.obtenerPedidosRestaurantesClientes);
app.get('/obtenerPreparacion', models.obtenerPreparacion);
app.get('/obtenerRestauranteComida', models.obtenerRestauranteComida);
app.get('/obtenerRestaurantes', models.obtenerRestaurantes);
