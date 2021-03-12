import { Navbar, Container } from 'react-bootstrap';

import LeftNavLinks from './NavLinks/LeftNavLinks';
import RightNavLinks from './NavLinks/RightNavLinks';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Virtual Stonks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <LeftNavLinks />
          <RightNavLinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
