/* Importação */
const { validationVar } = require("../Validations");
const { error } = require("../Others");

/* Declaração de função */

/* Consulta todos os registros da tabela */
async function findAll(model) {
  try {
    if (validationVar(model, "model")) return await model.findAll();
  } catch (e) {
    return error(e);
  }
}

/* Exportação */
module.exports = { findAll };
