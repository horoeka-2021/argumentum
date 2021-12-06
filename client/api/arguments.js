import request from 'superagent'

export function getProfileArguments () {
  return request.get('/api/v1/args')
    .then(res => {
      return res.body
    })

  // make a promise which resolves with exampleProfileArguments
  // return new Promise((resolve, reject) => {
  //   resolve(exampleProfileArguments)
  // })
}

const exampleProfileArguments = {
  stupid: [
    {
      id: 1,
      name: 'Does Freewill Exist?',
      side0: 'yes',
      side1: 'no'
    }
  ],
  serious: [
    {
      id: 2,
      name: 'Vacine Mandates',
      sides: [
        'For',
        '?',
        'Against'
      ]
    }
  ],
  fun: [
    {
      id: 3,
      name: 'Cats vs Dogs',
      sides: [
        'Dogs',
        '?',
        'Cats'
      ]
    }
  ]
}
