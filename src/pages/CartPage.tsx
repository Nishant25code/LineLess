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
      <div className="cart-container-empty">
        <div className="cart-wrapper-empty">

          <div className="cart-empty-state">
            <div className="cart-empty-icon">🛒</div>
            <h2 className="cart-empty-title">Your cart is empty</h2>
            <p className="cart-empty-subtitle">Looks like you haven't added anything yet.</p>
            <button className="cart-action-btn" onClick={() => navigate('/menu')}>Browse Menu</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        
        <div className="cart-header">
          <h2 className="cart-title">Checkout</h2>
        </div>

        <div className="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                
                <div className="cart-quantity-controls">
                  <button className="cart-qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                    {item.quantity === 1 ? <Trash2 size={14} className="cart-qty-icon-danger" /> : <Minus size={14} className="cart-qty-icon" />}
                  </button>
                  <span className="cart-qty-value">{item.quantity}</span>
                  <button className="cart-qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                    <Plus size={14} className="cart-qty-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-payment-methods">
          <h3 className="cart-payment-title">Payment Method</h3>
          <div className="cart-payment-options">
            <button 
              className={`cart-payment-option ${selectedPayment === 'apple' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('apple')}
            >
              <Apple size={24} />
            </button>
            <button 
              className={`cart-payment-option ${selectedPayment === 'card' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('card')}
            >
              <CreditCard size={24} />
            </button>
            <button 
              className={`cart-payment-option ${selectedPayment === 'upi' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('upi')}
            >
              <Smartphone size={24} />
            </button>
          </div>
        </div>

        <div className="cart-checkout-summary">
          <div className="cart-summary-row">
            <span className="cart-summary-label">Subtotal</span>
            <span className="cart-summary-value">${subtotal.toFixed(2)}</span>
          </div>
          <div className="cart-summary-row cart-summary-spacing">
            <span className="cart-summary-label">Tax (8%)</span>
            <span className="cart-summary-value">${tax.toFixed(2)}</span>
          </div>
          <div className="cart-summary-total-row">
            <span className="cart-total-label">Total</span>
            <span className="cart-total-value">${total.toFixed(2)}</span>
          </div>
          
          <button className="cart-action-btn" onClick={handleCheckout}>
            {selectedPayment === 'apple' ? 'Pay with Apple Pay' : 'Pay Now'}
          </button>
        </div>

      </div>
    </div>
  );
};
