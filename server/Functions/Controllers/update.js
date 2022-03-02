/* Importação */
const { validationVar } = require("../Validations");
const { error } = require("../Others");
const { registerLogger } = require("../log");

/* Declaração de função */

/* Atualiza um registro da tabela */
async function update(model, newRegister) {
  try {
    if (
      validationVar(model, "model") &&
      validationVar(newRegister, "newregister")
    ) {
      const [OLD, CAMPOS] = [
        await model.findByPk(newRegister.codigo),
        newRegister.getCampos(),
      ];

      if (OLD !== null) {
        for (let i = 0; i < CAMPOS.length; i++) {
          /* O vinculo com a pessoa não mudara */
          if (CAMPOS[i] !== "codigoPessoa")
            OLD[CAMPOS[i]] = newRegister[CAMPOS[i]];
        }

        OLD.save();
        registerLogger("info", OLD, "atualizado");

        return [{ status: "ok", message: "Registro atualizado." }];
      } else {
        return [{ message: "Nenhum registro encontrado." }];
      }
    }
  } catch (e) {
    return error(e, undefined);
  }
}

/* Exportação */
module.exports = { update };
