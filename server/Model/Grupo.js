const { DataTypes } = require("sequelize");
const DATABASE = require("../Config/DataBase");

/* Definição de modelo de tabela, usando sequelise */
const Grupo = DATABASE.define("grupo", {
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  descricao: {
      type: DataTypes.STRING(20),
      allowNull: false,
  }
});

/* Exportação */
module.exports = { Grupo };
