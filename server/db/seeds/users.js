exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { auth0_id: 1, email: 'example@gmail.com' }
      ])
    })
}
