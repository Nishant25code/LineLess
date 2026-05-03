import { MapPin, Beef, Pizza } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-page-container">
      <div className="welcome-content-split">
        
        {/* Left Side Content */}
        <div className="welcome-left-section">
          <h1 className="welcome-hero-title">People who Love to Eat are always best</h1>
          <p className="welcome-hero-subtitle">Skip the line. Order and pay directly from your phone. Enjoy your favorite meals without the wait.</p>
          
          <div className="welcome-location-search">
            <div className="welcome-location-input-wrapper">
              <MapPin size={20} className="welcome-location-icon" />
              <input type="text" placeholder="Location" className="welcome-location-input" defaultValue="Sector 42, Food Court" />
            </div>
            <button className="welcome-find-btn" onClick={() => navigate('/menu')}>
              Find Now
            </button>
          </div>

          <div className="welcome-floating-cards">
             <div className="welcome-small-card">
               <div className="welcome-small-card-icon-wrapper" style={{ background: '#fdf2f8', padding: '10px', borderRadius: '50%', color: '#db2777' }}>
                 <Beef size={20} />
               </div>
               <div className="welcome-small-card-text">
                 <span className="welcome-small-card-name">Burger</span>
                 <span className="welcome-small-card-price">$10.25</span>
               </div>
             </div>
             <div className="welcome-small-card">
               <div className="welcome-small-card-icon-wrapper" style={{ background: '#fffbeb', padding: '10px', borderRadius: '50%', color: '#d97706' }}>
                 <Pizza size={20} />
               </div>
               <div className="welcome-small-card-text">
                 <span className="welcome-small-card-name">Pizza</span>
                 <span className="welcome-small-card-price">$20.25</span>
               </div>
             </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="welcome-right-section">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80" 
            alt="Delicious Pizza" 
            className="welcome-hero-image" 
          />
        </div>

      </div>

      <div className="welcome-bottom-section">
        <div className="welcome-bottom-content">
          <h2 className="welcome-bottom-title">We pride ourselves on making real food from best ingredients</h2>
          <p className="welcome-bottom-subtitle">Skip the line and get your freshly prepared meal fast and easy.</p>
          <button className="welcome-order-btn" onClick={() => navigate('/menu')}>Order Now</button>
        </div>
      </div>
    </div>
  );
};
