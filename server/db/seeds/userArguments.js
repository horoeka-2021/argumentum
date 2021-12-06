exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_arguments').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_arguments').insert([
        { user_id: 'abc123', arg_id: 1, side: 'Yes', story: 'I was abducted and probed during my OE in rural France.' }
      ])
    })
}
