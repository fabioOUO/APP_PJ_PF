/* Importação */
const { validationVar } = require("../Validations");
const { error } = require("../Others");
const { registerLogger } = require("../log");

/* Declaração de função */

/* Consulta todos os registros da tabela */
async function findAll(model) {
  try {
    if (validationVar(model, "model")) {
      const REGISTERS = await model.findAll();
      console.log(REGISTERS.length);
      if (REGISTERS !== null && REGISTERS.length !== 0) {
        registerLogger("info", REGISTERS, "consultado todos");
        REGISTERS.status = "ok";
        return REGISTERS;
      } else return [{ message: "Nenhum registro encontrado." }];
    }
  } catch (e) {
    return error(e);
  }
}

/* Exportação */
module.exports = { findAll };
