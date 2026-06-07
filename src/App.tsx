import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LocaleProvider } from './context/LocaleContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';

/**
 * Ensures page scroll is reset on route changes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder Pages (to be implemented in later phases)
const Home = () => <div className="p-8">Home Page (Luxury Spices)</div>;
const Categories = () => <div className="p-8">Categories</div>;
const Products = () => <div className="p-8">Products</div>;
const ProductDetails = () => <div className="p-8">Product Details</div>;
const Cart = () => <div className="p-8">Shopping Cart</div>;
const Checkout = () => <div className="p-8">Checkout</div>;
const NotFound = () => <div className="p-8 text-center text-2xl font-serif">404 - Essence Not Found</div>;

function App() {
  return (
    <HelmetProvider>
      <LocaleProvider>
        <ThemeProvider>
          <CartProvider>
            <Router>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:slug" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </CartProvider>
        </ThemeProvider>
      </LocaleProvider>
    </HelmetProvider>
  );
}

export default App;
