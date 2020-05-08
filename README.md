# holidates-cli


**Holidate-cli** is my very first NodeJS "app", it is a command-line based app to show the holidays of a country using [Nager API](https://date.nager.at/Api)

## About

As *Junior developer* learning at  **BeCode**, this project is a small introduction to learning NodeJS and npm before diving into React. 

## Installation

You must have [**node.js**](https://nodejs.org/en/) installed on your machine.

Simply run the following command to install the **holidate-cli**:

	npm install -g @qlfvr/holidates-cli

## Usage

The command use this syntax:

    holidates [country] [year]

If you want to show available  countries, use ls as argument

    holidates ls
    
### 🎉 _Recommanded:_ use `npx`

I can't see why you would want to install **holidate-cli** globally... I recommand you to use `npx` instead....

To do so, instead of using `holidates` command, use `npx @qlfvr/holidates`:

	npx @qlfvr/holidates-cli [country] [year]



