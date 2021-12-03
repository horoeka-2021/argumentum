exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('arguments').del()
    .then(function () {
      // Inserts seed entries
      return knex('arguments').insert([
        { id: 1, name: 'Aliens', description: 'Do they exist?' }
      ])
    })
}
