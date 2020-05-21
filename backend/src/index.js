const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/*
* Métodos HTTP:
*
* GET: Buscar/Listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELTE: Deletar uma informação no back-end
*/


/*
* Tipos de parâmetros:
*
* Query: Parâmetros nomeados enviados na rota após "?" (Filtros/Paginação)
* Route Params: Utilizados para identificar recursos
* Request Body: 
*/

/*
* Tipos de parâmetros:
*
* Query: Parâmetros nomeados enviados na rota após "?" (Filtros/Paginação)
* Route Params: Utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizando para criar ou alterar recursos
*/




app.listen(3333); 