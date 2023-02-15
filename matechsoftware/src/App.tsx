import React, { useEffect, useState } from 'react';
import './SCSS/App.scss';
import './SCSS/Base.scss';
import AboutUs from './Sections/AboutUs';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';
import Header from './Sections/Header';
import Home from './Sections/Home';
import Nav from './Sections/Nav';
import Services from './Sections/Services';
import Work from './Sections/Work';

const App: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
      <Nav />
      <Header />
      <Home />
      <Services />
      <Work />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
