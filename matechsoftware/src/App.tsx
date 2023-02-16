import React, { createRef, useEffect, useState } from 'react';
import Homepage from './pages/Homepage';

const App: React.FC = () => {
  const [, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
      <Homepage />
    </div>
  );
};

export default App;
