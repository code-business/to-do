import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Data from "./components/data/data";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Login} />{" "}
        <Route exact path="/register" Component={Register} />{" "}
        <Route exact path="/data" Component={Data} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
