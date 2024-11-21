import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Blog from './pages/Blog.jsx';
import Carroe from './pages/Carroe.jsx';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/FAQ.jsx';
import Home from './pages/Home.jsx';
import Kidscollection from './pages/Kidscollection.jsx';
import Men from './pages/Men.jsx';
import MyWishlist from './pages/MyWishlist.jsx';
import Privacy from './pages/Privacy.jsx';
import Products from './pages/Products.jsx';
import Promotion from './pages/Promotion.jsx';
import Shop from './pages/Shop.jsx';
import TrakeOrder from './pages/TrakeOrder.jsx';
import Women from './pages/Women.jsx';

const App = () => {
  return (
    <>
      <Navbar />

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
        <Route path="/shop" element={<Shop />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/products" element={<Products />} />
      </Routes>

    <Footer />
    </>
  );
};

export default App;