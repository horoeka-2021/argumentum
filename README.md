# argumentum

# API routes (proposal)
### `POST /api/v1/users/profile`
Used on /profile page to add a user to our database

Other requirements: Could this check if the user is already added, and not add if so?

Request:

```json
{
  "authId": "",
  "email": "user@example.com"
}
```

Response (201)

### `GET /api/v1/arguments/profile`
Used on /profile to display the arguments available when a user is editing their profile

Response (200):

```json
{
  "stupid": [
    {
      "id": 1,
      "name": "Does Freewill Exist?",
      "side0": "Yes",
      "side1": "No"
      // "sides" : [
      //   "Yes",
      //   "?",
      //   "No"
      // ]
    }
  ],
  "serious": [
    {
      "id": 2,
      "name": "Vacine Mandates",
      "sides" : [
        "For",
        "?",
        "Against"
      ]
    }
  ],
  "fun": [
    {
      "id": 3,
      "name": "Cats vs Dogs",
      "sides" : [
        "Dogs",
        "?",
        "Cats"
      ]
    }
  ]
}
```

### `GET /api/v1/userArguments/profile/:userid`
Used on /profile to display any arguments the user might have already added

Response:

```json
{
  "arguments": [
    {
      "id": 1,
      "name": "Does freewill exist?",
      "side": "Yes",
      "story": "God gave us freewill!"
    }
  ]
}
```

### `POST /api/v1/userArguments/profile/`
Used on /profile to send the users list of arguments

Request:

```json
{
  "auth0Id": "example123",
  "arguments": [
    {
      "id": 1,
      "side": "Yes",
      "story": "God gave us freewill!"
    }
  ]
}
```

### `GET /api/v1/reception/`
This is used on the /reception page to display other users

```json
{
  "swipeusers": [
      {
        "email": "user@example.com",
        "arguments":  [
          {
            "name": "Freewill",
            "description": "Does it exist",
            "side": "no",
            "why": "Our brains are just (biological) machines. Machines don't have freewill."
          },
          {
            "name": "Cats vs Dogs",
            "description": "Meow or Woof?",
            "side": "Cats",
            "why": "Cats are independant badasses. You need them, they don't need you."
          }
        ]
      },
      {
        "email": "user2@example.com",
        "arguments":  [
          {
            "name": "Freewill",
            "description": "Does it exist",
            "side": "no",
            "why": "Our brains are just (biological) machines. Machines don't have freewill."
          },
          {
            "name": "Cats vs Dogs",
            "description": "Meow or Woof?",
            "side": "Cats",
            "why": "Cats are independant badasses. You need them, they don't need you."
          }
        ]
      }
    ]
  }
}
```
## Potential Routes

### `GET /api/v1/userarguments/:userid`
not sure if this is needed.

Response (200):

```json
{
  "userArguments": [
    {
      "argumentId": 1,
      "side" : "for"
    },
    {
      "argumentId": 2,
      "sides" : "Dogs"
    },
  ]
}
```


### `POST /api/v1/userarguments/`

Request:

```json
{
  "userArguments": [
    {
      "auth0Id": "example1",
      "argumentId": 1,
      "side" : "for"
    },
    {
      "auth0Id": "example2",
      "argumentId": 2,
      "side" : "Dogs"
    },
  ]
}
```

Response (201):


### `GET /api/v1/userarguments/`
Not sure if this is needed.

Response (200):

```json
{
  "userArguments": [
    {
      "id": 1,
      "side" : "for"
    },
    {
      "id": 2,
      "sides" : "Dogs"
    },
  ]
}
```


### `POST /api/v1/arguments`
Not part of MVP currently

Request:

```json
{
  "name": "Vacine Mandates",
  "category": "serious",
  "sides" : [
    "For",
    "?",
    "Against"
  ]
}
```

Response (201):

```json
{
  "id": 3,
  "name": "Vacine Mandates",
  "category": "serious",
  "sides" : [
    "For",
    "?",
    "Against"
  ]
}
```


### `GET /api/v1/arguments`
Not sure if this is needed, or the one below.

Response (200):

```json
{
  "arguments": [
    {
      "id": 1,
      "name": "Does Freewill Exist?",
      "category": "stupid",
      "sides" : [
        "Yes",
        "?",
        "No"
      ]
    },
    {
      "id": 2,
      "name": "Cats vs Dogs",
      "category": "fun",
      "sides" : [
        "Dogs",
        "?",
        "Cats"
      ]
    },
  ]
}
```


### `GET /api/v1/users`
Not sure if this is needed...

Response (200):

```json
{
  "users": [
    {
      "authId": "example123",
      "email": "user@example.com"
    },
    {
      "authId": "example1234",
      "email": "user2@example.com"
    }
  ]
}
```

