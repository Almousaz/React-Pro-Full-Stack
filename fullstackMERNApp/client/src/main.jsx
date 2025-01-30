// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import {thunk} from 'redux-thunk';
// import reducers from './reducer';

// const store = createStore(reducers, compose(applyMiddleware(thunk)));


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//     <App />

//     </Provider>
//   </StrictMode>,
// )


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk'; // Corrected import
// import reducers from './reducer'; // Ensure this points to the correct reducer file

// // Create the Redux store with reducers and middleware
// const store = createStore(reducers, compose(applyMiddleware(thunk)));

// // Render the React app
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import  {configureStore}  from '@reduxjs/toolkit';
import postsReducer from './reducers/posts'; // Update this path as per your structure

// Create the Redux store with Redux Toolkit
const store = configureStore({
  reducer: {
    posts: postsReducer, // Add your reducers here
  },
});

// Render the React app
createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

