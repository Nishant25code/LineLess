import { useState } from 'react';
import { WelcomePage } from './pages/WelcomePage';
import { MenuPage } from './pages/MenuPage';
import { CartPage } from './pages/CartPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import type { MenuItem, CartItem } from './types';

type Page = 'welcome' | 'menu' | 'cart' | 'confirmation';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('welcome');
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleCheckout = () => {
    setCurrentPage('confirmation');
    setCart([]); // Clear cart after successful order
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {currentPage === 'welcome' && (
        <WelcomePage onScanComplete={() => setCurrentPage('menu')} />
      )}
      {currentPage === 'menu' && (
        <MenuPage 
          onAddToCart={handleAddToCart} 
          cartItemCount={cartItemCount} 
          onViewCart={() => setCurrentPage('cart')} 
        />
      )}
      {currentPage === 'cart' && (
        <CartPage 
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={handleCheckout}
          onBack={() => setCurrentPage('menu')}
        />
      )}
      {currentPage === 'confirmation' && (
        <ConfirmationPage onBackToHome={() => setCurrentPage('welcome')} />
      )}
    </>
  );
}

export default App;
