const auth = require("../../../auth");

module.exports = function checkAuth(action, req,next) {  
  //function middleware(req, res, next) {
    switch (action) {
      case "update":
        console.log("Entro en secure.js");
        const owner = req.body.id;
        auth.check.own(req, owner);
        break;
      default:
        next();
    //}
  }

  return middleware;
};
