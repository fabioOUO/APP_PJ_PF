/* Importação */
const { validationVar } = require("../Validations");
const { error } = require("../Others");
const { registerLogger } = require("../log");

/* Declaração de função */

/* deleta um registro com o codigo do parametro */
async function del(model, codigo) {
  try {
    if (validationVar(model, "model") && validationVar(codigo, "codigo")) {
      const REGISTER = await model.findByPk(codigo);
      if (REGISTER !== null) {
        REGISTER.destroy();
        registerLogger("info", REGISTER, "deletado");
        return [{ status: "ok", message: "Registro deletado." }];
      } else return [{ message: "Nenhum registro encontrado." }];
    }
  } catch (e) {
    return error(e, undefined);
  }
}

/* Exportação */
module.exports = { del };
