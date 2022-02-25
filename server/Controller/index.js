/* Importação */
const { GrupoController } = require("./Grupo");
const { PessoaController } = require("./Pessoa");
const { PessoaFisicaController } = require("./PessoaFisica");
const { PessoaJuridicaController } = require("./PessoaJuridica");
const { TelefoneController } = require("./Telefone");

/* Exportação */
module.exports = {
  GrupoController,
  PessoaController,
  PessoaFisicaController,
  PessoaJuridicaController,
  TelefoneController,
};
