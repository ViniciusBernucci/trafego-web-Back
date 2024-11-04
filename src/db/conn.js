const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('campanhas-web', 'root', '', {   // Nome do banco e usuário
    host: 'localhost',
    dialect: 'mysql',

})


//Verifica a conexão com o banco
try {
    sequelize.authenticate()
    console.log('Authenticated successfully.')
}catch(err) {
    console.error('Não foi possível conectar', err)
}

module.exports = sequelize


