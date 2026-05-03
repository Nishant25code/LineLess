import { useEffect, useState } from 'react';
import { Check, MapPin, Clock } from 'lucide-react';
import './ConfirmationPage.css';

interface ConfirmationPageProps {
  onBackToHome: () => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onBackToHome }) => {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Generate random 4 digit order number
    setOrderNumber(Math.floor(1000 + Math.random() * 9000).toString());
  }, []);

  return (
    <div className="container flex-col flex-center animate-fade-in" style={{ padding: '24px' }}>
      
      <div className="success-animation-container mb-8 animate-scale-in">
        <div className="success-circle">
          <Check size={48} className="text-primary" />
        </div>
      </div>

      <h1 className="text-h1 mb-2 text-center">Order Confirmed!</h1>
      <p className="text-body text-center mb-8">We've received your order and it's being prepared.</p>

      <div className="glass-panel w-100 mb-8 animate-slide-up" style={{ padding: '24px', width: '100%', animationDelay: '0.2s' }}>
        <div className="flex-col flex-center mb-6" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '24px' }}>
          <span className="text-secondary mb-1">Order Number</span>
          <span className="text-h1 text-accent" style={{ fontSize: '3rem' }}>#{orderNumber}</span>
        </div>

        <div className="flex-col gap-4">
          <div className="flex-between">
            <div className="flex-center gap-2 text-secondary">
              <Clock size={18} />
              <span>Prep Time</span>
            </div>
            <span style={{ fontWeight: 600 }}>10-15 mins</span>
          </div>
          <div className="flex-between">
            <div className="flex-center gap-2 text-secondary">
              <MapPin size={18} />
              <span>Pickup At</span>
            </div>
            <span style={{ fontWeight: 600 }}>Counter 4</span>
          </div>
        </div>
      </div>

      <button className="btn-primary mt-auto animate-slide-up" style={{ animationDelay: '0.4s' }} onClick={onBackToHome}>
        Back to Home
      </button>

    </div>
  );
};
