/* Importação */
const { validationVar } = require("../Validations");
const { error, connectionError } = require("../Others");
const { findByPk } = require("../Controllers/findByPk");

/* Declaração de função */

/* deleta um registro com o id do parametro */
async function del(model, id) {
  try {
    if (validationVar(model, "model") && validationVar(id, "id")) {
      const REGISTER = await findByPk(model, id);
      if (REGISTER.name === "ConnectionError") throw connectionError();
      if (validationVar(REGISTER, "REGISTER") && !(REGISTER instanceof Error))
        return await REGISTER.destroy();
    }
  } catch (e) {
    return error(e, undefined);
  }
}

/* Exportação */
module.exports = { del };
