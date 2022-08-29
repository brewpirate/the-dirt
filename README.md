# The Dyrt Tech Challenge

You just started working for a new agency. You have to take over a project for a company called "The Dirt" (with an "i"). A prior coworker made some progress on the project but left things half finished. Your first task is making the app feature complete.

## App Description

"The Dirt" wants a single page app where you can search for a campground, select that campground, and view some basic information about the campground. They are a very new company and going to pilfer the data from their direct competitor "The Dyrt".

## Requirements

~~1.Data is loaded from The Dyrt's autocomplete endpoint as a user types a query into the search input.~~ 2. Each time a user's mouse enters the dropdown menu an analytics event is logged with an updated list of the results. 3. When a user selects a campground from the dropdown menu, the campground is loaded and some basic information is displayed.

### Extra Credit

1. Let a user navigate the dropdown with the keyboard.
2. Limit unneeded re-renders.
3. Make the app responsive.

## On The Real

The way things stand now there are some pretty glaring bugs in the app and a handful of places that could use some optimization. We want to see how you approach buggy code and what things you really care about. There is no set design for requirement three so use your creativity.

## Development Environment

## Requirements

- Nodejs
- Yarn

### Initial Setup

1. From repo root run the following `yarn install`
2. Run the following command to enable the git precommit hook `yarn run prepare`
3. Make a copy of `.env.sample` and rename to `.env`
4. Update values in `.env` and ensure

### Run

- `yarn run dev-api`
- `yarn run start`

### Local Development API

- localhost:3000

## Daniel Notes

### Questions

- No analytics package defined in package.json, find in source

### Plan of attack

#### Initial

- ~~.gitignore~~
- ~~editor config~~
- ~~package updates~~
- ~~eslint rules~~
- ~~lint the codebase~~ Warnings. Will resolve in Phase 1

#### Phase 1

- ~~Run current code~~
- ~~Triage current code~~
- ~~Research React :)~~
- ~~Mock api calls to "Dyrt"~~ ~~~mock data provided in `src/data/searchResults.js`~~~
- ~~Use .env file to manage env urls, use Json Server to serve mock responses from the dyrt~~

#### Phase 2

- React Asset structure?
- Each time a user's mouse enters the dropdown menu an analytics event is logged with an updated list of the results.
- When a user selects a campground from the dropdown menu, the campground is loaded and some basic information is displayed.
  - Keyboard navigation?
- Responsive site, Bootstrap? :/ Quick and dirty.

#### Phase 3

- Limit unneeded re-renders. This will be fun to learn
- Eslint rules for Jest, testing would be nice...
-
