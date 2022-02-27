/* Importação */
const { validationVar } = require("../Validations");
const { error, errorHandling } = require("../Others");

/* Declaração de função */

/* Retorna todos os registros da tabela */
const get = (req, res, controller, controllerName) => {
  try {
    if (validationVar(controller, controllerName)) {
      return controller
        .findAll()
        .then((registers) => res.status(200).send(registers))
        .catch((e) => error(e, res));
    }
  } catch (error) {
    console.error(errorHandling(error));
  }
};

/* Exportação */
module.exports = { get };
