import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navbar/navbar.css';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <Navbar  expand="lg" className='navbar-dark bg-dark'>
      <Container fluid>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            id='Navbar'
          >
            
            <Nav.Link as={Link} to="/"  >Home</Nav.Link>
            <Nav.Link as={Link} to="/">Nos local</Nav.Link>
            <Nav.Link as={Link} to="/">aaaa</Nav.Link>
            <Nav.Link as={Link} to="/">bbbb</Nav.Link>
            <Nav.Link as={Link} to="/connexion">Connexion</Nav.Link>
            <Nav.Link as={Link} to="/Apropos">A propos de nous</Nav.Link>
            
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           <Button variant="outline-secondary">Recherche</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;