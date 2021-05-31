const store = require("../../../store/dummy");

const TABLE = "USER";

function list() {
  return store.list(TABLE);
}

module.exports = {
  list,
};
