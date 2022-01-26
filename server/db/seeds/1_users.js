exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { auth0_id: 'auth0|61b00fe4013f920068a29725', email: 'tanelives@gmail.com', image: 9, username: 'xkeyboardWarrior' }
      ])
    })
}
