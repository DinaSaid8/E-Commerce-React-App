
import './App.css';
import CounterContainer from './components/CounterContainer/CounterContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import NavComponent from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NotFound from './components/NotFound';
import WelcomePage from './components/WelcomePage';
import Home from './components/home/home';

function App() {

  const [count, setCount] = useState(0);
  let incrementCount = (e) => {
    setCount((prev) => prev + 1);
    console.log(count);

  };
  return (
    <BrowserRouter>
      <NavComponent count={count}/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/counter' element={<CounterContainer />} />
        <Route path='/' element= {<WelcomePage/>}/>
        <Route path='/products' element={<ProductList setCount={incrementCount} />} />
        <Route path='/details/:id' element={<ProductDetails setCount={incrementCount} />} />
        <Route path='/Cart' element={<Cart count={count} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    
      </BrowserRouter>
  );
}

export default App;
