const {
  UniqueConstraintError,
  ConnectionError,
  TimeoutError,
} = require("sequelize");

/* Declaração de função */

/* Retorna uma erro de referência de variavel */
const refError = (variabe) => {
  const error = new Error();
  error.message = `Erro: Função criada sem variavel obrigatorio: ${variabe}`;
  return error;
};

const uniqueConstraintError = () => {
  const error = new Error();
  error.name = "ReferenceError";
  error.message = "Erro campo é unico, não pode ser duplicado.";
  return error;
};

const connectionError = () => {
  const error = new Error();
  error.name = "ConnectionError";
  error.message = "Erro: Não foi possivel se conectar a base de dados.";
  return error;
};

const timeoutError = () => {
  const error = new Error();
  error.name = "TimeoutError";
  error.message = "Erro: tempo de conexão com banco de dados excedido.";
  return error;
};

/* Tratamento de erros */
const errorHandling = (error, variabe) => {
  let e = {};

  if (error instanceof ReferenceError) e = refError(variabe);
  else if (error instanceof UniqueConstraintError) e = uniqueConstraintError();
  else if (error instanceof ConnectionError) e = connectionError();
  else if (error instanceof TimeoutError) e = timeoutError();
  else return { ...error };

  return { name: e.name, message: e.message };
};

const error = (e, res) => {
  const ERROR = errorHandling(e);
  console.error(ERROR);
  res.status(500).send(e);
};

/* Exportação */
module.exports = {
  error,
  errorHandling,
  refError,
  connectionError,
  timeoutError,
  uniqueConstraintError,
};
