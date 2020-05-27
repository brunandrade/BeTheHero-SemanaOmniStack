
const nodemailer = require("nodemailer");

module.exports={
    send(email, id){

        let transporter = nodemailer.createTransport({
            host: "smtp.umbler.com",
            port: 587,
            secure: false,
            auth: {
                user : "contato@divvi.com.br",
                pass: "!passnot123456789"
            }
         });
         
         transporter.sendMail({
             from:"Be the Hero <contato@divvi.com.br>",
             to: `${email}`,
             subject: "Seu Cadastro foi realizado com Sucesso!!",            
             html: `A sua ONG foi cadastrada no  Be The Hero!! O seu ID de entrada é <strong> ${id} </strong>`
         
         }).then(message => {
             console.log(message)
         }).catch(err =>{
             console.log(err);
         })

         console.log(email, id);
    }
}
