import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar } from 'react-bootstrap';
import './Sidebar.css'; // Import your custom CSS file for additional styling

const Sidebarnew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991); // Check if screen is small on initial load

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Listen to window resize to update screen size status
  window.addEventListener('resize', () => {
    setIsSmallScreen(window.innerWidth <= 991);
  });

  return (
    <>
      {/* Navbar for small devices */}
      {isSmallScreen && (
        <Navbar expand="lg" variant="dark" bg="primary" className="fixed-top">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar} />
          <Navbar.Collapse id="basic-navbar-nav" className={`${isOpen ? 'show' : ''}`}>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}

      {/* Sidebar for large devices */}
      {!isSmallScreen && (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            {/* <FontAwesomeIcon icon={isOpen ? faTimes : faBars} /> */}
          </div>
          <Nav className="flex-column text-dark">
            <Nav.Link href="#home" className='text-light '>TicketBooking</Nav.Link>
            <Nav.Link href="#features" className='text-light '>Ticket Status</Nav.Link>
            <Nav.Link href="#pricing" className='text-light '>Pricing</Nav.Link> 
          </Nav>
        </div>
      )}
    </>
  );
};

export default Sidebarnew;