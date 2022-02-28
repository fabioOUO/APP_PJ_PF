/* Importação */
const { geratorRouter } = require("./geratorRouter");
const { PessoaFisicaController } = require("../Controller");
const { PessoaFisica } = require("../class");

/* Construção de rota */
const routerPessoaFisica = geratorRouter(
  PessoaFisicaController,
  "PessoaFisicaController",
  PessoaFisica,
  "pessoaFisica"
);

/* Exportação */
module.exports = { routerPessoaFisica };
