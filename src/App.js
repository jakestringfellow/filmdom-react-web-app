import Labs from "./labs";
import HelloWorld from './labs/a3/hello-world';
import Tuiter from './tuiter';
import { HashRouter } from "react-router-dom";
import {Routes, Route} from "react-router";
import { Navigate } from "react-router";
import AuthContext from "./tuiter/user/auth-context";
import Project from "./project";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
    <HashRouter>
      {/* <AuthContext> */}
          <div className="container-fluid">
            <Routes>
              <Route path="/"         element={<Navigate to="/project"/>}/>
              <Route path="/hello"    element={<HelloWorld/>}/>
              <Route path="/labs/*"   element={<Labs/>}/>
              <Route path="/tuiter/*" element={<Tuiter/>}/>
              <Route path="/project/*" element ={<Project/>}/>
            </Routes>
          </div>
      {/* </AuthContext> */}
    </HashRouter>
    </Provider>
  );
}

export default App;
