import { useEffect, useState } from 'react';
import { Check, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

export const ConfirmationPage = () => {
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {

    setOrderNumber(Math.floor(1000 + Math.random() * 9000).toString());
  }, []);

  return (
    <div className="confirmation-container">
      <div className="confirmation-wrapper">
        
        <div className="confirmation-success-icon-wrapper">
          <Check size={48} className="confirmation-success-icon" />
        </div>

        <h1 className="confirmation-title">Order Confirmed!</h1>
        <p className="confirmation-subtitle">We've received your order and it's being prepared.</p>

        <div className="confirmation-order-card">
          <div className="confirmation-order-header">
            <span className="confirmation-order-label">Order Number</span>
            <span className="confirmation-order-value">#{orderNumber}</span>
          </div>

          <div className="confirmation-order-details">
            <div className="confirmation-detail-row">
              <div className="confirmation-detail-label">
                <Clock size={18} />
                <span>Prep Time</span>
              </div>
              <span className="confirmation-detail-value">10-15 mins</span>
            </div>
            <div className="confirmation-detail-row">
              <div className="confirmation-detail-label">
                <MapPin size={18} />
                <span>Pickup At</span>
              </div>
              <span className="confirmation-detail-value">Counter 4</span>
            </div>
          </div>
        </div>

        <button className="confirmation-home-btn" onClick={() => navigate('/')}>
          Back to Home
        </button>

      </div>
    </div>
  );
};
