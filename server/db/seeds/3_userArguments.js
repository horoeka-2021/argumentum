exports.seed = function (knex) {
  return knex('user_arguments').del()
    .then(function () {
      return knex('user_arguments').insert([
        // { id: 1, user_id: 'auth0|61b00fe4013f920068a29725', arg_id: 1, side: 'No', story: 'God spoke to me once and told me he was made up' }
        { user_id: 'auth0|61b00fe4013f920068a29725', arg_id: 1, side: 'No', story: 'God spoke to me once and told me he was made up' }
      ])
    })
}
