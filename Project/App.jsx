import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';
import { PRODUCTS } from './products';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add an item to the cart, or increment its quantity if it already exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart completely
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate total items in cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#eaeded', minHeight: '100vh' }}>
      <Header cartCount={totalItems} toggleCart={() => setIsCartOpen(!isCartOpen)} />
      
      <main style={styles.main}>
        <h2 style={styles.heading}>Trending Products</h2>
        <div style={styles.productGrid}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <CartModal 
        cart={cart} 
        isOpen={isCartOpen} 
        toggleCart={() => setIsCartOpen(!isCartOpen)} 
        removeFromCart={removeFromCart} 
      />
    </div>
  );
}

const styles = {
  main: { padding: '20px', maxWidth: '1200px', margin: '0 auto' },
  heading: { fontSize: '22px', marginBottom: '10px' },
  productGrid: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }
};