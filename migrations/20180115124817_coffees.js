exports.up = function(knex, Promise) {
  return knex.schema.createTable("coffees", table => {
    table.increments("id").primary();
    table.text("name");
    table.text("roaster");
    table.integer("aroma");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("coffees");
};
