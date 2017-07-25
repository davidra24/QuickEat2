
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
//--------------------- CATEGORIAS -------------------------
app.get('/obtenerCategoria', models.obtenerCategoria);
app.get('/obtenerCategoriaId', models.obtenerCategoriaId);
//----------------------- CARGOS -----------------------------
app.get('/obtenerCargos', models.obtenerCargos);
app.get('/obtenerCargosId', models.obtenerCargosId);
//------------------------ CLIENTES ------------------------------
app.get('/obtenerClientes', models.obtenerClientes);
app.get('/obtenerClientesId', models.obtenerClientesId);
//------------------------- COBRO PEDIDO ----------------------------
app.get('/obtenerCobroPedido', models.obtenerCobroPedido);
app.get('/obtenerCobroPedidoId', models.obtenerCobroPedidoId);
//------------------------ COMIDA CANTIDAD ------------------------------
app.get('/obtenerComidaCantidad', models.obtenerComidaCantidad);
app.get('/obtenerComidaCantidadId', models.obtenerComidaCantidadId);
//------------------------ COMIDAS ------------------------------
app.get('/obtenerComidas', models.obtenerComidas);
app.get('/obtenerComidasId', models.obtenerComidasId);
//------------------------ EMPLEADOS ------------------------------
app.get('/obtenerEmpleados', models.obtenerEmpleados);
app.get('/obtenerEmpleadosId', models.obtenerEmpleadosId);
//------------------------ INGREDIETE COMIDA ------------------------------
app.get('/obtenerIngredienteComida', models.obtenerIngredienteComida);
app.get('/obtenerIngredienteComidaId', models.obtenerIngredienteComidaId);
//------------------------ INGREDIENTES ------------------------------
app.get('/obtenerIngredientes', models.obtenerIngredientes);
app.get('/obtenerIngredientesId', models.obtenerIngredientesId);
//---------------------------- PEDIDOS -----------------------------------
app.get('/obtenerPedidos', models.obtenerPedidos);
app.get('/obtenerPedidosId', models.obtenerPedidosId);
//------------------------ PEDIDOS COMIDA CANTIDAD ------------------------------
app.get('/obtenerPedidosComidaCantidad', models.obtenerPedidosComidaCantidad);
app.get('/obtenerPedidosComidaCantidadId', models.obtenerPedidosComidaCantidadId);
//------------------------ PEDIDOS RESTAURANTES CLIENTES ------------------------------
app.get('/obtenerPredidosRestaurantesClientes', models.obtenerPedidosRestaurantesClientes);
app.get('/obtenerPredidosRestaurantesClientesId', models.obtenerPedidosRestaurantesClientesId);
//------------------------ PREPARACION ------------------------------
app.get('/obtenerPreparacion', models.obtenerPreparacion);
app.get('/obtenerPreparacionId', models.obtenerPreparacionId);
//------------------------ RESTAURANTE COMIDA ------------------------------
app.get('/obtenerRestauranteComida', models.obtenerRestauranteComida);
app.get('/obtenerRestauranteComidaId', models.obtenerRestauranteComidaId);
//------------------------ RESTAURANTES ------------------------------
app.get('/obtenerRestaurantes', models.obtenerRestaurantes);
app.get('/obtenerRestaurantesId', models.obtenerRestaurantesId);
