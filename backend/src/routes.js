const express = require('express');

const sessionsController = require('./controller/sessionsController');
const ongController      = require('./controller/ongController');
const profileController  = require('./controller/profileController');
const incidentController = require('./controller/incidentController');

const routes = express.Router();

/**
 * Rotas/Recursos
 */

/**
  * Metodo HTTP:
  * 
  * GET: Buscar uma informação do back-end.
  * POST: Criar informações no back-end.
  * PUT: Alterar uma informação no back-end.
  * DELETE: Deletar uma informação no back-end.
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Pârametros enviados na rota após o "?" (Filtro,Paginação)
 * Route Params: Pârametros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */


/**
 * SQL: MySQl, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * noSQL: MongoDB, CouchDB etc
 */
routes.post('/sessions', sessionsController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;