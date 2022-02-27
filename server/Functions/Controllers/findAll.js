/* Importação */
const { validationVar } = require("../Validations");
const { errorHandling } = require("../Others");

/* Declaração de função */

/* Consulta todos os registros da tabela */
async function findAll(model) {
  try {
    if (validationVar(model, "model")) return await model.findAll();
  } catch (error) {
    console.error(errorHandling(error));
  }
  return undefined;
}

/* Exportação */
module.exports = { findAll };
