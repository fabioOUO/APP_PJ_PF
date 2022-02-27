/* Importação */
const { validationVar } = require("../Validations");
const { error, errorHandling } = require("../Others");

/* Declaração de função */

/* Retorna um registro de determinado id(codigo) */
const getId = (req, res, controller, controllerName) => {
  try {
    if (validationVar(controller, controllerName)) {
      return controller
        .findByPk(req.params.id)
        .then((register) => res.status(200).send(register))
        .catch((e) => error(e, res));
    }
  } catch (error) {
    console.error(errorHandling(error));
  }
};

/* Exportação */
module.exports = { getId };
