import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/home/Header';
import Footer from './components/home/Footer';
import Home from './components/home/Index';
import ListProduct from './components/product/ListProduct';
import LoginForm from './components/login/LoginForm';
import Cart from './components/cart/Cart';
import DetailProduct from './components/product/DetailProduct';
import OrderHistory from './components/order/OrderHistory';
import { handleLogin } from './service/AccountService';
import Customer from './components/Customer';



function App() {
  handleLogin();
  return (
   <>
   <Routes>
    {/* <Route path='/header' element={<Header />}/> */}
    <Route path='/footer' element={<Footer />}/>
    <Route path='/' element={<Home />}/>
    <Route path='/product' element={<ListProduct />}/>
    

    <Route path='/login' element={<LoginForm />}/>  
   
    <Route path='/cart'  element={<Cart />}/>
    <Route path='/detail/:id' element={<DetailProduct />} />
    <Route path='/history' element={<OrderHistory />} />
    <Route path='/customer' element={<Customer />} />
   </Routes>
   </>
  )
}

export default App;
