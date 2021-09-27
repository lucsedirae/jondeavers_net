import { Navbar, Nav } from 'react-bootstrap';
export default function Navibar() {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand className="p-2">Jon Deavers</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'> Home</Nav.Link>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='/blog'>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
