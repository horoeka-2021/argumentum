exports.up = function (knex) {
  return knex.schema.createTable('user_arguments', (table) => {
    table.string('user_id').references('users.id')
    table.integer('argument_id').references('arguments.id')
    table.int('side')
    table.string('story')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_arguments')
}
