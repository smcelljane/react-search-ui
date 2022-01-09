
# Getting Started with Create React App

This project was bootstrapped with [Create React App].

# User Interface Design

Providing Responsive UI
Using SCSS
Using Bootstrap 5.0

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Test Cases Rendering and Query

Test cases written.

  Search Component Renders
    ui renders
      √ ui renders correctly 
    test data renders
      √ renders "no clients" when there are no clients
      √ renders clients 

  Input Value
    update query
      √ updates onchange 
    with empty query
      √ does not trigger handleChange function
    with data inside query
      √ triggers handleChange function 
      √ filtered search items by name
      √ filtered search items by policy no 
