/* Importação */
const { DataTypes } = require("sequelize");
const DATABASE = require("../Config/DataBase");
const { GrupoModel } = require("./Grupo");

/* Definição de modelo de tabela, usando sequelise */
const PessoaModel = DATABASE.define("pessoa", {
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(140),
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  codigoGrupo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      /* Declaração de chave estrangeira */
      model: GrupoModel,
      key: "codigo",
    },
  },
});

/* Exportação */
module.exports = { PessoaModel };
