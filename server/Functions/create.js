/* Importação */
const { validationVar } = require("./validation");
const { errorHandling } = require("./error");

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
