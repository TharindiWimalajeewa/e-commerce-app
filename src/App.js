import './App.css';
import Navbar from './Components/Nav bar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import banner_top from './Components/Assets/banner.jpg'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        {/* Routes for the main shop and categories */}
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={banner_top} category='men'/>}/>
        <Route path='/women' element={<ShopCategory banner={banner_top} category='women' />}/>
        <Route path='/kids' element={<ShopCategory banner={banner_top} category='kids' />}/>

        {/*route for individual product details */}
        <Route path="/product/:productId" element={<Product />} />

        {/* Routes for cart and user authentication */}
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
