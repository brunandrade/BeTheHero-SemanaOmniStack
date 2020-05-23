const  express = require('express');
const OngController = require ('./controlers/OngController');
const IncidentController = require ('./controlers/IncidentController');
const ProfileController = require ('./controlers/ProfileController');
const SessionController = require ('./controlers/SessionController');
const DetailController = require ('./controlers/DetailController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);
routes.get('/detail', DetailController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;
