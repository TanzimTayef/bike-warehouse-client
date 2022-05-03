import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
