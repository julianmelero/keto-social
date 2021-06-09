const store = require("../../../store/dummy");
const {nanoid} = require("nanoid");

const TABLE = "user";

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }
  function list() {
    return store.list(TABLE);
  }
  function get(id) {
    return store.get(TABLE, id);
  }
  function upsert(body) {
    const user = {
      name: body.name,
    };
    user.id = nanoid();    
    return store.upsert(TABLE, user);
  }
  function remove(id) {
    return store.remove(id)
  }
  return {
    list,
    get,
    upsert,
    remove,
  };
};
