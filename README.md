# argumentum

# API routes (proposal)

### `GET /api/v1/users`

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

### `POST /api/v1/users`

Request:

```json
{
  "authId": "",
  "email": "user@example.com"
}
```

Response (201)


### `GET /api/v1/arguments`

Response (200):

```json
{
  "arguments": [
    {
      "id": 1,
      "name": "Free will",
      "description": "example description",
      "sides" : [
        "for",
        "?",
        "against"
      ]
    },
    {
      "id": 2,
      "name": "Cats vs Dogs",
      "description": "example description",
      "sides" : [
        "Dogs",
        "?",
        "Cats"
      ]
    },
  ]
}
```

### `POST /api/v1/arguments`

Request:

```json
{
  "name": "Vacine Mandates",
  "description": "example description",
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
  "description": "example description",
  "sides" : [
    "For",
    "?",
    "Against"
  ]
}
```


### `GET /api/v1/userarguments/`

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



### `GET /api/v1/userarguments/:userid`

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

### `GET /api/v1/swipeusers/`

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