exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { auth0_id: 'auth0|61b00fe4013f920068a29725', email: 'tanelives@gmail.com', image: 9, username: 'xkeyboardWarrior' }
      ])
    })
}
