const sequelize = require('../db/conn'); // Caminho correto para a instância sequelize

const Metricas = require('../models/Metricas');
const User = require('../models/User');

module.exports = class MetricasController {
    static async showMetricas(req,res) {
        res.render('metricas/home');
    }
}