/* Importação */
const { validationVar } = require("../Validations");
const { errorHandling } = require("./error");

/* Declaração de função */

/* Trata uma resposta assincrona */
function asyncResp(asyncFunction) {
  try {
    if (validationVar(asyncFunction, "asyncFunction")) return asyncFunction;
  } catch (error) {
    console.error(errorHandling(error));
    return Promise().reject();
  }
}

/* Exportação */
module.exports = { asyncResp };
