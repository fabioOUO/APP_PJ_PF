/* Importação */
const { geratorRouter } = require("./geratorRouter");
const { PessoaJuridicaController } = require("../Controller");
const { PessoaJuridica } = require("../class");

/* Construção de rota */
const routerPessoaJuridica = geratorRouter(
  PessoaJuridicaController,
  "PessoaJuridicaController",
  PessoaJuridica,
  "pessoaJuridica"
);

/* Exportação */
module.exports = { routerPessoaJuridica };
