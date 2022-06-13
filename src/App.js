import React from "react";
import {Navbar, Footer, Header, About, Contact, Services} from "./components";
import "./App.css";

function App() {
  return (
    <div id='app' className='app'>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
