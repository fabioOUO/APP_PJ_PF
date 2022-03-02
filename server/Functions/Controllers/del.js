/* Importação */
const { validationVar } = require("../Validations");
const { error, connectionError } = require("../Others");
const { findByPk } = require("../Controllers/findByPk");

/* Declaração de função */

/* deleta um registro com o codigo do parametro */
async function del(model, codigo) {
  try {
    if (validationVar(model, "model") && validationVar(codigo, "codigo")) {
      const REGISTER = await model.findByPk(codigo);
      if (REGISTER !== null) return await REGISTER.destroy();
      else return [];
    }
  } catch (e) {
    return error(e, undefined);
  }
}

/* Exportação */
module.exports = { del };
