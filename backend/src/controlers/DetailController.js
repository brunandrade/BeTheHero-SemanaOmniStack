const connection = require('../database/connection');

module.exports={
    async index(request, response){
        const ong_id = request.headers.authorization;

        const ong = await connection('ongs')
        .where('id', ong_id)
        .select('name', 'email', 'whatsapp', 'city', 'uf');

        return response.json(ong);
    }
}