const  express = require('express');
const OngController = require ('./controlers/OngController');
const IncidentController = require ('./controlers/IncidentController');


const routes = express.Router();

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index)

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;
