const connection = require('../database/connection');
const  crypto = require('crypto');

module.exports={
    async create(request, response){
        const {name, email, password} = request.body; 
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('admins').insert({        
            name, 
            email, 
            password
        })
    
        return response.json({ id });
    },

    async ongList(request, response){
        const ongs = await connection('ongs').select('*');    
        return response.json(ongs);
    },

    async incidentsList(request, response){
        const ongs = await connection('incidents').select('*');    
        return response.json(ongs);
    },

    async detail(request, response) {
        //const { id } = request.params;
        const ong_id = request.headers.authorization;
    
        // const infos = await connection('incidents')
        // .join('ongs', 'ongs.id', '=','incidents.ong_id')
        // .select(['incidents.*', 
        //   'ongs.name', 
        //   'ongs.email', 
        //   'ongs.whatsapp', 
        //   'ongs.city', 
        //   'ongs.uf'])
        //   .where('ongs.id', ong_id)

          const info = await connection('ongs')
          .join('incidents', 'incidents.ong_id', '=','ongs.id')
          .select(['ongs.*', 
            'incidents.title', 
            'incidents.description' ,
            'incidents.value',])
            .where('ongs.id', ong_id)
            //.groupBy('ongs.id')



          return response.json(info);          

      }
}