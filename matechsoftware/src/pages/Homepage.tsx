import React from 'react';
import AboutUs from '../Sections/AboutUs';
import Contact from '../Sections/Contact';
import Footer from '../Sections/Footer';
import Header from '../Sections/Header';
import Home from '../Sections/Home';
import Services from '../Sections/Services';
import Work from '../Sections/Work';

const App: React.FC = () => {
  return (
    <div>
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
