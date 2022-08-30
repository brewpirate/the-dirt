# The Dyrt Tech Challenge

You just started working for a new agency. You have to take over a project for a company called "The Dirt" (with an "i"). A prior coworker made some progress on the project but left things half finished. Your first task is making the app feature complete.

## App Description

"The Dirt" wants a single page app where you can search for a campground, select that campground, and view some basic information about the campground. They are a very new company and going to pilfer the data from their direct competitor "The Dyrt".

## Requirements

1. Data is loaded from The Dyrt's autocomplete endpoint as a user types a query into the search input.
2. Each time a user's mouse enters the dropdown menu an analytics event is logged with an updated list of the results. 
3. When a user selects a campground from the dropdown menu, the campground is loaded and some basic information is displayed.

### Extra Credit

1. Let a user navigate the dropdown with the keyboard.
2. Limit unneeded re-renders.
3. Make the app responsive.

## On The Real

The way things stand now there are some pretty glaring bugs in the app and a handful of places that could use some optimization. We want to see how you approach buggy code and what things you really care about. There is no set design for requirement three so use your creativity.

## Development Environment

### Requirements
- Nodejs
- Yarn

### Initial Setup
1. From repo root run the following `yarn install`
2. Run the following command to enable the git pre-commit hook `yarn run prepare`
3. Make a copy of `.env.sample` and rename to `.env`
4. Update values in `.env` to the correct values.

```env
REACT_APP_THE_DYRT_API_URL=http://localhost:3001
REACT_APP_GA_TRACKING_ID=UA-000000-01
REACT_APP_GA_TRACKING_ENABLED=false
```

### Run "the dirt"
1. Start the development api server `yarn run dev-api`
2. Start the development server`yarn run start`


### Local Development API
- localhost:3000


## Linting
### Git Hook
Please ensure you have installed Husky and ran `yarn run prepare`. Each commit to this repo will be linted using ESlint and Stylelint.

### Manual Run
Run lint without changes
> `yarn run lint`

Run lint and fix errors
> `yarn run lint:fix`

### ESLint
#### Extended Rules
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [react-app](https://www.npmjs.com/package/eslint-config-react-app)
- [react-app/jest](https://www.npmjs.com/package/eslint-config-react-app)

#### Plugins
- [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

#### Commands
Run eslint without changes
> `eslint --fix-dry-run src/`

Run eslint and fix errors
> `eslint --fix src/`


### Stylelint
#### Extended Rules
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss#readme)
- [stylelint-config-prettier-scss](https://github.com/prettier/stylelint-config-prettier-scss#readme)
#### Plugins
- [stylelint-selector-bem-pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern#readme)

#### Commands
Run lint without changes
> `stylelint "**/*.scss"`

Run lint and fix errors
> `stylelint "**/*.scss" --fix`


## From Daniel
Hello Friendly Developer! This was a fun exercise especially since I have been working with Vue/Nuxt over the last 4 years so there was a lot to learn. Hopefully I was able to show off my other skills by setting up tooling, refactoring code and approaching issues the React way (Well what I could Google). I attempted to work thought this project by creating pull requests and leaving the git log pristine warts and all, so I encourage you to review the git history. 

I look forward to chatting with you about my changes and hearing more about The ~~Dirt~~ Dyrt. - Daniel
