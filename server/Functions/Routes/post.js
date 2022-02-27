/* Importação */
const { validationVar } = require("../Validations");
const { error, errorHandling } = require("../Others");

/* Declaração de função */

/* Cria um novo registro na tabela */
const post = (req, res, controller, controllerName, newRegister) => {
  try {
    if (validationVar(controller, controllerName)) {
      const [CAMPOS, AUX] = [newRegister.getCampos(), {}];

      AUX.codigo = newRegister.getCodigo();
      for (let i = 0; i < CAMPOS.length; i++)
        AUX[CAMPOS[i]] = newRegister[CAMPOS[i]];

      return controller
        .create(AUX)
        .then((register) => res.status(201).send(register))
        .catch((e) => error(e, res));
    }
  } catch (error) {
    console.error(errorHandling(error));
  }
};

/* Exportação */
module.exports = { post };
