// Dummy BD

const db = {
  'user': [
    { id: "1", name: "Juan" },
    { id: "2", name: "Jaime" },
  ],
};

async function list(table) {
  return db[table] || [];
}

async function get(table, id) {
  let col = await list(table);
  return col.filter((item) => item.id === id)[0] || null;
}

async function upsert(table, data) {
  let col = await list(table);  
  await db.user.push(data);
}

async function remove(ident) {
  // Get position in array
  let pos = db.user.find((id) => ident);

  return db.user.splice(pos, 1);
}

async function query(table, q) {
  let col = await list(table);
  let keys = Object.keys(q);
  let key = keys[0];
  
  return col.filter(item => item[key] === q[key])[0] || null;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};
