
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home-react/Home';
import Cart from './components/cart-react/Cart';
import Login from './components/login_react/Login';
import User from './components/user-react/User';
import Deals from './components/deals_react/Deals';
import ItemDetail from './components/item-details/ItemDetail';
import ProtectedRoutes from './protected/ProtectedRoutes'

function App(props) {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path ='/cart' element={<Cart/>} />
          <Route path ='/login' element={<Login/>} />
          <Route path ='/user' element={<User/>} />
          <Route path ='/deals' element={<ProtectedRoutes/>} />
          <Route path ="/detail/:item" element={<ItemDetail/>} />
        </Routes>
       
      </Router>


    </div>
  );
}

export default App;
