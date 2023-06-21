import Labs from "./labs";
import HelloWorld from './labs/a3/hello-world';
import Tuiter from './tuiter';
import { HashRouter } from "react-router-dom";
import {Routes, Route} from "react-router";
import { Navigate } from "react-router";
import AuthContext from "./tuiter/user/auth-context";

function App() {
  return (
    <HashRouter>
      <AuthContext>
          <div className="container">
            <Routes>
              <Route path="/"         element={<Navigate to="/labs/a3"/>}/>
              <Route path="/hello"    element={<HelloWorld/>}/>
              <Route path="/labs/*"   element={<Labs/>}/>
              <Route path="/tuiter/*" element={<Tuiter/>}/>
            </Routes>
          </div>
      </AuthContext>
    </HashRouter>
  );
}

export default App;
