/* Importação */
const { Controller } = require("../Class");
const { PessoaModel } = require("../Model");

/* Instanciação de class */
const PessoaController = new Controller(PessoaModel);

/* Exportação */
module.exports = { PessoaController };
