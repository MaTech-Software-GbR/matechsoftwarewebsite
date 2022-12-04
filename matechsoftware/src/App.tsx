import React from 'react';
import './App.css';
import './Base.css';
import AboutUs from './Sections/AboutUs';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';
import Header from './Sections/Header';
import Home from './Sections/Home';
import Nav from './Sections/Nav';
import Services from './Sections/Services';
import Work from './Sections/Work';

const App: React.FC = () => {
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
