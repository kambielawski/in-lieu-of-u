import React from 'react';

import {
  Nav,
  Navbar,
} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">In Lieu of U</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/blog">Blog</Nav.Link>
        {/* <Nav.Link href="/links">Learn</Nav.Link> */}
        <Nav.Link href="/blog/BootingUp">About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
