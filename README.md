# argumentum

# API routes (proposal)
### `POST /api/v1/users`

Used on /profile page to add a user to our database

Other requirements: Could this check if the user is already added, and not add if so? *Angus: will try to implement this*

Request:

```json
{
	"auth0Id": "def456",
	"email": "example2@gmail.com",
	"image": 3,
	"username": "PlatoIsMyRoD"
}
```

### `GET /api/v1/users/:authId`

Gets user info from corresponding authId

Response:

```json
{
  "auth0_id": "abc123",
  "email": "example@gmail.com",
  "image": 1,
  "username": "mad-lad-diogenese"
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
      "id": 5,
      "category": "stupid",
      "name": "Freewill",
      "description": "Do we have it?",
      "side0": "Yes",
      "side1": "No"
    },
    {
      "id": 6,
      "category": "stupid",
      "name": "The nature of reality",
      "description": "Do we live in a simulation?",
      "side0": "Yes",
      "side1": "No"
    }
  ],
  "serious": [
    {
      "id": 1,
      "category": "serious",
      "name": "Aliens",
      "description": "Do they exist?",
      "side0": "Yes",
      "side1": "No"
    },
    {
      "id": 2,
      "category": "serious",
      "name": "Vaccines",
      "description": "Are they harmful?",
      "side0": "Yes",
      "side1": "No"
    },
    {
      "id": 7,
      "category": "serious",
      "name": "Vacine Mandates",
      "description": "Should we have them?",
      "side0": "For",
      "side1": "Against"
    }
  ],
  "fun": [
    {
      "id": 3,
      "category": "fun",
      "name": "Dogs Vs Cats",
      "description": "Which is the best pet?",
      "side0": "Dogs",
      "side1": "Cats"
    },
    {
      "id": 4,
      "category": "fun",
      "name": "Batman Vs Superman",
      "description": "Who would win in a fight?",
      "side0": "Batman",
      "side1": "Superman"
    }
  ]
}
```

### `GET /api/v1/userArgs/:authId`

Used on /profile to display any arguments the user might have already added

Response:

```json
{
  "args": [
    {
      "argId": 1,
      "name": "Aliens",
      "description": "Do they exist?",
      "side": "Yes",
      "story": "I was abducted and probed during my OE in rural France."
    },
    {
      "argId": 3,
      "name": "Dogs Vs Cats",
      "description": "Which is the best pet?",
      "side": "Cats",
      "story": "No one ever made a musical about Dogs."
    },
    {
      "argId": 5,
      "name": "Freewill",
      "description": "Do we have it?",
      "side": "No",
      "story": "We are all meat machines."
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
			"argId": 3,
			"side": "Cats",
			"story": "No one ever made a musical about Dogs."
		},
		{
			"argId": 5,
			"side": "No",
			"story": "We are all meat machines."
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
      "username": "mad-lad-diogenese",
      "args": [
        {
          "userId": "abc123",
          "argId": 1,
          "name": "Aliens",
          "description": "Do they exist?",
          "side": "Yes",
          "story": "I was abducted and probed during my OE in rural France."
        },
        {
          "userId": "abc123",
          "argId": 3,
          "name": "Dogs Vs Cats",
          "description": "Which is the best pet?",
          "side": "Cats",
          "story": "No one ever made a musical about Dogs."
        },
        {
          "userId": "abc123",
          "argId": 5,
          "name": "Freewill",
          "description": "Do we have it?",
          "side": "No",
          "story": "We are all meat machines."
        }
      ]
    },
    {
      "authId": "def456",
      "image": 3,
      "username": "PlatoIsMyRoD",
      "args": []
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
  "id": 9
}
```