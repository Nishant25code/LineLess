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
    <div className="container" style={{ paddingBottom: '100px' }}>
      
      <div className="mb-6">
        <h2 className="text-h2">Menu</h2>
        <p className="text-caption">Real-time Food API</p>
      </div>

      {/* Search & Filters */}
      <div className="search-bar card mb-6">
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
      {!isLoading && !error && (
        <div className="categories-scroll hide-scrollbar mb-6">
          {categories.map(category => (
            <button 
              key={category}
              className={`category-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex-col flex-center" style={{ padding: '40px 0', color: 'var(--text-secondary)' }}>
          <Loader2 size={32} className="animate-spin mb-4" />
          <p>Fetching real-time menu...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex-col flex-center" style={{ padding: '40px 0', color: 'var(--danger)' }}>
          <p>{error}</p>
          <button className="btn-primary mt-4" onClick={() => window.location.reload()} style={{ width: 'auto' }}>
            Retry
          </button>
        </div>
      )}

      {/* Menu Grid */}
      {!isLoading && !error && (
        <div className="menu-grid">
          {filteredMenu.map((item) => (
            <div key={item.id} className="menu-item-card card">
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
        <div className="floating-cart-wrapper">
          <div className="mobile-wrapper">
            <button className="btn-primary flex-between" onClick={() => navigate('/cart')}>
              <div className="flex-center gap-2">
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
