var pg  = require('pg');
var conString = process.env.DATABASE_URL+'?ssl=true';
var client = new pg.Client(conString);
client.connect();
module.exports.obtenerCategoria = function(req, res, next) {
	var results = {};
	results.Categorias = [];
	client.query('SELECT * FROM "CATEGORIAS"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Categorias.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerCargos = function(req, res, next) {
	var results = {};
	results.Cargos = [];
	client.query('SELECT * FROM "CARGO"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Cargos.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerClientes = function(req, res, next) {
	var results = {};
	results.Clientes = [];
	client.query('SELECT * FROM "CLIENTES"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Clientes.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerCobroPedido = function(req, res, next) {
	var results = {};
	results.CobroPedido = [];
	client.query('SELECT * FROM "COBROPEDIDO"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.CobroPedido.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerComidaCantidad = function(req, res, next) {
	var results = {};
	results.ComidaCantidad = [];
	client.query('SELECT * FROM "COMIDACANTIDAD"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.ComidaCantidad.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerComidas = function(req, res, next) {
	var results = {};
	results.Comidas = [];
	client.query('SELECT * FROM "COMIDAS"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Comidas.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerEmpleados = function(req, res, next) {
	var results = {};
	results.Empleados = [];
	client.query('SELECT * FROM "EMPLEADOS"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Empleados.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerCargo = function(req, res, next) {
	var results = {};
	results.Clientes = [];
	client.query('SELECT * FROM "CLIENTES"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Clientes.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerIngredienteComida = function(req, res, next) {
	var results = {};
	results.IngredienteComida = [];
	client.query('SELECT * FROM "INGREDIENTECOMIDA"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.IngredienteComida.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerIngredientes = function(req, res, next) {
	var results = {};
	results.Ingredientes = [];
	client.query('SELECT * FROM "INGREDIENTES"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Ingredientes.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerPedidos = function(req, res, next) {
	var results = {};
	results.Pedidos = [];
	client.query('SELECT * FROM "PEDIDOS"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Pedidos.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerPedidosComidaCantidad = function(req, res, next) {
	var results = {};
	results.PedidoComidaCantidad = [];
	client.query('SELECT * FROM "PEDIDOSCOMIDACANTIDAD"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.PedidoComidaCantidad.push(resultado);
         return res.json(results);
    });
};
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
module.exports.obtenerPreparacion = function(req, res, next) {
	var results = {};
	results.Preparacion = [];
	client.query('SELECT * FROM "PREPARACION"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Preparacion.push(resultado);
         return res.json(results);
    });
};
module.exports.obtenerRestauranteComida = function(req, res, next) {
	var results = {};
	results.RestauranteComida = [];
	client.query('SELECT * FROM "RESTAURANTECOMIDA"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.RestauranteComida.push(resultado);
         return res.json(results);
    });
}; 
module.exports.obtenerRestaurantes = function(req, res, next) {
	var results = {};
	results.Restaurantes = [];
	client.query('SELECT * FROM "RESTAURANTES"', function(err, result) {
        if(err) return console.error(err);
         var resultado = (result.rows);
         results.Restaurantes.push(resultado);
         return res.json(results);
    });
};

