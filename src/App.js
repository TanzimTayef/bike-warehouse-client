import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import RequireAuth from "./components/Shared/RequireAuth";
import Inventores from "./components/Pages/Inventores";
import Blogs from "./components/Pages/Blogs";
import About from "./components/Pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ManageItem from "./components/Pages/ManageItem";
import AddItems from "./components/Pages/AddItems";
import MyItems from "./components/Pages/MyItems";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/manage-item" element={<ManageItem />} />
        <Route path="/add-item" element={<AddItems />} />
        <Route path="/my-item" element={<MyItems />} />  
        <Route path="/invetores/:inventoresId" element={<Inventores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
     
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
