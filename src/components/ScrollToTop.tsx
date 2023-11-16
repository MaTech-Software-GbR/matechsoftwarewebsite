import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop component ensures the page is scrolled to the top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
