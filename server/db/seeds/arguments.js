exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('arguments').del()
    .then(function () {
      // Inserts seed entries
      return knex('arguments').insert([
        { id: 1, category: 'serious', name: 'Aliens', description: 'Do they exist?', side0: 'Yes', side1: 'No' },
        { id: 2, category: 'serious', name: 'Vaccines', description: 'Are they harmful?', side0: 'Yes', side1: 'No' },
        { id: 3, category: 'fun', name: 'Dogs Vs Cats', description: 'Which is the best pet?', side0: 'Dogs', side1: 'Cats' },
        { id: 4, category: 'fun', name: 'Batman Vs Superman', description: 'Who would win in a fight?', side0: 'Batman', side1: 'Superman' },
        { id: 5, category: 'stupid', name: 'Freewill', description: 'Do we have it?', side0: 'Yes', side1: 'No' },
        { id: 6, category: 'stupid', name: 'The nature of reality', description: 'Do we live in a simulation?', side0: 'Yes', side1: 'No' }
      ])
    })
}
