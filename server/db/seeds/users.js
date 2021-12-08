exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { auth0_id: 'abc123', email: 'daring-wonder@gmail.com', image: 1, username: 'daring-wonder' },
        { auth0_id: 'abc124', email: 'captain-smooth@gmail.com', image: 2, username: 'captain-smooth' },
        { auth0_id: 'abc125', email: 'clever-eagle@gmail.com', image: 3, username: 'clever-eagle' },
        { auth0_id: 'abc126', email: 'dread-gamer@gmail.com', image: 4, username: 'dread-gamer' },
        { auth0_id: 'abc127', email: 'classic-vandal@gmail.com', image: 6, username: 'classic-vandal' }
      ])
    })
}
