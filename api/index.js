const express = require("express");
const config = require("../config.js");
const user = require("./components/user/network");
const auth = require("./components/auth/network");

const swaggerUi = require("swagger-ui-express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDoc = require("./swagger.json");

// ROUTING
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Enable Server
app.listen(config.api.port, () => {
  console.log("API listening at port  " + config.api.port);
});
