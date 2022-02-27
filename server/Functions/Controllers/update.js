/* Importação */
const { validationVar } = require("../Validations");
const { errorHandling } = require("../Others");
const { findByPk } = require("../Controllers/findByPk");

/* Declaração de função */

/* Atualiza um registro da tabela */
async function update(model, newRegister) {
  try {
    if (
      validationVar(model, "model") &&
      validationVar(newRegister, "newregister")
    ) {
      const [OLD, CAMPOS] = [
        await findByPk(model, newRegister.codigo),
        newRegister.getCampos(),
      ];

      for (let i = 0; i < CAMPOS.length; i++) {
        /* O vinculo com a pessoa não mudara */
        if (CAMPOS[i] !== "codigoPessoa")
          OLD[CAMPOS[i]] = newRegister[CAMPOS[i]];
      }
      return await OLD.save();
    }
  } catch (error) {
    console.error(errorHandling(error));
  }
  return undefined;
}

/* Exportação */
module.exports = { update };
