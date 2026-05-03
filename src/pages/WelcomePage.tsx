import { ScanLine, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logoUrl from '../assets/logo.webp';
import './WelcomePage.css';

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-mobile-wrapper">
        
        <div className="welcome-header">
          <img src={logoUrl} alt="LineLess Logo" className="welcome-logo" />
          <h1 className="welcome-title">LineLess</h1>
          <p className="welcome-subtitle">Skip the line. Order and pay directly from your phone.</p>
        </div>

        <div className="welcome-card">
          
          <div className="scan-icon-wrapper">
            <ScanLine size={48} className="scan-icon" />
          </div>
          
          <div className="location-info">
            <h2 className="location-title">You're at The Food Court</h2>
            <div className="location-subtitle">
              <MapPin size={16} />
              <span>Sector 42, Metro Station</span>
            </div>
          </div>

          <button className="welcome-btn" onClick={() => navigate('/menu')}>
            View Menu & Order
          </button>
        </div>

        <div className="welcome-footer">
          Powered by LineLess Technology
        </div>

      </div>
    </div>
  );
};
