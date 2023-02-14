import Link from 'link/next'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ImageIcon from '../../assets/logo.png';
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={ImageIcon} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/projects">Projects</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;