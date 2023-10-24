//import Labs from "./labs";
//import HelloWorld from './labs/a3/hello-world';
import React, { useContext } from 'react';
import Tuiter from './tuiter';
import { HashRouter } from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import AuthContext from "./tuiter/user/auth-context";
import Project from "./filmdom";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  
  return (
    <Provider store={store}>
    <HashRouter>
          <div className="container-fluid">
            <Routes>
              <Route path="/"         element={<Navigate to="/filmdom/home"/>}/>
              <Route path="/filmdom/*" element ={<Project/>}/>
            </Routes>
          </div>
    </HashRouter>
    </Provider>
  );
}

export default App;
