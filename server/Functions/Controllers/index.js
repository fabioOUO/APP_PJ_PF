/* Importação */
const { create } = require("./create");
const { findByPk } = require("./findByPk");
const { findAll } = require("./findAll");
const { update } = require("./update");
const { del } = require("./del");

/* Exportação */
module.exports = {
  create,
  findByPk,
  findAll,
  update,
  del,
};
