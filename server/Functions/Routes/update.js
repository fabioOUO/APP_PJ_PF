/* Importação */
const { validationVar } = require("../Validations");
const { errorHandling } = require("../Others");

/* Declaração de função */

/* Atualiza um registro em uma tabela */
const update = (req, res, controller, controllerName, newRegister) => {
  try {
    if (validationVar(controller, controllerName)) {
      return controller
        .update(newRegister)
        .then((register) => res.status(201).send(register))
        .catch((error) => console.error(errorHandling(error)));
    }
  } catch (error) {
    console.error(errorHandling(error));
  }
};

/* Exportação */
module.exports = { update };
