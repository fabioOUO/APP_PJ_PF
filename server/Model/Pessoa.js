const { DataTypes } = require("sequelize");
const DATABASE = require("../Config/DataBase");
const { Grupo } = require(".");

/* Definição de modelo de tabela, usando sequelise */
const Pessoa = DATABASE.define("pessoa", {
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
      model: Grupo,
      key: "codigo",
    },
  },
});

/* Exportação */
module.exports = { Pessoa };
