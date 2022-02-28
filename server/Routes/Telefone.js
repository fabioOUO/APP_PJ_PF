/* Importação */
const { geratorRouter } = require("./geratorRouter");
const { TelefoneController } = require("../Controller");
const { Telefone } = require("../class");

/* Construção de rota */
const routerTelefone = geratorRouter(
  TelefoneController,
  "TelefoneController",
  Telefone,
  "telefone"
);

/* Exportação */
module.exports = { routerTelefone };
