/* Importação */
const { server } = require("./server");
const { routerPessoa } = require("./Pessoa");
const { routerPessoaFisica } = require("./PessoaFisica");
const { routerTelefone } = require("./Telefone");

/* Exportação */
module.exports = { server, routerPessoa, routerPessoaFisica, routerTelefone };
