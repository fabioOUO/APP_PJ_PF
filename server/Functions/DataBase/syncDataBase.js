/* Importação */
const DATABASE = require("../../Config/DataBase");
const { validationVar } = require("../Validations");
const { error } = require("../Others");

/* Declaração de função */

/* Sicroniza e altera tabela*/
async function syncDataBase() {
  try {
    if (validationVar(DATABASE, "DATABASE"))
      return await DATABASE.sync({ alter: true });
  } catch (e) {
    return error(e);
  }
  return undefined;
}

/* Sicroniza e recria tabela */
async function syncDataBaseForce() {
  try {
    if (validationVar(DATABASE, "DATABASE"))
      return await DATABASE.sync({ force: true });
  } catch (error) {
    console.error(errorHandling(error));
  }
  return undefined;
}

syncDataBaseForce();

/* Exportação */
module.exports = { syncDataBase, syncDataBaseForce };
