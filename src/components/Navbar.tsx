import { ShoppingBag } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../CartContext';
import logoUrl from '../assets/logo.webp';
import './Navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItemCount } = useCart();

  // Navbar is now visible on all pages including the home page
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => navigate('/')}>
          <img src={logoUrl} alt="LineLess Logo" style={{ width: 32, height: 32, objectFit: 'contain' }} />
          <span className="navbar-title">LineLess</span>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <button 
            className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}
            onClick={() => navigate('/menu')}
          >
            Menu
          </button>
        </div>

        {/* Cart Icon */}
        <div className="navbar-cart">
          <button className="cart-icon-btn" onClick={() => navigate('/cart')}>
            <ShoppingBag size={24} />
            {cartItemCount > 0 && (
              <span className="cart-badge-nav">{cartItemCount}</span>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
};
