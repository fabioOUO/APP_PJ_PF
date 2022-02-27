/* Importação */
const { asyncResp } = require("../Functions/Others");
const {
  create,
  findByPk,
  findAll,
  update,
  del,
} = require("../Functions/Controllers");

/* Estrutura da class */
class Controller {
  constructor(model) {
    this.model = model;
    this.printMSG = true;
  }

  /* Funções sets */
  setModel = (model) => (this.model = model);
  setPrintMSG = (newStatus) => (this.printMSG = newStatus);

  /* Funções gets */
  getModel = () => this.model;
  getPrintMSG = () => this.printMSG;

  /* Funções outras */
  create = (newRegister) =>
    asyncResp(create(this.model, newRegister), this.printMSG);

  findByPk = (id) => asyncResp(findByPk(this.model, id), this.printMSG);

  findAll = () => asyncResp(findAll(this.model), this.printMSG);

  update = (newRegister) =>
    asyncResp(update(this.model, newRegister), this.printMSG);

  del = (id) => asyncResp(del(this.model, id), this.printMSG);
}

/* Exportação */
module.exports = { Controller };
