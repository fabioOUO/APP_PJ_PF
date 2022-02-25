/* Importação */
const { errorHandling } = require("./error");

/* Declaração de função */

/* Verifica se uma variavel é 'undefined' ou 'null' */
function validationVar(variabe, nameVariabe) {
  try {
    if (!variabe) throw errorHandling(new ReferenceError(), nameVariabe);
  } catch (error) {
    console.error(errorHandling(error));
  }
  return variabe != undefined && variabe != null;
}

console.log(validationVar());

/* Exportação */
module.exports = { validationVar };
