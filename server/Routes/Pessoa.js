/* Importação */
const { geratorRouter } = require("./geratorRouter");
const { PessoaController } = require("../Controller");
const { Pessoa } = require("../class");

/* Construção de rota */
const routerPessoa = geratorRouter(
  PessoaController,
  "PessoaController",
  Pessoa,
  "pessoa"
);

/* Exportação */
module.exports = { routerPessoa };
