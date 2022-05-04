import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import Inventory from './components/Pages/Inventory';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/inventory' element={<Inventory/>} />
         <Route path='/inventory' element={<Inventory/>} />
         <Route path='/inventory' element={<Inventory/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
