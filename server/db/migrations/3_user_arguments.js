exports.up = function (knex) {
  return knex.schema.createTable('user_arguments', (table) => {
<<<<<<< HEAD
    table.varchar('user_id').references('users.auth0_id')
=======
    table.increments('id').primary()
    table.string('user_id').references('users.auth0_id')
>>>>>>> 6cbfd6e0bad3dd4520c802b482e30b4b862e7937
    table.integer('arg_id').references('arguments.id')
    table.varchar('side')
    table.varchar('story')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_arguments')
}
