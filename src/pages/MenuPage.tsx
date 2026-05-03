import { useState } from 'react';
import { ShoppingBag, Plus, Search, Filter } from 'lucide-react';
import type { MenuItem } from '../types';
import './MenuPage.css';

const MOCK_MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Cheeseburger',
    description: 'Angus beef patty with cheddar, lettuce, and house sauce',
    price: 8.99,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '2',
    name: 'Truffle Fries',
    description: 'Crispy fries tossed in truffle oil and parmesan',
    price: 4.99,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '3',
    name: 'Spicy Chicken Sandwich',
    description: 'Crispy fried chicken breast with spicy mayo',
    price: 7.99,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '4',
    name: 'Mango Smoothie',
    description: 'Fresh mangoes blended with yogurt and honey',
    price: 5.49,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=300&q=80'
  }
];

const CATEGORIES = ['All', 'Burgers', 'Sandwiches', 'Sides', 'Drinks'];

interface MenuPageProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemCount: number;
  onViewCart: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart, cartItemCount, onViewCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenu = MOCK_MENU.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container animate-fade-in" style={{ padding: '0', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div className="menu-header glass-panel" style={{ borderRadius: '0 0 var(--radius-lg) var(--radius-lg)', padding: '24px 24px 16px', zIndex: 10 }}>
        <div className="flex-between mb-4 mt-4">
          <div>
            <h2 className="text-h2">Menu</h2>
            <p className="text-caption">The Food Court</p>
          </div>
          <div className="cart-icon-wrapper" onClick={onViewCart}>
            <ShoppingBag size={24} className="text-primary" />
            {cartItemCount > 0 && (
              <span className="cart-badge animate-scale-in">{cartItemCount}</span>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="search-bar mb-4">
          <Search size={20} className="text-secondary" />
          <input 
            type="text" 
            placeholder="Search items..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Filter size={20} className="text-secondary" />
        </div>

        {/* Categories */}
        <div className="categories-scroll hide-scrollbar">
          {CATEGORIES.map(category => (
            <button 
              key={category}
              className={`category-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div className="menu-list" style={{ flex: 1, overflowY: 'auto', padding: '16px 24px 100px' }}>
        {filteredMenu.map((item, index) => (
          <div 
            key={item.id} 
            className="menu-item-card glass-panel animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="menu-item-content">
              <h3 className="text-body" style={{ fontWeight: 600 }}>{item.name}</h3>
              <p className="text-caption mb-2 mt-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {item.description}
              </p>
              <span className="text-accent" style={{ fontWeight: 700 }}>${item.price.toFixed(2)}</span>
            </div>
            
            <div className="menu-item-action flex-col flex-center">
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <button 
                className="add-to-cart-btn"
                onClick={() => onAddToCart(item)}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating View Cart Button */}
      {cartItemCount > 0 && (
        <div className="floating-cart-wrapper animate-slide-up">
          <button className="btn-primary flex-between" onClick={onViewCart}>
            <div className="flex-center gap-2">
              <ShoppingBag size={20} />
              <span>View Cart ({cartItemCount})</span>
            </div>
            <span>Checkout</span>
          </button>
        </div>
      )}
    </div>
  );
};
