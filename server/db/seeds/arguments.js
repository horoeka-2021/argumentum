exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('arguments').del()
    .then(function () {
      // Inserts seed entries
      return knex('arguments').insert([
        { id: 1, category: 'stupid', name: 'Spades', description: 'Are they useful?', side0: 'Yes', side1: 'No' },
        { id: 2, category: 'stupid', name: 'Flat Earth', description: 'Is the earth round or flat?', side0: 'Yes', side1: 'No' },
        { id: 3, category: 'stupid', name: 'Pizza', description: 'Square pizza slices or triangles?', side0: 'Yes', side1: 'No' },
        { id: 4, category: 'stupid', name: 'Dreams', description: 'Do computers dream?', side0: 'Yes', side1: 'No' },
        { id: 5, category: 'stupid', name: 'Food Choices', description: 'Marmite or Vegemite?', side0: 'Yes', side1: 'No' },
        { id: 6, category: 'stupid', name: 'iOS vs Android', description: 'iOS or Android?', side0: 'Yes', side1: 'No' },
        { id: 7, category: 'stupid', name: 'Pets', description: 'Which ones are better?', side0: 'Yes', side1: 'No' },
        { id: 8, category: 'stupid', name: 'Cats vs Dogs', description: 'Which is better', side0: 'Yes', side1: 'No' },
        { id: 9, category: 'stupid', name: 'Ice Cream vs Cake', description: 'Ice cream or cake?', side0: 'Yes', side1: 'No' },
        { id: 10, category: 'stupid', name: 'Languages', description: 'Should javascript be banned?', side0: 'Yes', side1: 'No' },
        { id: 11, category: 'serious', name: 'Crypto', description: 'Should governments accept crypto-currencies?', side0: 'Yes', side1: 'No' },
        { id: 12, category: 'serious', name: 'AI Limits', description: 'Should limits be placed on AI research?', side0: 'Yes', side1: 'No' },
        { id: 13, category: 'serious', name: 'Security vs Privacy', description: 'National security is more important than privacy.', side0: 'Yes', side1: 'No' },
        { id: 14, category: 'serious', name: 'Cyberbullying', description: 'Is cyberbullying an issue?', side0: 'Yes', side1: 'No' },
        { id: 15, category: 'serious', name: 'Climate', description: 'Climate change is the greatest threat today.', side0: 'Yes', side1: 'No' },
        { id: 16, category: 'serious', name: 'Video Games', description: 'Violent video games should be banned.', side0: 'Yes', side1: 'No' },
        { id: 17, category: 'serious', name: 'Universal Basic Income', description: 'All people should have Universal Basic Income.', side0: 'Yes', side1: 'No' },
        { id: 18, category: 'serious', name: 'Vaccines', description: 'People should be legally required to get vaccines.', side0: 'Yes', side1: 'No' },
        { id: 19, category: 'serious', name: 'Colonisation', description: 'Humans should explore and colonise other planets.', side0: 'Yes', side1: 'No' },
        { id: 20, category: 'serious', name: 'DNA Rights', description: 'Individuals should own their own DNA.', side0: 'Yes', side1: 'No' },
        { id: 21, category: 'serious', name: 'Human Skills', description: 'Should human skills be mandatory?', side0: 'Yes', side1: 'No' },
        { id: 22, category: 'fun', name: 'Bass Players', description: 'Are bass players really better lovers?', side0: 'Yes', side1: 'No' },
        { id: 23, category: 'fun', name: 'Satellite Data', description: 'Do students really need satellite data?', side0: 'Yes', side1: 'No' },
        { id: 24, category: 'fun', name: 'Genies', description: 'Is it OK to ask a genie for infinite wishes?', side0: 'Yes', side1: 'No' },
        { id: 25, category: 'fun', name: 'Odd Jobs', description: 'Are odd jobbers getting a fair deal?', side0: 'Yes', side1: 'No' },
        { id: 26, category: 'fun', name: 'Dirt Bikes', description: 'Are dirt bikers better programmers?', side0: 'Yes', side1: 'No' },
        { id: 27, category: 'fun', name: 'Banana', description: 'Is banana really the best parameter name?', side0: 'Yes', side1: 'No' },
        { id: 28, category: 'fun', name: 'Video Games', description: 'Do side scrolling games impact mental health?', side0: 'Yes', side1: 'No' },
        { id: 29, category: 'fun', name: 'Cool', description: 'Should the word cool be used consecutively?', side0: 'Yes', side1: 'No' },
        { id: 30, category: 'fun', name: 'Sushi', description: 'Does sushi make a viable weapon?', side0: 'Yes', side1: 'No' },
        { id: 31, category: 'fun', name: 'Game Collections', description: 'Should there be limits on game collections?', side0: 'Yes', side1: 'No' },
        { id: 32, category: 'fun', name: 'Aliens', description: 'Is programming a form of Alien torture?', side0: 'Yes', side1: 'No' },
        { id: 33, category: 'fun', name: 'Aliens', description: 'Is programming a form of Alien pleasure?', side0: 'Yes', side1: 'No' }
      ])
    })
}
