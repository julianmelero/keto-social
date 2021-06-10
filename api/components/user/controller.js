const store = require("../../../store/dummy");
const { nanoid } = require("nanoid");
const auth = require("../auth");

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
  async function upsert(body) {
    const user = {
      name: body.name,
      username: body.username,
    };
    user.id = nanoid();

    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.usarname,
        password: user.password,
      });
    }
    return store.upsert(TABLE, user);
  }
  function remove(id) {
    return store.remove(id);
  }
  return {
    list,
    get,
    upsert,
    remove,
  };
};
