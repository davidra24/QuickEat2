var pg  = require('pg');
var conString = process.env.DATABASE_URL+'?ssl=true';
var client = new pg.Client(conString);
client.connect();
//--------------------- CATEGORIAS -------------------------
module.exports.obtenerCategoria = function obtenerCategoria(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "CATEGORIAS"', function(err, result) {
        if(err) {return console.error(err);}
         results.Categorias = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerCategoriaId = function obtenerCategoriaId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "CATEGORIAS" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.Categorias = result.rows;
         return res.json(results);
    });
};
module.exports.agregarCategoria = function agregarCategoria(req, res, next) {
	var nombre = req.param('nombre');
	var info = req.param('info');
	var subcat = req.param('subcat');
	var results = {};
	client.query('INSERT INTO public."CATEGORIAS" (nombre, info, sub_categoria) VALUES ("'+
		nombre + '", "' + info + '", "'+ subcat + '")').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarCategoria = function actualizarCategoria(req, res, next) {
	var id = req.param('id');
	var nombre = req.param('nombre');
	var info = req.param('info');
	var subcat = req.param('subcat');
	var results = {};
	client.query('UPDATE public."CATEGORIAS" SET nombre = "'+ nombre +'", '+
		'info = "' + info + '" sub_categoria = "'+ subcat +'" WHERE id =' + id).then(function () {
			res.status(200).json({
		          status: 'success',
		        });
		    }).catch(function (err) {
		    	client.done();
		      return next(err);
		    });
};
module.exports.eliminarCategoria = function eliminarCategoria(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."CATEGORIAS" where id =' + id).then(function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//------------------------ CARGOS ------------------------------
module.exports.obtenerCargos = function obtenerCargos(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "CARGO"', function(err, result) {
        if(err) {return console.error(err);}
         results.Cargos = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerCargosId = function obtenerCargosId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "CARGO" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
        results.Cargos = result.rows;
        return res.json(results);
    });
};
module.exports.agregarCargo = function agregarCargo(req, res, next) {
	var nombre = req.param('nombre');
	var info = req.param('info');
	var results = {};
	client.query('INSERT INTO public."CARGO" (nombre, info) VALUES ("'+
		nombre + '", "' + info + '")').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarCargo = function actualizarCargo(req, res, next) {
	var id = req.param('id');
	var nombre = req.param('nombre');
	var info = req.param('info');
	var results = {};
	client.query('UPDATE public."CARGO" SET nombre = "'+ nombre +'", '+
		'info = "' + info + '" WHERE id =' + id).then(function () {
			res.status(200).json({
		          status: 'success',
		        });
		    }).catch(function (err) {
		    	client.done();
		      return next(err);
		    });
};
module.exports.eliminarCargo = function eliminarCargo(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."CARGO" where id =' + id).then(function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//------------------------ CLIENTES ------------------------------
module.exports.obtenerClientes = function obtenerClientes(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "CLIENTES"', function(err, result) {
        if(err) {return console.error(err);}
         results.Clientes = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerClientesId = function obtenerClientesId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "CLIENTES" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.Clientes = result.rows;
         return res.json(results);
    });
};
module.exports.agregarCliente = function agregarCliente(req, res, next) {
	var info = req.param('info');
	var results = {};
	client.query('INSERT INTO public."CLIENTES" (info) VALUES ("' + info + '")'
			).catch(function (err) {
			return next(err);
		});
};
module.exports.agregarClienteId = function agregarClienteId(req, res, next) {
	var id = req.param('id');
	var info = req.param('info');
	var results = {};
	client.query('INSERT INTO public."CLIENTES" (id, info) VALUES (' +
		 id + ', "' + info + '")').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarCliente = function actualizarCliente(req, res, next) {
	var id = req.param('id');
	var info = req.param('info');
	var results = {};
	client.query('UPDATE public."CLIENTES" SET info = "' + info + '" WHERE id =' + id).then(function () {
			res.status(200).json({
		          status: 'success',
		        });
		    }).catch(function (err) {
		    	client.done();
		      return next(err);
		    });
};
module.exports.eliminarCliente = function eliminarCliente(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."CLIENTES" where id =' + id).then(function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//------------------------- COBRO PEDIDO ----------------------------
module.exports.obtenerCobroPedido = function obtenerCobroPedido(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "COBROPEDIDO"', function(err, result) {
        if(err) {return console.error(err);}
         results.CobroPedido = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerCobroPedidoId = function obtenerCobroPedidoId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "COBROPEDIDO" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.CobroPedido = result.rows;
         return res.json(results);
    });
};
module.exports.agregarCobroPedido = function agregarCobroPedido(req, res, next) {
	var id_cliente = req.param('id_cliente');
	var id_prc = req.param('id_prc');
	var info_cobro = req.param('info_cobro');
	var total = req.param('total');
	var id = id_cliente+id_prc;
	var results = {};
	client.query('INSERT INTO public."COBROPEDIDO" (id, id_cliente, id_prc, info_cobro, total)'+
			'VALUES ('+ id + ', ' + id_cliente + ', '+ id_prc +
			', "' + info_cobro +'", ' + total + ')').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarCobroPedido = function actualizarCobroPedido(req, res, next) {
	var id = req.param('id');
	var info_cobro = req.param('info_cobro');
	var cancelado = req.param('cancelado');
	var results = {};
	client.query('UPDATE public."COBROPEDIDO" SET info_cobro = "'+ info_cobro +'", '+
		'cancelado = "' + cancelado + '" WHERE id =' + id).then(function () {
			res.status(200).json({
		          status: 'success',
		        });
		    }).catch(function (err) {
		    	client.done();
		      return next(err);
		    });
};
module.exports.eliminarCobroPedido = function eliminarCobroPedido(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."COBROPEDIDO" where id =' + id).then(function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//------------------------ COMIDA CANTIDAD ------------------------------
module.exports.obtenerComidaCantidad = function obtenerComidaCantidad (req, res, next) {
	var results = {};
	client.query('SELECT * FROM "COMIDACANTIDAD"', function(err, result) {
        if(err) {return console.error(err);}
         results.ComidaCantidad = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerComidaCantidadId = function obtenerComidaCantidadId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "COMIDACANTIDAD" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.ComidaCantidad = result.rows;
         return res.json(results);
    });
};
module.exports.agregarComidaCantidad = function agregarComidaCantidad(req, res, next) {
	var id_restaurantecomida = req.param('id_restaurantecomida');
	var cantidad = req.param('cantidad');
	var info = req.param('info');
	var results = {};
	client.query('INSERT INTO public."COMIDACANTIDAD" (id_restaurantecomida, cantidad, info)'+
			'VALUES ('+ id_restaurantecomida + ', ' + cantidad + ', "'+ info +'")'
			).catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarComidaCantidad = function actualizarComidaCantidad(req, res, next) {
	var id = req.param('id');
	var id_restaurantecomida = req.param('id_restaurantecomida');
	var cantidad = req.param('cantidad');
	var info = req.param('info');
	var results = {};
	client.query('UPDATE public."COMIDACANTIDAD" SET id_restaurantecomida = '+ id_restaurantecomida +', '+
		'cantidad = ' + cantidad + ', info ="' + info + '" WHERE id =' + id).then(function () {
			res.status(200).json({
		          status: 'success',
		        });
		    }).catch(function (err) {
		    	client.done();
		      return next(err);
		    });
};
module.exports.eliminarComidaCantidad = function eliminarComidaCantidad(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."COMIDACANTIDAD" where id =' + id).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//--------------------------------- COMIDAS --------------------------------
module.exports.obtenerComidas = function obtenerComidas(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "COMIDAS"', function(err, result) {
        if(err) {return console.error(err);}
         results.Comidas = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerComidasId = function obtenerComidasId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "COMIDAS" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.Comidas = result.rows;
         return res.json(results);
    });
};
module.exports.agregarComida = function agregarComida(req, res, next) {
	var nombre = req.param('nombre');
	var info = req.param('info');
	var id_categoria = req.param('id_categoria');
	var results = {};
	client.query('INSERT INTO public."COMIDAS" (nombre, info)'+
			'VALUES ("'+ nombre + '", "' + info + '")'
			).catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarComida = function actualizarComida(req, res, next) {
	var id = req.param('id');
	var nombre = req.param('nombre');
	var info = req.param('info');
	var results = {};
	client.query('UPDATE public."COMIDAS" SET nombre = "'+ nombre +'", '+
		'info = "' + info + '" WHERE id =' + id
		).then(function () {
			res.status(200).json({
		          status: 'success',
		        });
		    }).catch(function (err) {
		    	client.done();
		      return next(err);
		    });
};
module.exports.eliminarComida = function eliminarComida(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."COMIDAS" where id =' + id).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//-------------------------------- EMPLEADOS ---------------------------------
module.exports.obtenerEmpleados = function obtenerEmpleados(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "EMPLEADOS"', function(err, result) {
        if(err) {return console.error(err);}
         results.Empleados = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerEmpleadosId = function obtenerEmpleadosId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "EMPLEADOS" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.Empleados = result.rows;
         return res.json(results);
    });
};
module.exports.agregarEmpleado = function agregarEmpleado(req, res, next) {
	var id = req.param('id');
	var nombre = req.param('nombre');
	var info = req.param('info');
	var results = {};
	client.query('INSERT INTO public."EMPLEADOS" (id, nombre, info)'+
			'VALUES ('+ id + ', "' + nombre + '", "'+ info +'")'
			).catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarEmpleado = function actualizarEmpleado(req, res, next) {
	var id = req.param('id');
	var nombre = req.param('nombre');
	var info = req.param('info');
	var results = {};
	client.query('UPDATE public."EMPLEADOS" SET nombre = '+ nombre +', '+
		'info = ' + info + '" WHERE id =' + id
		).then(function () {
			res.status(200).json({
		          status: 'success',
		        });
		    }).catch(function (err) {
		    	client.done();
		      return next(err);
		    });
};
module.exports.eliminarEmpleado = function eliminarEmpleado(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."EMPLEADOS" where id =' + id).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//------------------------ EMPLEADOS RESTAURANTES ------------------------------
module.exports.obtenerEmpleadosRestaurantes = function obtenerEmpleadosRestaurantes(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "EMPLEADOSRESTAURANTES"', function(err, result) {
        if(err) {return console.error(err);}
         results.Restaurantes = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerEmpleadosRestaurantesId = function obtenerEmpleadosRestaurantesId(req, res, next) {
	var id_restaurante = req.param('id_restaurante');
	var id_empleado = req.param('id_empleado');
	var results = {};
	client.query('SELECT * FROM "EMPLEADOSRESTAURANTES" WHERE id_empleado = ' + id_empleado +
			'AND id_restaurante='+id_restaurante, function(err, result) {
        if(err) {return console.error(err);}
         results.Restaurantes = result.rows;
         return res.json(results);
    });
};
module.exports.agregarEmpleadosRestaurantes = function agregarEmpleadosRestaurantes(req, res, next) {
	var id_restaurante = req.param('id_restaurante');
	var id_empleado = req.param('id_empleado');
	var id_cargo = req.param('id_cargo');
	var info = req.param('info');
	var salario = req.param('salario');
	var results = {};
	client.query('INSERT INTO public."EMPLEADOSRESTAURANTES" (id_restaurante,'+
			'id_empleado, id_cargo, info, salario)'+
			'VALUES (' + id_restaurante + ', ' + id_empleado + ',' + id_cargo + ', "'+
			info +'", '+ salario +')').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarEmpleadosRestaurantes = function actualizarEmpleadosRestaurantes(req, res, next) {
	var id_restaurante = req.param('id_restaurante');
	var id_empleado = req.param('id_empleado');
	var id_cargo = req.param('id_cargo');
	var info = req.param('info');
	var salario = req.param('salario');
	client.query('UPDATE public."EMPLEADOSRESTAURANTES" SET id_cargo = '+ id_cargo +', '+
		'info = "' + info + '" WHERE id_restarutante =' + id_restaurante +
		'AND id_empleado = ' + id_empleado).then(function () {
			res.status(200).json({
		          status: 'success',
		        });
		    }).catch(function (err) {
		    	client.done();
		      return next(err);
		    });
};
module.exports.eliminarEmpleadosRestaurantes = function eliminarEmpleadosRestaurantes(req, res, next) {
	var id_restaurante = req.param('id_restaurante');
	var id_empleado = req.param('id_empleado');
	var query = client.	query('DELETE FROM public."EMPLEADOSRESTAURANTES"'+ 
			'WHERE id_restarutante =' + id_restaurante +
			'AND id_empleado = ' + id_empleado).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//------------------------ INGREDIETE COMIDA ------------------------------8
module.exports.obtenerIngredienteComida = function obtenerIngredienteComida(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "INGREDIENTECOMIDA"', function(err, result) {
        if(err) {return console.error(err);}
         results.IngredienteComida = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerIngredienteComidaId = function obtenerIngredienteComidaId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "INGREDIENTECOMIDA" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.IngredienteComida = result.rows;
         return res.json(results);
    });
};
module.exports.agregarIngredienteComida = function agregarIngredienteComida(req, res, next) {
	var id_comida = req.param('id_comida');
	var id_ingrediente = req.param('id_ingrediente');
	var info = req.param('info');
	var id = (id_comida+id_ingrediente); 
	var results = {};
	client.query('INSERT INTO public."INGREDIENTECOMIDA" (id, id_comida, id_ingrediente, info)'+
			'VALUES (' + id + ', ' + id_comida + ',' + id_ingrediente + ', "' +
			 info +'")').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarIngredienteComida = function actualizarIngredienteComida(req, res, next) {
	var id = req.param('id');
	var info = req.param('info');
	client.query('UPDATE public."INGREDIENTECOMIDA" SET info = "'+ info +'", '+
		'info = ' + info + '" WHERE id =' + id
		).then(function () {
			res.status(200).json({
		          status: 'success',
		        });
		    }).catch(function (err) {
		    	client.done();
		      return next(err);
		    });
};
module.exports.eliminarIngredienteComida = function eliminarIngredienteComida(req, res, next) {
	var id_restaurante = req.param('id_restaurante');
	var id_empleado = req.param('id_empleado');
	var query = client.	query('DELETE FROM public."INGREDIENTECOMIDA"'+ 
			'WHERE id_restarutante =' + id_restaurante +
			'AND id_empleado = ' + id_empleado).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//------------------------ INGREDIENTES ------------------------------
module.exports.obtenerIngredientes = function obtenerIngredientes(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "INGREDIENTES"', function(err, result) {
        if(err) {return console.error(err);}
         results.Ingredientes = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerIngredienteId = function obtenerIngredienteId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "INGREDIENTES" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.Ingredientes = result.rows;
         return res.json(results);
    });
};
module.exports.agregarIngrediente = function agregarIngrediente(req, res, next) {
	var nombre = req.param('nombre');
	var info = req.param('info');
	var results = {};
	client.query('INSERT INTO public."INGREDIENTES" (nombre'+
			'info) VALUES ("' + nombre + '", "'+ info +'")').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarIngrediente = function actualizarIngrediente(req, res, next) {
	var id = req.param('id');
	var nombre = req.param('nombre');
	var info = req.param('info');
	client.query('UPDATE public."INGREDIENTES" SET nombre = "'+ nombre +'", '+
		'info = "' + info + '" WHERE id =' + id).then(function () {
		res.status(200).json({
			status: 'success',
			});
		}).catch(function (err) {
			client.done();
			return next(err);
	});
};
module.exports.eliminarIngrediente = function eliminarIngrediente(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."INGREDIENTES"'+ 
			'WHERE id =' + id).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//---------------------------- PEDIDOS -----------------------------------
module.exports.obtenerPedidos = function obtenerPedidos(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "PEDIDOS"', function(err, result) {
        if(err) {return console.error(err);}
         results.Pedidos = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerPedidosId = function obtenerPedidosId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "PEDIDOS" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.Pedidos = result.rows;
         return res.json(results);
    });
};
module.exports.agregarPedido = function agregarPedido(req, res, next) {
	var info = req.param('info');
	var results = {};
	client.query('INSERT INTO public."PEDIDOS" (info) VALUES ("' +
			info +'")').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarPedido = function actualizarPedido(req, res, next) {
	var id = req.param('id');
	var info = req.param('info');
	client.query('UPDATE public."PEDIDOS" SET info = "' + info + 
			'" WHERE id =' + id).then(function () {
		res.status(200).json({
			status: 'success',
			});
		}).catch(function (err) {
			client.done();
			return next(err);
	});
};
module.exports.eliminarPedido = function eliminarPedido(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."PEDIDOS"'+ 
			'WHERE id =' + id).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//------------------------ PEDIDOS COMIDA CANTIDAD ------------------------------
module.exports.obtenerPedidosComidaCantidad = function obtenerPedidosComidaCantidad(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "PEDIDOSCOMIDACANTIDAD"', function(err, result) {
        if(err) {return console.error(err);}
         results.PedidoComidaCantidad = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerPedidosComidaCantidadId = function obtenerPedidosComidaCantidadId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "PEDIDOSCOMIDACANTIDAD" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.PedidoComidaCantidad = result.rows;
         return res.json(results);
    });
};
module.exports.agregarPedidosComidaCantidad = function agregarPedidosComidaCantidad(req, res, next) {
	var id_pedido = req.param('id_pedido');
	var id_comidacantidad = req.param('id_comidacantidad');
	var info = req.param('info');
	var id = id_pedido+id_comidacantidad;
	var results = {};
	client.query('INSERT INTO public."PEDIDOSCOMIDACANTIDAD" (id, id_pedido, id_comidacantidad'+
			'info) VALUES (' + id +', ' + id_pedido + ','+ id_comidacantidad +
			', "'+ info +'")').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarPedidosComidaCantidad = function actualizarPedidosComidaCantidad(req, res, next) {
	var id = req.param('id');
	var info = req.param('info');
	client.query('UPDATE public."PEDIDOSCOMIDACANTIDAD" SET info = "'+ info +'", '+
		'" WHERE id =' + id).then(function () {
		res.status(200).json({
			status: 'success',
			});
		}).catch(function (err) {
			client.done();
			return next(err);
	});
};
module.exports.eliminarPedidosComidaCantidad = function eliminarPedidosComidaCantidad(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."PEDIDOSCOMIDACANTIDAD"'+ 
			'WHERE id =' + id).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//--------------------------------- PEDIDOS RESTAURANTES ------------------------------
module.exports.obtenerPedidosRestaurantes = function obtenerPedidosRestaurantes(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "PEDIDOSRESTAURANTES"', function(err, result) {
        if(err) {return console.error(err);}
         results.PedidoComidaCantidad = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerPedidosRestaurantesId = function obtenerPedidosRestaurantesId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "PEDIDOSRESTAURANTES" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.PedidoComidaCantidad = result.rows;
         return res.json(results);
    });
};
module.exports.agregarPedidosRestaurantes = function agregarPedidosRestaurantes(req, res, next) {
	var id_pedido = req.param('id_pedido');
	var id_restaurante = req.param('id_restaurante');
	var info = req.param('info');
	var id = id_pedido+id_restaurante;
	var results = {};
	client.query('INSERT INTO public."PEDIDOSRESTAURANTES" (id, id_pedido, id_restaurante'+
			'info) VALUES (' + id + ', ' + id_pedido + ', ' + id_restaurante + '"'+ info +'")').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarPedidosRestaurantes = function actualizarPedidosRestaurantes(req, res, next) {
	var id = req.param('id');
	var info = req.param('info');
	client.query('UPDATE public."PEDIDOSRESTAURANTES" SET info = "' + info + 
			'" WHERE id =' + id).then(function () {
		res.status(200).json({
			status: 'success',
			});
		}).catch(function (err) {
			client.done();
			return next(err);
	});
};
module.exports.eliminarPedidosRestaurantes = function eliminarPedidosRestaurantes(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."PEDIDOSRESTAURANTES"'+ 
			'WHERE id =' + id).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//-------------------------------- PREPARACION -----------------------------------
module.exports.obtenerPreparacion = function obtenerPreparacion(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "PREPARACION"', function(err, result) {
        if(err) {return console.error(err);}
         results.Preparacion = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerPreparacionId = function obtenerPreparacionId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "PREPARACION" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.Preparacion = result.rows;
         return res.json(results);
    });
};
module.exports.agregarPreparacion = function agregarPreparacion(req, res, next) {
	var id_ingredientecomida = req.param('id_ingredientecomida');
	var id_restaurante = req.param('id_restaurante');
	var cantidad = req.param('cantidad');
	var info = req.param('info');
	var results = {};
	client.query('INSERT INTO public."PREPARACION" (id_ingredientecomida, id_restaurante' +
			'cantidad, info) VALUES (' + id_ingredientecomida + ', '+ id_restaurante +', ' +
			cantidad +', "'+ info +'")').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarPreparacion = function actualizarPreparacion(req, res, next) {
	var id = req.param('id');
	var disponible = req.param('disponible');
	var info = req.param('info');
	client.query('UPDATE public."PREPARACION" SET disponible = '+ disponible +', ' +
		'info = "' + info + '" WHERE id =' + id).then(function () {
		res.status(200).json({
			status: 'success',
			});
		}).catch(function (err) {
			client.done();
			return next(err);
	});
};
module.exports.eliminarPreparacion = function eliminarPreparacion(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."PREPARACION"' + 
			'WHERE id =' + id).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//--------------------------------- RESTAURANTE COMIDA --------------------------------------
module.exports.obtenerRestauranteComida = function obtenerRestauranteComida(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "RESTAURANTECOMIDA"', function(err, result) {
        if(err) {return console.error(err);}
         results.RestauranteComida = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerRestauranteComidaId = function obtenerRestauranteComidaId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "RESTAURANTECOMIDA" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.RestauranteComida = result.rows;
         return res.json(results);
    });
};
module.exports.agregarRestauranteComida = function agregarRestauranteComida(req, res, next) {
	var id_restaurante = req.param('id_restaurante');
	var id_comida = req.param('id_comida');
	var disponible = req.param('disponible');
	var info = req.param('info');
	var precio = req.param('precio');
	var id_categoria = req.param('id_categoria');
	var id = id_restaurante+id_comida;
	var results = {};
	client.query('INSERT INTO public."RESTAURANTECOMIDA" (id, id_restaurante, id_comida' +
			'disponible, info, precio, id_categoria) VALUES (' + id + ', '+ id_restaurante +', ' + id_comida + ', "' +
			disponible + '", "' + info + '", ' + precio + ', ' + id_categoria + ')').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarRestauranteComida = function actualizarRestauranteComida(req, res, next) {
	var id = req.param('id');
	var disponible = req.param('disponible');
	var info = req.param('info');
	var precio = req.param('precio');
	client.query('UPDATE public."RESTAURANTECOMIDA" SET disponible = "'+ disponible +'", '+
		'info = "' + info + '", precio =' + precio + ' WHERE id =' + id).then(function () {
		res.status(200).json({
			status: 'success',
			});
		}).catch(function (err) {
			client.done();
			return next(err);
	});
};
module.exports.eliminarRestauranteComida = function eliminarRestauranteComida(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."RESTAURANTECOMIDA"'+ 
			'WHERE id =' + id).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};
//-------------------------------- RESTAURANTES ----------------------------------
module.exports.obtenerRestaurantes = function obtenerRestaurantes(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "RESTAURANTES"', function(err, result) {
        if(err) {return console.error(err);}
         results.Restaurantes = result.rows;
         return res.json(results);
    });
};
module.exports.obtenerRestaurantesId = function obtenerRestaurantesId(req, res, next) {
	var id = req.param('id');
	var results = {};
	client.query('SELECT * FROM "RESTAURANTES" WHERE ID = ' + id, function(err, result) {
        if(err) {return console.error(err);}
         results.Restaurantes = result.rows;
         return res.json(results);
	});
};
module.exports.agregarRestaurante = function agregarRestaurante(req, res, next) {
	var nombre = req.param('nombre');
	var info = req.param('info');
	var results = {};
	client.query('INSERT INTO public."RESTAURANTES" (nombre' +
			'info) VALUES ("' + nombre + '", "'+ info +'")').catch(function (err) {
			return next(err);
		});
};
module.exports.actualizarRestaurante = function actualizarRestaurante(req, res, next) {
	var id = req.param('id');
	var nombre = req.param('nombre');
	var info = req.param('info');
	client.query('UPDATE public."RESTAURANTES" SET nombre = "'+ nombre +'", '+
		'info = "' + info + '" WHERE id =' + id).then(function () {
		res.status(200).json({
			status: 'success',
			});
		}).catch(function (err) {
			client.done();
			return next(err);
	});
};
module.exports.eliminarRestaurante = function eliminarRestaurante(req, res, next) {
	var id = req.param('id');
	var query = client.	query('DELETE FROM public."RESTAURANTES"'+ 
			'WHERE id =' + id).then(
			function () {res.status(200).json({
          status: 'success',
        });
    }).catch(function (err) {
    	client.done();
      return next(err);
    });
};