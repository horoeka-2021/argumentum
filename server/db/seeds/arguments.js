exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('arguments').del()
    .then(function () {
      // Inserts seed entries
      return knex('arguments').insert([
        { id: 1, category: 'serious', name: 'Aliens', description: 'Do they exist?', side0: 'Yes', side1: 'No' }
      ])
    })
}
