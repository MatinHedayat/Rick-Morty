import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollPosition() {
  const favoritesRef = useRef();
  const initialState = localStorage.getItem('scrollPosition');
  const [scrollPosition, setScrollPosition] = useState(initialState);
  const handleScrollPosition = (e) => setScrollPosition(e.target.scrollTop);

  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('scrollPosition', scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    if (location.state) {
      setTimeout(() => {
        favoritesRef.current.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });
      }, 10);
    }
  }, []);

  return { handleScrollPosition, favoritesRef };
}
