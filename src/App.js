import React, { useContext } from 'react';
// Handle routing using hash-based URLS
import { HashRouter } from "react-router-dom";
// Define the paths and corresponding components
// Navigate to redirect from one path to another
import {Routes, Route, Navigate} from "react-router";
import Project from "./filmdom";
// Wrap the app's components with the redux store context
import { Provider } from "react-redux";
// Configured redux store for state management
import { store } from "./store";

// Define the UI for app's root
function App() {
  
  return (
    // Provide redux store context to all nested components
    <Provider store={store}>
    <HashRouter>
            <Routes>
              <Route path="/"         element={<Navigate to="/filmdom/home"/>}/>
              <Route path="/filmdom/*" element ={<Project/>}/>
            </Routes>
    </HashRouter>
    </Provider>
  );
}

export default App;
