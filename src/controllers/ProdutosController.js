const sequelize = require('../db/conn'); // Caminho correto para a instância sequelize

const Metricas = require('../models/Metricas');
const User = require('../models/User');
const Produto = require('../models/Produto');

module.exports = class ProdutosController {
    static async showProdutos(req,res) {
        res.render('metricas/produtos');
    }
}