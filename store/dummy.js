// Dummy BD

const db = {
  user: [{ id: 1, name: "Juan" }],
};

function list(table) {
  return db[table];
}

function get(table, id) {
  let col = list(table);
  return col.filter((item) => item.id === id)[0] || null;
}

function upsert(table, id, data) {
  db[col].push(data);
}

function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
