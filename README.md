# Berkeleytime Fall 2023 Backend Take-Home Project

Primary Role: Backend

Estimated Time to Complete: 1-2 hours

Welcome!
This is the take-home project for the backend developer position at Berkeleytime.
Thank you for your continued interest in volunterring with us!

This README.md will be your guide as you work through this take-home project.
Please do not be stressed—there is not one right answer to this project.
Rather, I want you to be creative and innovative as you approach the problems and challenges that you will face.

If you are having any issues setting up the development environment or have any other questions/concerns, feel free to reply to the email you received this project from.

## Introduction

In this project, the primary stack you will be working with is Javascript on Node and REST API with ExpressJS.
Here are a list of useful resources you may need:


- [Express](https://expressjs.com)
- [MDN's Javascript Documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

You may also use any other resources and tools you seem fit.

## Project Outline

It is Pokémon day! Use the [PokeAPI](https://pokeapi.co) to build a backend that allows users to see a quick preview of a Pokémon, register themselves as a Player, add Pokémon to their Player's inventory, and view the quick previews for each Pokémon in their inventory. These requirements are detailed in the [Tasks](#tasks) section.

### Getting Started

After cloning the repository, run:

```sh
# /berkeleytime-takehome
npm install
```

To start the application, run:

```sh
# /berkeleytime-takehome
npm run dev
```

In `src/db`, you will find a mock key-value store database that you will need to use. Use this to store any data necessary for the application.

## Tasks

1. Using the [PokeAPI](https://pokeapi.co), implement the first requirement. Given a request containing the name of a Pokémon, your application should respond with a quick preview. This quick preview should contain:
    - id
    - name
    - types
    - base stat
    - weight
    - height
    - abilities
2. A user should be able to register themselves as a Player in our application. Our application needs to store some necessary information about our user in their Player profile, including (all given by the user):
    - username
    - favorite color
3. Players want to have their own Pokémon. Multiple players can own the same Pokémon. A user will request to own Pokémon by name.
4. Players want to know what Pokémon they and their friends have. A player might ask your application for all the Pokémon, along with a quick preview of each (as defined in step 1), owned by some player given a username.

Your code should reside in `src`. Do not add/modify files outside of `src`. Additionally, do not install/uninstall any other packages.

## Submission

Upon completion, push your code to a public repository and email the link to the same email you received this project from.
