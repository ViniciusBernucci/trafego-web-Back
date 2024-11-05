const {DataTypes} = require('sequelize');

const db = require('../db/conn.js');
const User = require('../models/User');


const Produtos = db.define('Produtos', {
    produto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    val: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

})

module.exports = Produtos;