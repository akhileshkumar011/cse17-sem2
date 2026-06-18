import React from 'react';

export default function CartModal({ cart, isOpen, toggleCart, removeFromCart }) {
  if (!isOpen) return null;

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={styles.overlay}>
      <div style={styles.sidebar}>
        <button style={styles.closeBtn} onClick={toggleCart}>Close ✕</button>
        <h2>Shopping Cart</h2>
        <hr />
        
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <img src={item.image} alt={item.title} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                  <p style={styles.itemTitle}>{item.title}</p>
                  <p>${item.price} x {item.quantity}</p>
                  <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <h3 style={styles.total}>Total: ${totalPrice.toFixed(2)}</h3>
            <button style={styles.checkoutBtn} onClick={() => alert('Proceeding to checkout!')}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'flex-end' },
  sidebar: { width: '350px', backgroundColor: 'white', height: '100%', padding: '20px', display: 'flex', flexDirection: 'column', boxShadow: '-2px 0 5px rgba(0,0,0,0.2)', overflowY: 'auto' },
  closeBtn: { alignSelf: 'flex-start', background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', marginBottom: '20px' },
  cartItem: { display: 'flex', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' },
  itemImage: { width: '60px', height: '60px', objectFit: 'contain' },
  itemDetails: { marginLeft: '10px', flex: 1 },
  itemTitle: { fontSize: '12px', fontWeight: 'bold', margin: 0 },
  removeBtn: { background: 'none', border: 'none', color: '#0066c0', cursor: 'pointer', fontSize: '12px', padding: 0, textDecoration: 'underline' },
  total: { marginTop: '20px', textAlign: 'right' },
  checkoutBtn: { backgroundColor: '#ffd814', border: '1px solid #fcd200', borderRadius: '8px', padding: '10px', width: '100%', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' }
};