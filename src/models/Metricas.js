const {DataTypes} = require('sequelize');

const db = require('../db/conn.js');
const User = require('../models/User');


const Metricas = db.define('Metricas', {
    data_1: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    invest: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    sales: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Metricas;