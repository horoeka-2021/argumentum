exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_arguments').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_arguments').insert([
        { user_id: 'abc123', arg_id: 1, side: 'Yes', story: 'I enjoy gardening.' },
        { user_id: 'abc123', arg_id: 33, side: 'Yes', story: 'I was abducted and probed during my OE in rural France.' },
        { user_id: 'abc124', arg_id: 1, side: 'No', story: 'They are dangerous and I pay an odd jobber to use them anyway.' },
        { user_id: 'abc124', arg_id: 33, side: 'No', story: 'I do not believe there is any good proof.' },
        { user_id: 'abc125', arg_id: 17, side: 'Yes', story: 'To live with a basic level of income is a human right.' },
        { user_id: 'abc125', arg_id: 27, side: 'Yes', story: 'It is a fundamentally sound choice in most circumstances.' },
        { user_id: 'abc126', arg_id: 17, side: 'No', story: 'Get a job and earn your own income.' },
        { user_id: 'abc126', arg_id: 27, side: 'Yes', story: 'Why would you when Apple is available?' }
      ])
    })
}
