![Logo](src/pictures_logo.svg)

[![Deploy Project](https://github.com/sopra-fs21-group-26/client/actions/workflows/deploy.yml/badge.svg)](https://github.com/sopra-fs21-group-26/client/actions/workflows/deploy.yml) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=sopra-fs21-group-26_client&metric=ncloc)](https://sonarcloud.io/dashboard?id=sopra-fs21-group-26_client)

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/dashboard?id=sopra-fs21-group-26_client)
## Introduction

In Pictures, each player simultaneously tries to copy a picture with one of five different materials: building blocks, sticks and stones, icon cards, color cubes, or a drawable string.
<br/><br/>
This project was developed as part of a software development course @ the University of Zurich.

## Technologies Used

The frontend was fully developed using the framework React.JS, with the help of additional small React libraries, such as:
* styled-components
* react-icons
* react-canvas-draw
* react-sound
* react-tooltip
* reactablejs

Check package.json for additional information on dependencies.

InteractJS was used with the reactablejs wrapper for set creation.

## High Level Components

The most important components in this project are the picture grid, which is 
generated in [Game.js](src/components/game/Game.js), the reactablejs recreation environments, one of which can be seen in [Recreate.js](src/components/game/Recreate.js),
as well as the guessing environment, as can be seen in [GuessScreen.js](src/components/game/GuessScreen.js).
<br>
<br>
The picture grid represents the game board from which players will be assigned a picture to recreate in the recreation environment. The pictures of these recreations are then 
displayed in the guess screen for the players to submit their guesses.

## Launch & Deployment

For your local development environment you'll need Node.js >= 8.10. You can download it [here](https://nodejs.org). All other dependencies including React get installed with:

### `npm install`

This has to be done before starting the application for the first time (only once).

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console (use Google Chrome!).

### `npm run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> For macOS user running into an 'fsevents' error: https://github.com/jest-community/vscode-jest/issues/423

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Illustrations

PLACEHOLDER

## Roadmap

If you want to contribute to the project, you can find a selection of missing features below:

* Functioning ELO scoring system
* New kinds of sets
* Other game modes with time limits

## Authors and Acknowledgment

**Project Lead & Frontend:** Maximilian Jonescu (https://github.com/maxi1123)  
**Frontend & Game Flow:** Arjun Villanthanam (https://github.com/arjvillan)  
**Backend Lead & Testing:** Max Zehnder (https://github.com/mzehnde)  
**Backend Support:** Jakob Schmid (https://github.com/InfoYak)  
<br/>
Special thanks to our supervisor, Remy Egloff, for always lending a supportive hand: https://github.com/regloff

## License

![license.png](license.png)

Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
<br/>
<br/>
Please find the license agreement by following the link below:  
https://creativecommons.org/licenses/by-nc/4.0/legalcode








