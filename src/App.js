import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" Component={Login} />{" "}
        <Route exact path="/register" Component={Register} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
