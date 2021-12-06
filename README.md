# argumentum

# API routes (proposal)
### `POST /api/v1/users`

Used on /profile page to add a user to our database

Other requirements: Could this check if the user is already added, and not add if so? *Angus: will try to implement this*

Request:

```json
{
  "authId": "abc123",
  "userName": "Diogenes69", //usernames as stretch
  "image": 1,
  "email": "user@example.com"
}
```

### `GET /api/v1/users/:authId`

Gets user info from corresponding authId

Response:

```json
{
  "userName": "Diogenes69", //usernames as stretch
  "email": "user@example.com"
}
```

Response (201)

### `GET /api/v1/args`

Used on /profile to display the arguments available when a user is editing their profile

Response (200):

```json
{
  "stupid": [
    {
      "id": 1,
      "name": "Does Freewill Exist?",
      "description": "Does it exist?",
      "side0": "Yes",
      "side1": "No"
    }
  ],
  "serious": [
    {
      "id": 2,
      "name": "Vacine Mandates",
      "description": "Are they neccesarry?",
      "side0": "For",
      "side1": "Against"
    }
  ],
  "fun": [
    {
      "id": 3,
      "name": "Cats vs Dogs",
      "description": "Meow or Woof?",
      "side0": "Cats",
      "side1": "Dogs"
    }
  ]
}
```

### `GET /api/v1/userArgs/:authId`

Used on /profile to display any arguments the user might have already added

Response:

```json
{
  "arguments": [
    {
      "argId": 1,
      "name": "Freewill",
      "description": "Does it exist?",
      "side": 0,
      "story": "God gave us freewill!"
    }
  ]
}
```

### `POST /api/v1/userArgs`

Used on /profile to send the users list of arguments

Request:

```json
{
  "authId": "abc123",
  "args": [
    {
      "argId": 1,
      "side": 0,
      "story": "God gave us freewill!"
    }
  ]
}
```

### `GET /api/v1/userArgs`

This gets a list of users and their corresponding arguments.

The side property needs to be mape the userArg side to the the corresponding side string value.

This is used on the /reception page to display other users

*note: will need a GET route to get user info from authId to retireve a users email when selected. Extra security as a stretch.*

```json
{
  "swipeusers": [
    {
      "authId": "abc123",
      "image": 1,
      "args":  [
        {
          "argId": 0,
          "name": "Freewill",
          "description": "Does it exist?",
          "side": "No",
          "story": "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          "argId": 1,
          "name": "Cats vs Dogs",
          "description": "Meow or Woof?",
          "side": "Cats",
          "story": "Cats are independant badasses. You need them, they don't need you."
        }
        ]
      },
    {
      "authId": "def456",
      "image": 2,
      "args":  [
        {
          "argId": 0,
          "name": "Freewill",
          "description": "Does it exist?",
          "side": "Yes",
          "story": "Denial of free will is simply an abdication of personal responsibility."          },
        {
          "argId": 1,
          "name": "Cats vs Dogs",
          "description": "Meow or Woof?",
          "side": "Dogs",
          "story": "Dogs are loyal and affectionate animals"
        }
      ]
    }
  ]
}
```
## Potential Routes

### `POST /api/v1/arguments`
Not part of MVP currently (but will be necessary for imediate stretch)

Request:

```json
{
  "name": "Vacine Mandates",
  "description": "Should we have them?",
  "category": "serious",
  "side0" : "For",
  "side1": "Against"
}
```

Response (201):
response body may or may not be neccesary
```json
{
  "id": 3,
  "name": "Vacine Mandates",
  "description": "Should we have them?",
  "category": "serious",
  "side0" : "For",
  "side1": "Against"
}
```