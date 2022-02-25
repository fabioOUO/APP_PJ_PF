/* Importação */
const { validationVar } = require("./validation");
const { errorHandling } = require("./error");
const { findByPk } = require("./findByPk");

/* Declaração de função */

/* Atualiza um registro da tabela */
async function update(model, newregister) {
  try {
    if (
      validationVar(model, "model") &&
      validationVar(newregister, "newregister")
    ) {
      const OLD = await findByPk(model, newregister.codigo);
      for (campo of newregister.getCampos()) OLD[campo] = newregister[campo];
      return await OLD.save();
    }
  } catch (error) {
    console.error(errorHandling(error));
  }
  return undefined;
}

/* Exportação */
module.exports = { update };
