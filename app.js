
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
app.use(allowCrossDomain)
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
var models = require('./models/principal.js');
//--------------------- CATEGORIAS -------------------------
app.get('/obtenerCategoria', models.obtenerCategoria);
app.get('/obtenerCategoriaId', models.obtenerCategoriaId);
app.get('/agregarCategoria', models.agregarCategoria);
app.get('/actualizarCategoria', models.actualizarCategoria);
app.get('/eliminarCategoria', models.eliminarCategoria);
//----------------------- CARGOS -----------------------------
app.get('/obtenerCargos', models.obtenerCargos);
app.get('/obtenerCargosId', models.obtenerCargosId);
app.get('/agregarCargo', models.agregarCargo);
app.get('/actualizarCargo', models.actualizarCargo);
app.get('/eliminarCargo', models.eliminarCargo);
//------------------------ CLIENTES ------------------------------
app.get('/obtenerClientes', models.obtenerClientes);
app.get('/obtenerClientesId', models.obtenerClientesId);
app.get('/agregarCliente', models.agregarCliente);
app.get('/agregarClienteId', models.agregarClienteId);
app.get('/actualizarCliente', models.actualizarCliente);
app.get('/eliminarCliente', models.eliminarCliente);
//------------------------- COBRO PEDIDO ----------------------------
app.get('/obtenerCobroPedido', models.obtenerCobroPedido);
app.get('/obtenerCobroPedidoId', models.obtenerCobroPedidoId);
app.get('/agregarCobroPedido', models.agregarCobroPedido);
app.get('/actualizarCobroPedido', models.actualizarCobroPedido);
app.get('/eliminarCobroPedido', models.eliminarCobroPedido);
//-------------------- COMIDA CANTIDAD -------------------------
app.get('/obtenerComidaCantidad', models.obtenerComidaCantidad);
app.get('/obtenerComidaCantidadId', models.obtenerComidaCantidadId);
app.get('/agregarComidaCantidad', models.agregarComidaCantidad);
app.get('/actualizarComidaCantidad', models.actualizarComidaCantidad);
app.get('/eliminarComidaCantidad', models.eliminarComidaCantidad);
//------------------------ COMIDAS ------------------------------
app.get('/obtenerComidas', models.obtenerComidas);
app.get('/obtenerComidasId', models.obtenerComidasId);
app.get('/agregarComida', models.agregarComida);
app.get('/actualizarComida', models.actualizarComida);
app.get('/eliminarComida', models.eliminarComida);
//------------------------ EMPLEADOS ------------------------------
app.get('/obtenerEmpleados', models.obtenerEmpleados);
app.get('/obtenerEmpleadosId', models.obtenerEmpleadosId);
app.get('/agregarEmpleado', models.agregarEmpleado);
app.get('/actualizarEmpleado', models.actualizarEmpleado);
app.get('/eliminarEmpleado', models.eliminarEmpleado);
//---------------------- EMPLEADOS RESTAURANTES ---------------------------
app.get('/obtenerEmpleadosRestaurantes', models.obtenerEmpleadosRestaurantes);
app.get('/obtenerEmpleadosRestaurantesId', models.obtenerEmpleadosRestaurantesId);
app.get('/agregarEmpleadosRestaurantes', models.agregarEmpleadosRestaurantes);
app.get('/actualizarEmpleadosRestaurantes', models.actualizarEmpleadosRestaurantes);
app.get('/eliminarEmpleadosRestaurantes', models.eliminarEmpleadosRestaurantes);
//------------------------ INGREDIETE COMIDA ------------------------------
app.get('/obtenerIngredienteComida', models.obtenerIngredienteComida);
app.get('/obtenerIngredienteComidaId', models.obtenerIngredienteComidaId);
app.get('/agregarIngredienteComida', models.agregarIngredienteComida);
app.get('/actualizarIngredienteComida', models.actualizarIngredienteComida);
app.get('/eliminarIngredienteComida', models.eliminarIngredienteComida);
//-------------------------- INGREDIENTES --------------------------------
app.get('/obtenerIngredientes', models.obtenerIngredientes);
app.get('/obtenerIngredienteId', models.obtenerIngredienteId);
app.get('/agregarIngrediente', models.agregarIngrediente);
app.get('/actualizarIngrediente', models.actualizarIngrediente);
app.get('/eliminarIngrediente', models.eliminarIngrediente);
//---------------------------- PEDIDOS -----------------------------------
app.get('/obtenerPedidos', models.obtenerPedidos);
app.get('/obtenerPedidosId', models.obtenerPedidosId);
app.get('/agregarPedido', models.agregarPedido);
app.get('/actualizarPedido', models.actualizarPedido);
app.get('/eliminarPedido', models.eliminarPedido);
//------------------------ PEDIDOS COMIDA CANTIDAD ------------------------------
app.get('/obtenerPedidosComidaCantidad', models.obtenerPedidosComidaCantidad);
app.get('/obtenerPedidosComidaCantidadId', models.obtenerPedidosComidaCantidadId);
app.get('/agregarPedidosComidaCantidad', models.agregarPedidosComidaCantidad);
app.get('/actualizarPedidosComidaCantidad', models.actualizarPedidosComidaCantidad);
app.get('/eliminarPedidosComidaCantidad', models.eliminarPedidosComidaCantidad);
//----------------------------- PEDIDOS RESTAURANTES ----------------------------------
app.get('/obtenerPedidosRestaurantes', models.obtenerPedidosRestaurantes);
app.get('/obtenerPedidosRestaurantesId', models.obtenerPedidosRestaurantesId);
app.get('/agregarPedidosRestaurantes', models.agregarPedidosRestaurantes);
app.get('/actualizarPedidosRestaurantes', models.actualizarPedidosRestaurantes);
app.get('/eliminarPedidosRestaurantes', models.eliminarPedidosRestaurantes);
//------------------------------- PREPARACION ---------------------------------
app.get('/obtenerPreparacion', models.obtenerPreparacion);
app.get('/obtenerPreparacionId', models.obtenerPreparacionId);
app.get('/agregarPreparacion', models.agregarPreparacion);
app.get('/actualizarPreparacion', models.actualizarPreparacion);
app.get('/eliminarPreparacion', models.eliminarPreparacion);
//------------------------ RESTAURANTE COMIDA ------------------------------
app.get('/obtenerRestauranteComida', models.obtenerRestauranteComida);
app.get('/obtenerRestauranteComidaId', models.obtenerRestauranteComidaId);
app.get('/agregarRestauranteComida', models.agregarRestauranteComida);
app.get('/actualizarRestauranteComida', models.actualizarRestauranteComida);
app.get('/eliminarRestauranteComida', models.eliminarRestauranteComida);
//------------------------ RESTAURANTES ------------------------------
app.get('/obtenerRestaurantes', models.obtenerRestaurantes);
app.get('/obtenerRestaurantesId', models.obtenerRestaurantesId);
app.get('/agregarRestaurante', models.agregarRestaurante);
app.get('/actualizarRestaurante', models.actualizarRestaurante);
app.get('/eliminarRestaurante', models.eliminarRestaurante);
