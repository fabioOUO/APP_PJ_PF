/* Importação */
const { validationVar } = require("../Validations");
const { error } = require("../Others");

/* Declaração de função */

/* Cria novo registro na tabela */
async function create(model, newRegister) {
  try {
    if (
      validationVar(model, "model") &&
      validationVar(newRegister, "newRegister")
    )
      return await model.create(newRegister);
  } catch (e) {
    console.log(e);
    return error(e);
  }
}

/* Exportação */
module.exports = { create };
