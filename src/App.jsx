import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Search from './components/Search.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Blog from './pages/Blog.jsx';
import CactusStore from './pages/CactusStore.jsx';
import Carroe from './pages/Carroe.jsx';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/FAQ.jsx';
import Home from './pages/Home.jsx';
import Kidscollection from './pages/Kidscollection.jsx';
import Men from './pages/Men.jsx';
import MyWishlist from './pages/MyWishlist.jsx';
import PlantStore from './pages/PlantStore.jsx';
import Privacy from './pages/Privacy.jsx';
import Products from './pages/Products.jsx';
import Promotion from './pages/Promotion.jsx';
import Shop from './pages/Shop.jsx';
import TrakeOrder from './pages/TrakeOrder.jsx';
import Women from './pages/Women.jsx';



const App = () => {
  const location = useLocation();
// const {Products}  = useContext(ShopContext);

  useEffect(() => {
    const pageTitles = {
      '/': 'Simply Nature - Get The Best Plants',
      '/about': 'About Us - Simply Nature',
      '/contact': 'Contact Us - Simply Nature',
      '/product/:productid': ` ${Products.name} - Simply Nature`,
      '/cart': 'Your Cart - Simply Nature',
      '/placeorder': 'Place Order - Simply Nature',
      '/login': 'Login - Simply Nature',
      '/register': 'Register - Simply Nature',
      '/order': 'Your Orders - Simply Nature',
      '/collection': 'Collection - Simply Nature',
    };
    const title = pageTitles[location.pathname] || 'E-commerce App';
    document.title = title;
  }, [location]);

  

  return (
    <>
      <Navbar />
<Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/babycollection" element={<Kidscollection />} />
        <Route path="/carriers" element={<Carroe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/men" element={<Men />} />
        <Route path="/my-wishlist" element={<MyWishlist />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/trake-order" element={<TrakeOrder />} />
        <Route path="/women" element={<Women />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/product/:productid" element={< Products />} />
        <Route path="plant-store-02/product-category/plants/" element={< PlantStore />} />
        <Route path="plant-store-02/product-category/cactus/" element={< CactusStore />} />
      </Routes>

    <Footer />
    </>
  );
};

export default App;