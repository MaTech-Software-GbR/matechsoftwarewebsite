import React, { useEffect, useRef, useState } from 'react';
import AboutUs from '../Sections/AboutUs';
import Contact from '../Sections/Contact';
import Footer from '../Sections/Footer';
import Header from '../Sections/Header';
import Home from '../Sections/Home';
import Services from '../Sections/Services';
import Work from '../Sections/Work';

const Homepage: React.FC = () => {
  const [shouldBeSticky, setShouldBeSticky] = useState<boolean>(false);
  const windowRef = useRef<Window>(window);

  useEffect(() => {
    const handleScroll = () => {
      const homeComponent = document.getElementById('services') as HTMLElement;
      const homeComponentTop = homeComponent.getBoundingClientRect().top;
      homeComponentTop <= 0
        ? setShouldBeSticky(true)
        : setShouldBeSticky(false);
    };

    windowRef.current.addEventListener('scroll', handleScroll);
    return () => {
      windowRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header shouldBeSticky={shouldBeSticky} />
      <Home />
      <Services />
      <Work />
      <AboutUs />
      <Contact />
      <Footer shouldBeSticky={shouldBeSticky} />
    </div>
  );
};

export default Homepage;
