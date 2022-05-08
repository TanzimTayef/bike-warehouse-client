import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import RequireAuth from "./components/Shared/RequireAuth";
import Blogs from "./components/Pages/Blogs";
import About from "./components/Pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
 import ManageItem from "./components/Pages/ManageItem";
import AddItems from "./components/Pages/AddItems";
 import MyItems from "./components/Pages/MyItems";
import NotFound from "./components/Shared/NotFound";
import ItemDetails from "./components/Pages/ItemDetails";
import Inventories from "./components/Pages/Inventories";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/manage-item" element={<ManageItem />} />
        <Route path="/add-item" element={<AddItems />} />
        <Route path="/my-item" element={<MyItems />} />
        <Route path="/inventories" element={<Inventories />} />
        <Route
          path="/invetores/:inventoresId"
          element={
            <RequireAuth>
              <ItemDetails/>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
