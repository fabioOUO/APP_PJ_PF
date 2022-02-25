/* Importação */
const { Controller } = require("../Class");
const { TelefoneModel } = require("../Model");

/* Instanciação de class */
const TelefoneController = new Controller(TelefoneModel);

/* Exportação */
module.exports = { TelefoneController };
