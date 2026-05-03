import { useState } from 'react';
import { ArrowLeft, Trash2, Minus, Plus, CreditCard, Apple, Smartphone } from 'lucide-react';
import type { CartItem } from '../types';
import './CartPage.css';

interface CartPageProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
  onBack: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ cart, onUpdateQuantity, onCheckout, onBack }) => {
  const [selectedPayment, setSelectedPayment] = useState('apple');
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="container flex-col flex-center animate-fade-in" style={{ padding: '24px' }}>
        <button className="back-btn self-start mb-8" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="text-center mt-8">
          <div className="empty-cart-icon mb-6">🛒</div>
          <h2 className="text-h2 mb-2">Your cart is empty</h2>
          <p className="text-body mb-8">Looks like you haven't added anything yet.</p>
          <button className="btn-primary" onClick={onBack}>Browse Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
      <div className="flex-between mb-6">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-h2 text-center flex-1" style={{ marginRight: '24px' }}>Checkout</h2>
      </div>

      <div className="cart-items-list hide-scrollbar mb-6" style={{ flex: 1, overflowY: 'auto' }}>
        {cart.map((item, index) => (
          <div key={item.id} className="cart-item glass-panel mb-4 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            
            <div className="cart-item-details">
              <h3 className="text-body" style={{ fontWeight: 600 }}>{item.name}</h3>
              <p className="text-accent mb-2" style={{ fontWeight: 700 }}>${item.price.toFixed(2)}</p>
              
              <div className="quantity-controls">
                <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, -1)}>
                  {item.quantity === 1 ? <Trash2 size={14} className="text-danger" /> : <Minus size={14} />}
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, 1)}>
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="payment-methods mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-body mb-3" style={{ fontWeight: 600 }}>Payment Method</h3>
        <div className="payment-options">
          <button 
            className={`payment-option ${selectedPayment === 'apple' ? 'active' : ''}`}
            onClick={() => setSelectedPayment('apple')}
          >
            <Apple size={24} />
          </button>
          <button 
            className={`payment-option ${selectedPayment === 'card' ? 'active' : ''}`}
            onClick={() => setSelectedPayment('card')}
          >
            <CreditCard size={24} />
          </button>
          <button 
            className={`payment-option ${selectedPayment === 'upi' ? 'active' : ''}`}
            onClick={() => setSelectedPayment('upi')}
          >
            <Smartphone size={24} />
          </button>
        </div>
      </div>

      <div className="checkout-summary glass-panel animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="summary-row mb-2">
          <span className="text-secondary">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row mb-4">
          <span className="text-secondary">Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row total-row mb-6">
          <span className="text-h2">Total</span>
          <span className="text-h2 text-accent">${total.toFixed(2)}</span>
        </div>
        
        <button className="btn-primary" onClick={onCheckout}>
          {selectedPayment === 'apple' ? 'Pay with Apple Pay' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
};
