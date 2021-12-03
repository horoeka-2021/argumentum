exports.up = function (knex) {
  return knex.schema.createTable('userArguments', (table) => {
    table.string('user_auth0_id').references('users.auth0_id')
    table.integer('argument_id').references('arguments.id')
    table.string('side')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('userArguments')
}
