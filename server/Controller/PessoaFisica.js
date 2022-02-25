/* Importação */
const { Controller } = require("../Class");
const { PessoaFisicaModel } = require("../Model");

/* Instanciação de class */
const PessoaFisicaController = new Controller(PessoaFisicaModel);

/* Exportação */
module.exports = { PessoaFisicaController };
