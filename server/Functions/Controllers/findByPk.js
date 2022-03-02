/* Importação */
const { validationVar } = require("../Validations");
const { error } = require("../Others");
const { registerLogger } = require("../log");

/* Declaração de função */

/* Consulta registro com id do parametro de entrada */
async function findByPk(model, codigo) {
  try {
    if (validationVar(model, "model") && validationVar(codigo, "codigo")) {
      const REGISTER = await model.findByPk(codigo);
      if (REGISTER !== null) {
        registerLogger("info", REGISTER, "consultado");
        REGISTER.status = "ok";
        return REGISTER;
      } else return [{ message: "Nenhum registro encontrado." }];
    }
  } catch (e) {
    return error(e);
  }
}

/* Exportação */
module.exports = { findByPk };
