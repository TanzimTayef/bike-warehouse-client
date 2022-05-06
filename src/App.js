import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import RequireAuth from "./components/Shared/RequireAuth";
import Inventores from "./components/Pages/Inventores";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/invetores/:inventoresId" element={<Inventores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/invetores" element={<Inventores />} />
      </Routes>
    </div>
  );
}

export default App;
