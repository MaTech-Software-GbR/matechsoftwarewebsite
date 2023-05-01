import React, { useCallback, useEffect, useRef, useState } from 'react';
import Homepage from './pages/Homepage';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [, setOffset] = useState(0);
  const onScroll = useCallback(() => setOffset(window.scrollY), []);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <div className="App" ref={scrollRef}>
      <Homepage />
    </div>
  );
};

export default App;
