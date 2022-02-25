/* Importação */
const { DataTypes } = require("sequelize");
const DATABASE = require("../Config/DataBase");
const { PessoaModel } = require("./Pessoa");

/* Definição de modelo de tabela, usando sequelise */
const PessoaJuridicaModel = DATABASE.define("pessoaJuridica", {
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cnpj: {
    type: DataTypes.STRING(18),
    allowNull: false,
    unique: true,
  },
  inscricaoEstadual: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  codigoPessoa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      /* Declaração de chave estrangeira */
      model: PessoaModel,
      key: "codigo",
    },
  },
});

/* Exportação */
module.exports = { PessoaJuridicaModel };
