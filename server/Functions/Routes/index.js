/* Importação */
const { get } = require("./get");
const { getId } = require("./getId");
const { post } = require("./post");
const { update } = require("./update");
const { deleteId } = require("./deleteId");

/* Exportação */
module.exports = {
  get,
  getId,
  post,
  update,
  deleteId,
};
