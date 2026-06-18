import React from 'react';

export default function Header({ cartCount, toggleCart }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>amazon.clone</div>
      <div style={styles.searchContainer}>
        <input type="text" placeholder="Search items..." style={styles.searchInput} />
        <button style={styles.searchButton}>🔍</button>
      </div>
      <div style={styles.cart} onClick={toggleCart}>
        <span style={styles.cartIcon}>🛒</span>
        <span style={styles.cartCount}>{cartCount}</span>
      </div>
    </header>
  );
}

const styles = {
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#131921', padding: '10px 20px', color: 'white', position: 'sticky', top: 0, zIndex: 100 },
  logo: { fontSize: '20px', fontWeight: 'bold', color: '#febd69', cursor: 'pointer' },
  searchContainer: { display: 'flex', flex: 1, margin: '0 20px', maxWidth: '600px' },
  searchInput: { flex: 1, padding: '8px', border: 'none', borderRadius: '4px 0 0 4px', outline: 'none' },
  searchButton: { backgroundColor: '#febd69', border: 'none', padding: '8px 15px', borderRadius: '0 4px 4px 0', cursor: 'pointer' },
  cart: { display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative' },
  cartIcon: { fontSize: '24px' },
  cartCount: { backgroundColor: '#f08804', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '12px', position: 'absolute', top: '-5px', right: '-10px', fontWeight: 'bold' }
};