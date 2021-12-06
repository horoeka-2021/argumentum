import request from 'superagent'

const userUrl = '/api/v1/users'

export async function addUser (user) {
  return request.post(userUrl)
    .send(user)
    .catch(logError)
}

export function addUserArgList (list) {
  console.log('API addUserArgList', list)
  return request.post('api/v1/userArgs')
    .send(list)
    .catch(logError)
}

function logError (err) {
  console.error(
    'Error consuming the API (in api/user.js):',
    err.message
  )
  throw err
}

export function getUsers () {
  console.log('getUsers api called')
  // return request.get(userUrl)
  // .catch(logError)

  return new Promise((resolve, reject) => {
    resolve(exampleUsers)
  })
}

const exampleUsers = {
  swipeusers: [
    {
      authId: 'abc123',
      image: 1,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },
    {
      authId: 'def456',
      image: 2,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'no',
          story: 'Denial of free will is simply an abdication of personal responsibility.'
        },
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'no',
          story: 'Denial of free will is simply an abdication of personal responsibility.'
        },
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'no',
          story: 'Denial of free will is simply an abdication of personal responsibility.'
        },
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'no',
          story: 'Denial of free will is simply an abdication of personal responsibility.'
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Dogs',
          story: 'Dogs are loyal and affectionate animals'
        }
      ]
    },
    {
      authId: 'abc123',
      image: 3,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },
    {
      authId: 'abc123',
      image: 4,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },
    {
      authId: 'abc123',
      image: 5,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },
    {
      authId: 'abc123',
      image: 6,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 7,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 8,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 9,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 10,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 11,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 12,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 13,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 14,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 15,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 16,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 17,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 18,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 19,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 20,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 21,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 22,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 23,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 24,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },

    {
      authId: 'abc123',
      image: 25,
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    }
  ]
}
