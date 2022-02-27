/* Importação */
const { validationVar } = require("../Validations");
const { errorHandling } = require("../Others");

/* Declaração de função */

/* Cria novo registro na tabela */
async function create(model, newRegister) {
  try {
    if (
      validationVar(model, "model") &&
      validationVar(newRegister, "newRegister")
    )
      return await model.create(newRegister);
  } catch (error) {
    console.error(errorHandling(error));
  }
  return undefined;
}

/* Exportação */
module.exports = { create };
