/* Importação */
const { validationVar } = require("../Validations");
const { error } = require("../Others");

/* Declaração de função */

/* Consulta registro com id do parametro de entrada */
async function findByPk(model, codigo) {
  try {
    if (validationVar(model, "model") && validationVar(codigo, "codigo")) {
      const REGISTER = await model.findByPk(codigo);
      if (REGISTER !== null) return await REGISTER.destroy();
      else return [];
    }
  } catch (e) {
    return error(e);
  }
}

/* Exportação */
module.exports = { findByPk };
