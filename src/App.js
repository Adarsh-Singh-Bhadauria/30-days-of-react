import './App.css';
import About from './components/About';
import CartContainer from './components/CartContainer';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Products from './components/Products';
import TodoList from './components/TodoList';
import UserData from './components/UserData';
import {Routes, Route} from 'react-router-dom';

function App() {

  function toggleTheme(){
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className='dark:bg-slate-800'>
      <Navbar toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UserData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/cartcontainer" element={<CartContainer />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
