/* Importação */
const { validationVar } = require("../Validations");
const { error } = require("../Others");

/* Declaração de função */

/* Consulta registro com id do parametro de entrada */
async function findByPk(model, codigo) {
  try {
    if (validationVar(model, "model") && validationVar(codigo, "codigo"))
      return await model.findByPk(codigo);
  } catch (e) {
    return error(e);
  }
}

/* Exportação */
module.exports = { findByPk };
