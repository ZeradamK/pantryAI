import { CartProvider } from '@/app/context/CartContext';
import '@/app/components/Navigation/nav.css';
import '@/app/components/LandingPage/landing.css';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
