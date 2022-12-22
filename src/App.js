import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  } from 'react-router-dom';

import './App.css';
import logo from './img/logo.png';
import icon from './img/cart-i.png';
import Contact from './Contact';
import Delivery from './Delivery';
import Home from './Home';
import Recipes from './Recipes';
import Shop from './Shop';
import CartIcon from './CartIcon';


function App() {
  return ( <Router>
    <nav>
      <img src={logo} alt='logo' width= '80'/>
      <Link className='link' to = '/'>Главная</Link>
      <Link className='link' to = '/Shop'>Товары</Link>
      <Link className='link' to = '/Delivery'>Доставка</Link>
      <Link className='link' to = '/Contact'>Контакты</Link>
      <Link className='link' to = '/Recipes'>Рецепты</Link>
      <Link className='link' to = 'CartIcon'><img src={icon} alt='icon' width= '60'/></Link>
    </nav>

    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Shop' element = {<Shop/>}/>
      <Route path='/Delivery' element = {<Delivery/>}/>
      <Route path='/Contact' element = {<Contact/>}/>
      <Route path='/Recipes' element = {<Recipes/>}/>
      <Route path='/CartIcon' element = {<CartIcon/>}/>
    </Routes>
  </Router>
   
  );
}

export default App;
