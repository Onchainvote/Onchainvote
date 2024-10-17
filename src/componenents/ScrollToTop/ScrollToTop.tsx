import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Run every time the pathname changes
  return null; 
};

export default ScrollToTop;
