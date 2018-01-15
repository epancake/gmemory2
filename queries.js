const database = require("./database-connection");

module.exports = {
  list() {
    return database("coffees").select();
  },
  read(id) {
    return database('coffees_id_seq').where("id", id).first()
  },
  create(coffee) {
    return database('coffees')
      .insert(coffee)
      .returning("*")
      .then(record => record[0])
  },
  update(id, resolution) {
    return database('coffees').update(coffee)
      .where("id", id).returning("*").then(record => record[0])
  },
  delete(id) {
    return database('coffees').delete().where("id", id)
  }
};
