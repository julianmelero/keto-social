const express = require("express");
const config = require("../config.js");
const user = require('./components/user/network');

const app = express();

// ROUTING
app.use('/api/user', user);





// Enable Server
app.listen(config.api.port, () => {
  console.log("API escuchando en puerto " + config.api.port);
});
