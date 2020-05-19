const  express = require('express');

const routes = express.Router();

routes.get('/users', (request, response)=>{
    // return response.send('Hello World!')
    
        return response.json({
            evento:'Semana OmniStack 11.0',
            aluno: 'Bruna Andradeee'
        });
    });

module.exports = routes;
