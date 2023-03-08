const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo",'root','', {host:"localhost",dialect:"mysql"})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(error){
    console.log("falha ao conectar "+error)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{type: Sequelize.STRING},
    endereco:{type: Sequelize.STRING},
    bairro:{type: Sequelize.STRING},
    cep:{type: Sequelize.INTEGER},
    cidade:{type: Sequelize.STRING},
    estado:{type: Sequelize.STRING},
    observacao:{type: Sequelize.STRING}
})
Agendamentos.sync({force:true})

Agendamentos.create({
    nome: "Jeferson Roberto da Lima",
    endereco:"Av aguia de Haia",
    bairro:"Artur Alvim", 
    cep:012345645,
    cidade:"São paulo",
    estado:"São Paulo",
    observacao:"---"
})
