const express = require("express");

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

module.exports = router;
