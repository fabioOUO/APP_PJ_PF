/* Importação */
const { Controller } = require("./Controller");
const { Grupo } = require("./Grupo");
const { Pessoa } = require("./Pessoa");
const { PessoaFisica } = require("./PessoaFisica");
const { PessoaJuridica } = require("./PessoaJuridica");
const { Telefone } = require("./Telefone");
const { Router } = require("./Router");

/* Exportação */
module.exports = {
  Controller,
  Grupo,
  Pessoa,
  Telefone,
  PessoaFisica,
  PessoaJuridica,
  Router,
};
