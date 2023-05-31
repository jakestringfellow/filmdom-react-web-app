import Labs from "./labs";
import HelloWorld from './labs/a3/hello-world';
import Tuiter from './tuiter';
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router";
import { Navigate } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/"         element={<Navigate to="/labs"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
