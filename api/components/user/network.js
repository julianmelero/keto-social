const express = require("express");

const response = require("../../../network/response");

const router = express.Router();

router.get("/", function (req, res) {
  //res.send("Funcionando");
  response.succes(req, res, "OK", 200);
});

module.exports = router;
