// Use mysql module

const mysql = require("mysql");

const config = require("../config");

const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

// Connect

let connection;

function handleCon() {
  connection = mysql.createConnection(dbConfig);
  connection.connect((err) => {
    if (err) {
      console.error("DB Error" + err);
      setTimeout(handleCon, 2000);
    } else {
      console.log("DB Connected");
    }
  });

  connection.on("error", (err) => {
    console.error("DB Error" + err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleCon();
    } else {
      throw err;
    }
  });
}
handleCon();

function list(table) {
    console.log(table);
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table}`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
}

module.exports = { list };
