# Berkeleytime Spring 2024 Backend Take-Home Project

Role: Backend Developer

Estimated Time to Complete: 1-2 hours

Welcome!
This is the take-home project for the backend developer position at Berkeleytime.
Thank you for your continued interest in volunteering with us!

This README.md will be your guide as you work through this take-home project.
Remember, there is no one right answer—we want you to be creative and innovative as you approach these problems and challenges.

If you are having any issues setting up the development environment or have any other questions/concerns, feel free to reply to the email you received this project invite from.

## Introduction

It is Pokémon day! Use the [PokeAPI](https://pokeapi.co) to build a backend that allows users to see a quick preview of a Pokémon, register themselves as a Pokémon trainer, and manage the Pokémon in their inventory. These requirements are detailed in the [Tasks](#tasks) section.

## Implementation

You are given two implementation options:

1. Use the given TypeScript template.
2. Use your preferred template.

### TypeScript Template

The primary stack is Typescript on Node running an Express server.
There is a key-value store implemented at `db/db.ts`.
Here are a list of useful resources you may need:

- [Express](https://expressjs.com)
- [Typescript](https://www.typescriptlang.org/docs)

Please **DO NOT** fork the repository.
We don't want anyone to be able to easily look up your solution!
Instead, create your own private copy of the repository.
Submission details are detailed in the [Submission and Scoring](#submission-and-scoring) section.
Use the following commands to get up and running:

```sh
# /berkeleytime-backend-takehome
npm install
npm run dev
```

### Preferred Template

You are free to use any stack you would like.
Please limit programming languages to common general purpose languages, such as Python, Java, etc.
You must implement your own key-value store abstraction that matches the TypeScript template's implementation's functionality.

### Datastore

You are required to use/implement a key-value store abstraction.
Please use this implementation for all data storage needs.

## Tasks

All data can be found using the [PokeAPI](https://pokeapi.co).

1. Implement `GET /api/pokemon?name=X`, which respond with a quick preview containing the name of the pokemon, the name of each ability the pokemon has, and the name and base value of each stat the pokemon has. For example, given `name=ditto`, your server should respond:
    ```json
    {
        "name": "ditto",
        "abilities": [
            "limber",
            "imposter"
        ],
        "stats": {
            "hp": 48,
            "attack":48,
            "defense": 48,
            "special-attack": 48,
            "special-defense": 48,
            "speed": 48
        }
    }
    ```
2. Implement `POST /api/player`, which registers a player. An example request body is:
    ```json
    {
        "username": "George"
    }
    ```
3. Implement endpoints at `/api/player/pokemon?player=X`, which allow players to view, add, and remove Pokemon to a player's inventory. You must implement all features with the same route. For adding and removing, you may expect a request body of the form:
    ```json
    {
        "pokemon": "ditto"
    }
    ```

## Submission and Scoring

Before you submit, ensure you have completed and tested all the required tasks above.

To submit, invite me (maxmwang) to your private repository on GitHub with your committed solution and make sure to send me an email with a link to your repository.

Your final submission will be tested with an autograder for basic functionality, but the source code will also be analyzed.
Will be evaluating your implementation on code quality and organization, API design, and how edge/error cases are handled.
The autograded portion will be weighed less.
If you use your own tech stack, your datastore implementation will also be analyzed.
