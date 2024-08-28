# Zania Coding Round 1

## Run the App (local)
Navigate to the root directory and execute the following commands:
```
npm install
```
```
npm start
```

<br/>

## About
This webapp, built with ReactJS and MSW server to simulate REST API integration, makes an initial GET API call to load cards on the landing screen. The data from this first call is cached in the browser, allowing subsequent refreshes to retrieve the cached data instead of making another API call. Users can preview card thumbnails by clicking on them, which opens a modal with the image centered on the screen. The modal can be closed by pressing the escape key or clicking the close button. The app also features drag-and-drop functionality for reordering cards. A reset button at the top center of the screen clears the cached data and reloads the page, triggering a fresh API call to retrieve the latest data.

<br/>

## Folder Structure
#### src/components
This directory contains all reusable custom components, each housed in its own subdirectory. Typically, each subdirectory includes the component file along with its corresponding CSS file.
#### src/hooks
This directory contains all custom hooks, designed to separate business logic from the view components.
#### src/interface
This directory contains all interfaces that define object types.
#### src/mocks
This directory contains files related to REST API mock calls and local server configuration.
#### src/static
This directory contains all static files.

<br/>

## React Portal
This webapp features a reusable modal component that can render any component within it, serving as a wrapper for its child components. Built on the portal concept from the react-dom library, it efficiently handles the display of modals.

<br/>

## Drag and Drop
This webapp utilizes react-dnd to implement drag-and-drop functionality. The card component in the project is both draggable and droppable.

<br/>

## Custom Hook
This project includes a custom hook called useFetch, designed for making REST API calls. Currently, it handles unauthorized GET requests, but it can be further generalized and optimized to support various types of REST API integrations. The hook takes a URL as an argument and returns the following data:
1. loading - A boolean value that is set to true when an API call is awaiting a response.
2. response - This variable holds the response returned by the API call.
3. setResponse - This is a reference to a state update function.
4. fetchData - This is a reference to the function responsible for making the API call and can be invoked as needed throughout the component lifecycle.

<br/>

## Libraries
Following are the external libraries used in the webapp:
1. @dnd-kit/core
2. react-dnd
3. react-dnd-html5-backend
4. msw

<br/>

## References
1. https://react-dnd.github.io/react-dnd/about
2. https://mswjs.io/docs/getting-started