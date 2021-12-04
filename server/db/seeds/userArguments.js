exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_arguments').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_arguments').insert([
        { user_auth0_id: 1, argument_id: 1, side: 'Yes' }
      ])
    })
}
