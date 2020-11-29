import React, { Component } from 'react';
import Navbar from './Components/NavBar/Navbar';
import Introduction from './Components/Introduction';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact Us';
import WhatsApp from './Components/WhatsApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Introduction />
        <Services />
        <Testimonials />
        <Contact />
        <WhatsApp />
      </div>
    );
  }
}

export default App;
// id="section3"
