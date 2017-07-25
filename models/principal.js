var pg  = require('pg');
var conString = process.env.DATABASE_URL+'?ssl=true';
var client = new pg.Client(conString);
client.connect();
//--------------------- CATEGORIAS -------------------------
module.exports.obtenerCategoria = function obtenerCategoria(req, res, next) {
	var results = {};
	results.Categorias = [];
	client.query('SELECT * FROM "CATEGORIAS"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Categorias.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerCategoriaId = function obtenerCategoriaId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.Categorias = [];
	client.query('SELECT * FROM "CATEGORIAS" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Categorias.push(resultado);
         return res.json(results);
    });
};
//------------------------ CARGOS ------------------------------
module.exports.obtenerCargos = function obtenerCargos(req, res, next) {
	var results = {};
	results.Cargos = [];
	client.query('SELECT * FROM "CARGO"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Cargos.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerCargosId = function obtenerCargosId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.Cargos = [];
	client.query('SELECT * FROM "CARGO" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Cargos.push(resultado);
         return res.json(results);
    });
};
//------------------------ CLIENTES ------------------------------
module.exports.obtenerClientes = function obtenerClientes(req, res, next) {
	var results = {};
	results.Clientes = [];
	client.query('SELECT * FROM "CLIENTES"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Clientes.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerClientesId = function obtenerClientesId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.Clientes = [];
	client.query('SELECT * FROM "CLIENTES" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Clientes.push(resultado);
         return res.json(results);
    });
};
//------------------------- COBRO PEDIDO ----------------------------
module.exports.obtenerCobroPedido = function obtenerCobroPedido(req, res, next) {
	var results = {};
	results.CobroPedido = [];
	client.query('SELECT * FROM "COBROPEDIDO"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.CobroPedido.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerCobroPedidoId = function obtenerCobroPedidoId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.CobroPedido = [];
	client.query('SELECT * FROM "COBROPEDIDO" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.CobroPedido.push(resultado);
         return res.json(results);
    });
};
//------------------------ COMIDA CANTIDAD ------------------------------
module.exports.obtenerComidaCantidad = function obtenerComidaCantidad (req, res, next) {
	var results = {};
	results.ComidaCantidad = [];
	client.query('SELECT * FROM "COMIDACANTIDAD"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.ComidaCantidad.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerComidaCantidadId = function obtenerComidaCantidadId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.ComidaCantidad = [];
	client.query('SELECT * FROM "COMIDACANTIDAD" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.ComidaCantidad.push(resultado);
         return res.json(results);
    });
};
//------------------------ COMIDAS ------------------------------
module.exports.obtenerComidas = function obtenerComidas(req, res, next) {
	var results = {};
	results.Comidas = [];
	client.query('SELECT * FROM "COMIDAS"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Comidas.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerComidasId = function obtenerComidasId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.Comidas = [];
	client.query('SELECT * FROM "COMIDAS" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Comidas.push(resultado);
         return res.json(results);
    });
};
//------------------------ EMPLEADOS ------------------------------
module.exports.obtenerEmpleados = function obtenerEmpleados(req, res, next) {
	var results = {};
	results.Empleados = [];
	client.query('SELECT * FROM "EMPLEADOS"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Empleados.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerEmpleadosId = function obtenerEmpleadosId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.Empleados = [];
	client.query('SELECT * FROM "EMPLEADOS" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Empleados.push(resultado);
         return res.json(results);
    });
};
//------------------------ INGREDIETE COMIDA ------------------------------
module.exports.obtenerIngredienteComida = function obtenerIngredienteComida(req, res, next) {
	var results = {};
	results.IngredienteComida = [];
	client.query('SELECT * FROM "INGREDIENTECOMIDA"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.IngredienteComida.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerIngredienteComidaId = function obtenerIngredienteComidaId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.IngredienteComida = [];
	client.query('SELECT * FROM "INGREDIENTECOMIDA" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.IngredienteComida.push(resultado);
         return res.json(results);
    });
};
//------------------------ INGREDIENTES ------------------------------
module.exports.obtenerIngredientes = function obtenerIngredientes(req, res, next) {
	var results = {};
	results.Ingredientes = [];
	client.query('SELECT * FROM "INGREDIENTES"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Ingredientes.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerIngredientesId = function obtenerIngredientesId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.Ingredientes = [];
	client.query('SELECT * FROM "INGREDIENTES" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Ingredientes.push(resultado);
         return res.json(results);
    });
};
//---------------------------- PEDIDOS -----------------------------------
module.exports.obtenerPedidos = function obtenerPedidos(req, res, next) {
	var results = {};
	results.Pedidos = [];
	client.query('SELECT * FROM "PEDIDOS"', function obtenerPedidos(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Pedidos.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerPedidosId = function obtenerPedidosId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.Pedidos = [];
	client.query('SELECT * FROM "PEDIDOS" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Pedidos.push(resultado);
         return res.json(results);
    });
};
//------------------------ PEDIDOS COMIDA CANTIDAD ------------------------------
module.exports.obtenerPedidosComidaCantidad = function obtenerPedidosComidaCantidad(req, res, next) {
	var results = {};
	results.PedidoComidaCantidad = [];
	client.query('SELECT * FROM "PEDIDOSCOMIDACANTIDAD"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.PedidoComidaCantidad.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerPedidosRestaurantesClientesId = function obtenerPedidosRestaurantesClientesId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.PedidoComidaCantidad = [];
	client.query('SELECT * FROM "PEDIDOSCOMIDACANTIDAD" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.PedidoComidaCantidad.push(resultado);
         return res.json(results);
    });
};
//------------------------ PEDIDOS RESTAURANTES CLIENTES ------------------------------
module.exports.obtenerPedidosRestaurantesClientes = function(req, res, next) {
	var results = {};
	results.PedidoComidaCantidad = [];
	client.query('SELECT * FROM "PEDIDOSCOMIDACANTIDAD"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.PedidoComidaCantidad.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerPedidosRestaurantesClientesId = function obtenerPedidosRestaurantesClientesId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.PedidoComidaCantidad = [];
	client.query('SELECT * FROM "PEDIDOSCOMIDACANTIDAD" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.PedidoComidaCantidad.push(resultado);
         return res.json(results);
    });
};
//------------------------ PREPARACION ------------------------------
module.exports.obtenerPreparacion = function obtenerPreparacion(req, res, next) {
	var results = {};
	results.Preparacion = [];
	client.query('SELECT * FROM "PREPARACION"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Preparacion.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerPreparacionId = function obtenerPreparacionId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.Preparacion = [];
	client.query('SELECT * FROM "PREPARACION" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Preparacion.push(resultado);
         return res.json(results);
    });
};
//------------------------ RESTAURANTE COMIDA ------------------------------
module.exports.obtenerRestauranteComida = function RestauranteComida(req, res, next) {
	var results = {};
	results.RestauranteComida = [];
	client.query('SELECT * FROM "RESTAURANTECOMIDA"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.RestauranteComida.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerRestauranteComidaId = function obtenerRestauranteComidaId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.RestauranteComida = [];
	client.query('SELECT * FROM "RESTAURANTECOMIDA" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.RestauranteComida.push(resultado);
         return res.json(results);
    });
};
//------------------------ RESTAURANTES ------------------------------
module.exports.obtenerRestaurantes = function obtenerRestaurantes(req, res, next) {
	var results = {};
	results.Restaurantes = [];
	client.query('SELECT * FROM "RESTAURANTES"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Restaurantes.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerRestaurantesId = function obtenerRestaurantesId(req, res, next) {
	var id = req.param('id');
	var results = {};
	results.Restaurantes = [];
	client.query('SELECT * FROM "RESTAURANTES" WHERE ID = ' + id, function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Restaurantes.push(resultado);
         return res.json(results);
    });
};