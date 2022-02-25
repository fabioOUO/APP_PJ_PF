/* Importação */
const { validationVar } = require("./validation");
const { errorHandling } = require("./error");

/* Declaração de função */

/* Trata uma resposta assincrona */
function asyncResp(asyncFunction, printResp = true) {
  try {
    if (validationVar(asyncFunction, "asyncFunction"))
      asyncFunction
        .then((r) => (printResp ? console.log(r) : false))
        .catch((e) => console.log(e));
  } catch (error) {
    console.error(errorHandling(error));
  }
  return undefined;
}

/* Exportação */
module.exports = { asyncResp };
