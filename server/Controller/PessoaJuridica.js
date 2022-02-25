/* Importação */
const { Controller } = require("../Class");
const { PessoaJuridicaModel } = require("../Model");

/* Instanciação de class */
const PessoaJuridicaController = new Controller(PessoaJuridicaModel);

/* Exportação */
module.exports = { PessoaJuridicaController };
