/* Importação */
const { validationVar } = require("./validation");
const { errorHandling } = require("./error");
const { findByPk } = require("./findByPk");

/* Declaração de função */

/* deleta um registro com o id do parametro */
async function del(model, id) {
  try {
    if (validationVar(model, "model") && validationVar(id, "id")) {
      const REGISTER = await findByPk(model, id);
      return validationVar(REGISTER, "REGISTER")
        ? await REGISTER.destroy()
        : undefined;
    }
  } catch (error) {
    console.error(errorHandling(error));
  }
}

/* Exportação */
module.exports = { del };
