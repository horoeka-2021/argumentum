exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('email')
    table.int('image')
    table.string('username')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
