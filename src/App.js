import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }

    if (currentPage === 'About') {
      return <About />;
    }

    if (currentPage === 'Footer') {
      return <Footer />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className="App d-flex flex-column justify-content-between">
      <Navbar
        currentPage = {currentPage}
        handlePageChange = {handlePageChange}
      ></Navbar>


      {renderPage()}
      <Footer></Footer>
    </div>
  );
}

export default App;
