/* Importação */
const { validationVar } = require("../Validations");
const { error } = require("../Others");

/* Declaração de função */

/* Deleta um registro de determinado id(codigo) */
const deleteId = (req, res, controller, controllerName, id) => {
  try {
    if (validationVar(controller, controllerName)) {
      return controller
        .del(id)
        .then((register) => res.status(200).send(register))
        .catch((e) => error(e, res));
    }
  } catch (e) {
    return error(e);
  }
};

/* Exportação */
module.exports = { deleteId };
