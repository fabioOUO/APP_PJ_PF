/* Declaração de função */

/* Retorna uma erro de referência de variavel */
const refError = (variabe) =>
  new ReferenceError(
    `Erro: Função criada sem variavel obrigatorio: ${variabe}`
  );

/* Tratamento de erros */
const errorHandling = (error, variabe) => {
  let e = {};
  if (error instanceof ReferenceError) {
    e.name = "ReferenceError";
    e.message = `Erro: Função criada sem variavel obrigatorio: ${variabe}`;
    e.stack = error.stack;
  } else {
    e.name = error.name;
    e.message = error.message;
    e.stack = error.stack;
  }
  return { ...e };
};

/* Exportação */
module.exports = { errorHandling, refError };
