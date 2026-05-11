import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the window
    window.scrollTo(0, 0);

    // Also scroll the .content div since that's where the actual scrolling happens
    const contentDiv = document.querySelector('.content');
    if (contentDiv) {
      contentDiv.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
