/* Importação */
const { geratorRouter } = require("./geratorRouter");
const { GrupoController } = require("../Controller");
const { Grupo } = require("../class");

/* Construção de rota */
const routerGrupo = geratorRouter(
  GrupoController,
  "GrupoController",
  Grupo,
  "grupo"
);

/* Exportação */
module.exports = { routerGrupo };
