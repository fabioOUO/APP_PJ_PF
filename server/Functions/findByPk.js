/* Importação */
const { validationVar } = require("./validation");
const { errorHandling } = require("./error");

/* Declaração de função */

/* Consulta registro com id do parametro de entrada */
async function findByPk(model, codigo) {
  try {
    if (validationVar(model, "model") && validationVar(codigo, "codigo"))
      return await model.findByPk(codigo);
  } catch (error) {
    console.error(errorHandling(error));
  }
  return undefined;
}

/* Exportação */
module.exports = { findByPk };
