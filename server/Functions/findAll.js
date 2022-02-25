/* Importação */
const { validationVar } = require("./validation");
const { errorHandling } = require("./error");

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
