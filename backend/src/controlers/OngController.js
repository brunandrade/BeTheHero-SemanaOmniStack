const connection = require('../database/connection');
const  crypto = require('crypto');
const emailService = require ('../Services/EmailService');

module.exports={

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
    const {name, email, whatsapp, city, uf} = request.body; // Metdo POST para cadastro, request.body para trazer o corpo da requisição
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name, 
        email, 
        whatsapp,
        city, 
        uf,
    })

    emailService.send(email, id);
    return response.json({ id });
        
    },


};

