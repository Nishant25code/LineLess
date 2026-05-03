import { useState, useEffect } from 'react';
import { ShoppingBag, Plus, Search, Filter, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import type { MenuItem } from '../types';
import './MenuPage.css';

export const MenuPage = () => {
  const navigate = useNavigate();
  const { addToCart, cartItemCount } = useCart();
  
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        // Using a free, public API without API keys for student-friendly basic code
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        
        if (!response.ok) {
          throw new Error('Failed to fetch food items');
        }
        
        const data = await response.json();
        
        if (data.meals) {
          // Map external API data to our clean MenuItem format
          const mappedItems: MenuItem[] = data.meals.map((meal: any) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            // Use the first part of instructions as description if available
            description: meal.strInstructions 
              ? meal.strInstructions.substring(0, 60) + '...' 
              : meal.strMeal,
            // Free APIs don't have prices, so generate a stable realistic price based on ID
            price: (parseInt(meal.idMeal) % 12) + 6.99,
            image: meal.strMealThumb,
            category: meal.strCategory,
          }));

          setMenuItems(mappedItems);

          // Extract unique categories dynamically from the fetched items
          const uniqueCategories = Array.from(new Set(mappedItems.map(item => item.category)));
          setCategories(['All', ...uniqueCategories]);
        } else {
          setMenuItems([]);
        }
      } catch (err) {
        setError('Failed to load menu. Please try again later.');
        console.error('Error fetching meals:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const filteredMenu = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="menu-container">
      
      <div className="menu-header">
        <h2 className="menu-title">Menu</h2>
        <p className="menu-subtitle">Real-time Food API</p>
      </div>

      {/* Search & Filters */}
      <div className="menu-search-bar">
        <Search size={20} className="menu-search-icon" />
        <input 
          type="text" 
          placeholder="Search items..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="menu-search-input"
        />
        <Filter size={20} className="menu-filter-icon" />
      </div>

      {/* Categories */}
      {!isLoading && !error && (
        <div className="menu-categories-scroll">
          {categories.map(category => (
            <button 
              key={category}
              className={`menu-category-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="menu-loading-state">
          <Loader2 size={32} className="menu-loading-spinner" />
          <p>Fetching real-time menu...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="menu-error-state">
          <p>{error}</p>
          <button className="menu-retry-btn" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      )}

      {/* Menu Grid */}
      {!isLoading && !error && (
        <div className="menu-grid">
          {filteredMenu.map((item) => (
            <div key={item.id} className="menu-item-card">
              <div className="menu-item-content">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-description">
                  {item.description}
                </p>
                <span className="menu-item-price">${item.price.toFixed(2)}</span>
              </div>
              
              <div className="menu-item-action-wrapper">
                <img src={item.image} alt={item.name} className="menu-item-image" />
                <button 
                  className="menu-add-to-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating View Cart Button */}
      {cartItemCount > 0 && (
        <div className="menu-floating-cart-wrapper">
          <div className="menu-floating-cart-inner">
            <button className="menu-view-cart-btn" onClick={() => navigate('/cart')}>
              <div className="menu-cart-info">
                <ShoppingBag size={20} />
                <span>View Cart ({cartItemCount})</span>
              </div>
              <span>Checkout</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
