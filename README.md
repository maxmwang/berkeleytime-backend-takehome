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

In this project, the primary stack you will be working with is Typescript on Node and a REST API built with ExpressJS.
Here are a list of useful resources you may need:


- [Express](https://expressjs.com)
- [Typescript](https://www.typescriptlang.org/docs)

You may also use any other resources and tools you seem fit.

## Project Outline

It is Pokémon day! Use the [PokeAPI](https://pokeapi.co) to build a backend that allows users to see a quick preview of a Pokémon, register themselves as a Player and manage the Pokémon in their inventory, and search for other players who own a certain Pokémon. These requirements are detailed in the [Tasks](#tasks) section.

### Getting Started

Please **DO NOT** fork the repository. We don't want anyone to be able to easily look up your solution! Instead, create your own private copy of the repository. I will explain how to send me your submission at the end. Use the following commands to get up and running:

```sh
# /berkeleytime-takehome
npm install
```

To start the application, run:

```sh
# /berkeleytime-takehome
npm run dev
```

### Database

In `src/db`, you will find an implementation of a simple key-value store database. Please use this for all data storage needs in this project. You do not need to understand how its implemented, just how to use its interface. Also, please do not modify the `db` file. 

## Tasks

While working on these tasks, keep in mind that we will be evaluating your implementation on code quality and organization, API design, and how edge/error cases are handled. There will be situations where you will need to determine the best approach and implementation details using your own discretion.

Your code should reside in `src`. Do not add/modify files outside of `src`, however feel free to organize your code into files and directories inside `src` as you see fit. Additionally, do not install/uninstall any other packages.

1. Using the [PokeAPI](https://pokeapi.co), implement the first requirement: given a request containing the name of a Pokémon, your application should respond with a quick preview. This quick preview should contain:
    - name of the pokemon
    - name of each ability the pokemon has
    - value of each stat the pokemon has
2. Users should be able to create players, as well as add, remove, and view Pokemon to each player's inventory. Implement endpoints that allow them to do these actions.
3. Finally, users want to see which player(s) have a Pokemon. Implement an endpoint to get all the players with a certain Pokemon.

## Submitting

Before you submit, ensure you have completed and tested all the required tasks above.

To submit, invite me (maxmwang) to your private repository on GitHub with your committed solution and make sure to send me an email with a link to your repository.
