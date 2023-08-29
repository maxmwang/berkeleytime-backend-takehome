# Berkeleytime Fall 2023 Backend Take-Home Project

Primary Role: Backend

Estimated Time to Complete: 1-2 hours

Welcome! I'm Max, the current backend lead at Berkeleytime. Thank you for your continued interest in volunterring at Berkeleytime!

This README.md will be your guide as you work through this take-home project. Please do not be stressed—there is not one right answer to this project. Rather, I want you to be creative and innovative as you approach the problems and challenges that you will face.

As the Berkeleytime codebase is large and complex, this take-home project will also appear as such. Don't fret! Although there seems to be many moving parts, the high level abstraction is straightforward and similarily mirrors that of the official Berkeleytime codebase.

If you are having any issues setting up the development environment or have any other questions/concerns, feel free to reply to the email you received this project from.

## Introduction

At Berkeleytime, the backend stack runs Typescript on a Node server, Apollo GraphQL, and MongoDB. Experience with GraphQL is a plus, but is not expected and not required to complete this project. Experience working with Frontend technologies (at Berkeleytime, the frontend uses React with Typescript) will be helpful, but is not required to complete most backend tasks and will not be needed to complete this project (a functional frontend has been provided to test and visualize your backend).

In this project, the primary stack you will be working with is Typescript on Node, REST API with ExpressJS, and Mongoose with MongoDB. Here are a list of useful resources you may need:

- [Typescript](https://www.typescriptlang.org)
- [Express](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)
- [PokeAPI](https://pokeapi.co)

You may also use any other resources you seem fit.

## Project Outline

You are tasked to create the backend to a website where users can assign Pokemon to players. A functional frontend has been provided. A skeleton backend has been provided.

On the frontend, users can search for a Pokemon. If a Pokemon by the provided name exists, a sprite will appear on the screen. Else, an alert will popup warning the user. Then, the user may assign the selected Pokemon to a player. This will send a request to the backend (more in [API Spec](#api-spec)). The user may also view a player's assigned Pokemons', which will also send a request to the backend.

You are to implement the functionality required in the backend.

### Getting Started

There are some dependencies you will need to first install:

- [Git](https://git-scm.com)
- [Docker Desktop](https://www.docker.com)

After cloning the repository and opening Docker Desktop, run:

```sh
# /berkeleytime-takehome
docker compose up
```

This should start the application. The frontend can be accessed at `loaclhost:3000`, but may be changed to another port. Check the terminal output to see where the frontend is hosted. You will also see the backend and MongoDB instance booted. In the backend container terminal (which can be accessed in Docker Desktop), you should see:

```
Server started on port 5001
MongoDB Connected
```

Nodemon is used to update the backend live as you add/edit files in the `backend` directory.

Note: Docker will burn your battery. When not working on the project, feel free to run:

```sh
# /berkeleytime-takehome
docker compose down
```

This will shutdown the containers. Also, you may quit Docker Desktop as it will also run hot!

## API Spec

On the frontend, the following HTTP requests are called to the backend:

- GET: `/player?player=playerid`
- POST: `/assign`

The frontend expects from a `/player?player=playerid` request a list of Pokemon objects each of the type:

```ts
type MyPokemon = {
  id: number;
  name: string;
  type: string;
  spriteUrl: string;
  generationName: string;
  height: number;
  weight: number;
}
```

An example `/assign` body from the frontend:

```json
{
    "pokemon": [Pokemon object as detailed in the PokeApi Documentation],
    "player": 1
}
```

## Tasks

1. Define the database schemas that you deem required for the functionality of the app.
2. Define any HTTP routes required as per the [API Spec](#api-spec)

These tasks are designed to be open-ended and the backend's skeleton is very minimal. The organization, design, and implementation of your application is being tested.

All of your work should be completed in the `backend/src` directory. In there, you will find a functional `mongoose` instance (connected to a local MongoDB database) and a basic `app` instance from ExpressJS. You may modify the given files in the `backend/src` if you'd like.

Do not modify anything in the `frontend` or `db` directories. Again, your work should be located in `backend/src`. Do not import any new external packages.

## Definition of Done

1. After selecting a Pokemon and assigning it to a player, you should be able to see the Pokemon upon clicking the "View Player #'s Pokemon" button.

## Submission

Upon completion, push your code to a public repository and email the link to the same email you received this project from.
