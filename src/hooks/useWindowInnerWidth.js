import { useEffect, useState } from 'react';

export default function useWindowInnerWidth(pxNumber) {
  const [windowWidth, setWindowWidth] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth >= pxNumber
        ? setWindowWidth(true)
        : setWindowWidth(false);

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
