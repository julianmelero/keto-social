const TABLE = "user";

const auth = require("../../../auth");

const bcrypt = require("bcrypt");

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/mysql");
  }

  async function login(username, password) {
    // Get data from login
    const data = await store.query(TABLE, {
      username: username,
    });    
    return bcrypt.compare(password, data.password).then((sonIguales) => {            
      if (sonIguales === true) {        
        // Generate Token        
        return auth.sign(data);
      } else {
        throw new Error("Información Inválida");
      }
    });
  }

  async function upsert(data) {    
    const authData = {
      id: data.id,            
    };

    if (data.username) {
      authData.username = data.username;
    }
    
    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 6);
    }
    
    return store.upsert('auth', authData);
  }

  return {
    upsert,
    login,
  };
};
