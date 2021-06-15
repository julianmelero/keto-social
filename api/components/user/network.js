const express = require("express");

const secure = require("./secure");

const response = require("../../../network/response");
const controller = require("./index");
const router = express.Router();

router.get("/", function (req, res) {
  const lista = controller
    .list()
    .then((lista) => {
      response.succes(req, res, lista, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
});

router.post("/", function (req, res) {
  controller
    .upsert(req.body)
    .then((add) => {
      response.succes(req, res, add, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .remove(req.params.id)
    .then((remove) => {
      response.succes(req, res, remove, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
});

router.get("/:id", function (req, res) {
  const user = controller
    .get(req.params.id)
    .then((user) => {
      response.succes(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
});

router.put("/", function (req, res) {
  console.log("Entro en PUT");
  secure("update", req);
  response.error(req,res,'', 500);
  /*controller
    .upsert(req.body)
    .then((add) => {
      response.succes(req, res, add, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    }); */
});

module.exports = router;
