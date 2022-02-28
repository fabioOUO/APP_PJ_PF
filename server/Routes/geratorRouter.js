/* Importação */
const express = require("express");
const { Router } = require("../Class");

const geratorRouter = (controller, nameController, classUtil, nameRouter) => {
  const router = express.Router();
  const ROUTER = new Router(controller, nameController, new classUtil());
  const campos = new classUtil().getCampos();

  router.get(`/${nameRouter}`, (req, res) => ROUTER.get(req, res));

  router.post(`/${nameRouter}`, (req, res) =>
    ROUTER.post(
      req,
      res,
      new classUtil(null, ...campos.map((campo) => req.body[campo]))
    )
  );

  router.put(`/${nameRouter}`, (req, res) =>
    ROUTER.put(
      req,
      res,
      new classUtil(req.body.codigo, ...campos.map((campo) => req.body[campo]))
    )
  );

  router.get(`/${nameRouter}/:id`, (req, res) => ROUTER.getId(req, res));

  router.delete(`/${nameRouter}/:id`, (req, res) => ROUTER.deleteId(req, res));

  return router;
};

/* Exportação */
module.exports = { geratorRouter };
