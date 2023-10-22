import React, { useCallback, useEffect, useRef, useState } from 'react';
import Homepage from './pages/Homepage';

declare global {
  interface Window {
    _mtm: any;
  }
}

const App: React.FC = () => {
  const [, setOffset] = useState(0);
  const onScroll = useCallback(() => setOffset(window.scrollY), []);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' });
    (function () {
      const d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
      g.async = true;
      g.src = 'https://analytics.matech-software.de/js/container_Dwaw5hA9.js';
      s.parentNode?.insertBefore(g, s);
    })();
  }, []);

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
