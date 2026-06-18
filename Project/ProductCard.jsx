import React from 'react';

export default function ProductCard({ product, addToCart }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <div style={styles.info}>
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.rating}>⭐ {product.rating}</p>
        <p style={styles.price}>${product.price.toFixed(2)}</p>
        <button style={styles.button} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: { border: '1px solid #ddd', borderRadius: '8px', backgroundColor: 'white', margin: '15px', padding: '15px', width: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  image: { width: '100%', height: '200px', objectFit: 'contain' },
  info: { marginTop: '10px' },
  title: { fontSize: '14px', fontWeight: '500', height: '40px', overflow: 'hidden' },
  rating: { color: '#b12704', fontSize: '12px', margin: '5px 0' },
  price: { fontSize: '18px', fontWeight: 'bold', margin: '5px 0' },
  button: { backgroundColor: '#ffd814', border: '1px solid #fcd200', borderRadius: '20px', padding: '8px', width: '100%', cursor: 'pointer', fontWeight: '500' }
};