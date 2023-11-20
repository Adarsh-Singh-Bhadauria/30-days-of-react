import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Products from './components/Products';
import TodoList from './components/TodoList';
import UserData from './components/UserData';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<UserData/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/todo" element={<TodoList/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
