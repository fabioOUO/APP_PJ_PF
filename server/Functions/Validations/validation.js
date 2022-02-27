/* Importação */
const { errorHandling } = require("../Others/error");

/* Declaração de função */

/* Verifica se uma variavel é 'undefined' ou 'null', se for retorna um erro */
function validationVar(variabe, nameVariabe) {
  try {
    if (!variabe) throw errorHandling(new ReferenceError(), nameVariabe);
  } catch (error) {
    console.error(errorHandling(error));
  }
  return variabe != undefined && variabe != null;
}

/* Exportação */
module.exports = { validationVar };
