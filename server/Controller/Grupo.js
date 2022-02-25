/* Importação */
const { Controller } = require("../Class");
const { GrupoModel } = require("../Model");

/* Instanciação de class */
const GrupoController = new Controller(GrupoModel);

/* Exportação */
module.exports = { GrupoController };
