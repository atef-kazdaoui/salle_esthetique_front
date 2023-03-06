import React from 'react';
import { Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import './Footer.css';
function Footer() {
  return (
    
    <Navbar bg="light" className='bg-dark py-3 sticky-bottom d-flex align-items-center' id='footer'  >
      <Container>
        <Row className='row mx-auto'>
          <Col xs={12} md={4}>
            <Nav className="mr-auto">
              <Nav.Link className='navlink' href="#">Link 1</Nav.Link>
              <Nav.Link href="#">Link 2</Nav.Link>
              <Nav.Link href="#">Link 3</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={4} className="text-center" >
            <p>Copyright &copy; {new Date().getFullYear()}</p>
          </Col>
          <Col xs={12} md={4} className="text-right">
            <Nav className="ml-auto">
              <Nav.Link href="#">Link 4</Nav.Link>
              <Nav.Link href="#">Link 5</Nav.Link>
              <Nav.Link href="#">Link 6</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
