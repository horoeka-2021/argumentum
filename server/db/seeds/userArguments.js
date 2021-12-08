exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_arguments').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_arguments').insert([
        { user_id: 'auth0|61b00fe4013f920068a29725', arg_id: 1, side: 'No', story: 'God spoke to me once and told me he was made up' }
      ])
    })
}
