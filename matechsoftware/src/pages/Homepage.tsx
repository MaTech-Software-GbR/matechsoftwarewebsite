import React, { useEffect, useRef, useState } from 'react';
import AboutUs from '../sections/AboutUs';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Home from '../sections/Home';
import Services from '../sections/Services';
import Work from '../sections/Work';

const Homepage: React.FC = () => {
  const [shouldBeSticky, setShouldBeSticky] = useState<boolean>(false);
  const windowRef = useRef<Window>(window);

  useEffect(() => {
    const windowVariable = windowRef.current;
    const handleScroll = () => {
      const homeComponent = document.getElementById('services') as HTMLElement;
      const homeComponentTop = homeComponent.getBoundingClientRect().top;
      homeComponentTop <= 0
        ? setShouldBeSticky(true)
        : setShouldBeSticky(false);
    };

    windowVariable.addEventListener('scroll', handleScroll);
    return () => {
      windowVariable.removeEventListener('scroll', handleScroll);
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
