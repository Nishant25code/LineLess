import { useState } from 'react';
import { Trash2, Minus, Plus, CreditCard, Apple, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import './CartPage.css';

export const CartPage = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('apple');
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    clearCart();
    navigate('/confirmation');
  };

  if (cart.length === 0) {
    return (
      <div className="container flex-col flex-center">
        <div className="mobile-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

          <div className="text-center mt-8">
            <div className="empty-cart-icon mb-6">🛒</div>
            <h2 className="text-h2 mb-2">Your cart is empty</h2>
            <p className="text-body mb-8">Looks like you haven't added anything yet.</p>
            <button className="btn-primary" onClick={() => navigate('/menu')}>Browse Menu</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="mobile-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        <div className="mb-6">
          <h2 className="text-h2">Checkout</h2>
        </div>

        <div className="cart-items-list mb-6">
          {cart.map((item) => (
            <div key={item.id} className="cart-item card mb-4">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h3 className="text-body" style={{ fontWeight: 600 }}>{item.name}</h3>
                <p className="text-accent mb-2" style={{ fontWeight: 700 }}>${item.price.toFixed(2)}</p>
                
                <div className="quantity-controls">
                  <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                    {item.quantity === 1 ? <Trash2 size={14} className="text-danger" /> : <Minus size={14} />}
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="payment-methods mb-6">
          <h3 className="text-body mb-3" style={{ fontWeight: 600 }}>Payment Method</h3>
          <div className="payment-options">
            <button 
              className={`payment-option card ${selectedPayment === 'apple' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('apple')}
            >
              <Apple size={24} />
            </button>
            <button 
              className={`payment-option card ${selectedPayment === 'card' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('card')}
            >
              <CreditCard size={24} />
            </button>
            <button 
              className={`payment-option card ${selectedPayment === 'upi' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('upi')}
            >
              <Smartphone size={24} />
            </button>
          </div>
        </div>

        <div className="checkout-summary card mb-8">
          <div className="summary-row mb-2">
            <span className="text-secondary">Subtotal</span>
            <span style={{ fontWeight: 500 }}>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row mb-4">
            <span className="text-secondary">Tax (8%)</span>
            <span style={{ fontWeight: 500 }}>${tax.toFixed(2)}</span>
          </div>
          <div className="summary-row total-row mb-6">
            <span className="text-h2">Total</span>
            <span className="text-h2 text-accent">${total.toFixed(2)}</span>
          </div>
          
          <button className="btn-primary" onClick={handleCheckout}>
            {selectedPayment === 'apple' ? 'Pay with Apple Pay' : 'Pay Now'}
          </button>
        </div>

      </div>
    </div>
  );
};
