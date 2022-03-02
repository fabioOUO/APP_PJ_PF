/* Importação */
const { validationVar } = require("../Validations");
const { error } = require("../Others");
const { registerLogger } = require("../log");

/* Declaração de função */

/* Cria novo registro na tabela */
async function create(model, newRegister) {
  try {
    if (
      validationVar(model, "model") &&
      validationVar(newRegister, "newRegister")
    ) {
      const REGISTER = await model.create(newRegister);
      if (REGISTER !== null) {
        registerLogger("info", REGISTER, "criado");
        return [{ status: "ok",  message: "Registro criado." }];
      } else return [{message: "Nenhum registro encontrado." }];
    }
  } catch (e) {
    console.log(e);
    return error(e);
  }
}

/* Exportação */
module.exports = { create };
