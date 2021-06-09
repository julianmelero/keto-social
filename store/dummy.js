// Dummy BD

const db = {
  user: [{ id: "1", name: "Juan" },
  {id: "2", name: "Jaime"}],
};

async function list(table) {
  return db[table];
}

async function get(table, id) {
  let col = await list(table);
  return col.filter((item) => item.id === id)[0] || null;
}

async function upsert(table,data) {
  let col = await list(table);
  console.log(data);
  await db.user.push(data);
}

async function remove(ident) {  
  // Get position in array    
  let pos = db.user.find(id => ident);
  
  return db.user.splice(pos,1);
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
