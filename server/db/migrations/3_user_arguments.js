exports.up = function (knex) {
  return knex.schema.createTable('user_arguments', (table) => {
    table.varchar('user_id').references('users.auth0_id')
    table.integer('arg_id').references('arguments.id')
    table.varchar('side')
    table.varchar('story')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_arguments')
}
