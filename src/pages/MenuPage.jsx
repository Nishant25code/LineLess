import { useState, useEffect } from 'react';
import { ShoppingBag, Plus, Search, Filter, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import './MenuPage.css';

export const MenuPage = () => {
  const navigate = useNavigate();
  const { addToCart, cartItemCount } = useCart();
  
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);


        const cachedMenu = sessionStorage.getItem('cachedMenuItems');
        if (cachedMenu) {
          const parsedItems = JSON.parse(cachedMenu);
          setMenuItems(parsedItems);
          const uniqueCategories = Array.from(new Set(parsedItems.map((item) => item.category)));
          setCategories(['All', ...uniqueCategories]);
          setIsLoading(false);
          return;
        }


        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        
        if (!response.ok) {
          throw new Error('Failed to fetch food items');
        }
        
        const data = await response.json();
        
        if (data.meals) {

          const mappedItems = data.meals.map((meal) => ({
            id: meal.idMeal,
            name: meal.strMeal,

            description: meal.strInstructions 
              ? meal.strInstructions.substring(0, 60) + '...' 
              : meal.strMeal,

            price: (parseInt(meal.idMeal) % 12) + 6.99,
            image: meal.strMealThumb,
            category: meal.strCategory,
          }));

          setMenuItems(mappedItems);


          const uniqueCategories = Array.from(new Set(mappedItems.map(item => item.category)));
          setCategories(['All', ...uniqueCategories]);


          sessionStorage.setItem('cachedMenuItems', JSON.stringify(mappedItems));
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
        <h2 className="menu-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem' }}>Our Regular Food</h2>
      </div>


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


      {isLoading && (
        <div className="menu-loading-state">
          <Loader2 size={32} className="menu-loading-spinner" />
          <p>Fetching menu...</p>
        </div>
      )}


      {error && (
        <div className="menu-error-state">
          <p>{error}</p>
          <button className="menu-retry-btn" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      )}


      {!isLoading && !error && (
        <div className="menu-section-header" style={{ marginBottom: '32px' }}>
          <h2 className="menu-title" style={{ fontFamily: "'Noto Serif', serif", fontSize: '28px', color: 'var(--text-primary)' }}>
            {activeCategory}
          </h2>
        </div>
      )}


      {!isLoading && !error && (
        <div className="menu-grid">
          {filteredMenu.map((item) => (
            <article key={item.id} className="menu-item-card">
              <div className="menu-item-image-wrapper">
                <img src={item.image} alt={item.name} className="menu-item-image" loading="lazy" />
              </div>
              
              <div className="menu-item-content">
                <div className="menu-item-text-group">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-description">
                    {item.description}
                  </p>
                </div>
                <span className="menu-item-price">${item.price.toFixed(2)}</span>
              </div>
              
              <div className="menu-item-footer">
                <div className="menu-item-tags">

                </div>
                <button 
                  className="menu-add-to-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add <Plus size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}


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
