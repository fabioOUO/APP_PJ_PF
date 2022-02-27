/* Importação */
const { validationVar } = require("../Validations");
const { errorHandling } = require("../Others");

/* Declaração de função */

const deleteId = (req, res, controller, controllerName, id) => {
  try {
    if (validationVar(controller, controllerName)) {
      return controller
        .del(id)
        .then((register) => res.status(200).send(register))
        .catch((error) => console.error(errorHandling(error)));
    }
  } catch (error) {
    console.error(errorHandling(error));
  }
};

/* Exportação */
module.exports = { deleteId };
