/* Importação */
const { PessoaModel } = require("./Pessoa");
const { PessoaFisicaModel } = require("./PessoaFisica");
const { PessoaJuridicaModel } = require("./PessoaJuridica");
const { TelefoneModel } = require("./Telefone");
const { GrupoModel } = require("./Grupo");

/* Exportação */
module.exports = {
  PessoaModel,
  PessoaFisicaModel,
  PessoaJuridicaModel,
  TelefoneModel,
  GrupoModel,
};
