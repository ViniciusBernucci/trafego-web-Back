const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);


//Verifica a conexão com o banco
try {
    sequelize.authenticate()
    console.log('Authenticated successfully.')
}catch(err) {
    console.error('Não foi possível conectar', err)
}

module.exports = sequelize


