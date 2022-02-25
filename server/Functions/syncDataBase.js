/* Importação */
const { validationVar } = require("./validation");
const { errorHandling } = require("./error");
const DATABASE = require("../Config/DataBase");

/* Declaração de função */

/* Sicroniza e altera tabela*/
async function syncDataBase() {
  try {
    if (validationVar(DATABASE, "DATABASE"))
      return await DATABASE.sync({ alter: true });
  } catch (error) {
    console.error(error);
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

/* Exportação */
module.exports = { syncDataBase, syncDataBaseForce };
