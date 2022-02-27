/* Importação */
const { get, getId, post, update, deleteId } = require("../Functions/Routes");

/* Estrutura da class */
class Router {
  constructor(controller, controllerName, classUtil) {
    this.controller = controller;
    this.controllerName = controllerName;
    this.classUtil = classUtil;
  }

  /* Funções de rotas */
  get(req, res) {
    get(req, res, this.controller, this.controllerName);
  }
  getId(req, res) {
    getId(req, res, this.controller, this.controllerName);
  }
  post(req, res, newRegister) {
    post(req, res, this.controller, this.controllerName, newRegister);
  }
  put(req, res, newRegister) {
    update(req, res, this.controller, this.controllerName, newRegister);
  }
  deleteId(req, res) {
    const ID = req.params.id;
    deleteId(req, res, this.controller, this.controllerName, ID);
  }

  /* Outras funções */
  getCamposClass(req) {
    const REGISTER = {};
    for (let campo of this.classUtil.getCampos())
      REGISTER[campo] = req.body[campo];
    // console.log(REGISTER, req.params);
    return REGISTER;
  }
}

/* Exportação */
module.exports = { Router };
